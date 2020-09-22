<template>
	<!-- 单独可复用的tebbar item -->
	<div class="tabbbar_item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			path: String,
			activeColor: {
				type: String,
				default: '#03a7ff'
			}
		},
		data() {
			return {}
		},
		computed: {
			isActive() {
				// this.$router活跃的path，this.path是item各自的paht
				return !this.$route.path.indexOf(this.path)
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods: {
			// 点击跳转到对应路由
			itemClick() {
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style lang="less" scoped>
	.tabbbar_item {
		width: 60px;
		height: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 99 !important;

		img {
			width: 25px;
			height: 25px;
		}

		span {
			font-size: 12px;
		}
		
		div{
			height: auto;
		}
	}
</style>
