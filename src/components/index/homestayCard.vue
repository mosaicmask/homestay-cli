<template>
	<div class="homestay_card" @click="goParticulars">
		<slot class="imgbox" name="item-img"></slot>
		<slot name="item-habitable_number"></slot>
		<slot class="title" name="item-title"></slot>
		<slot class="price" name="item-price"></slot>
	</div>
</template>

<script>
	export default {
		methods: {
			goParticulars() {
				this.$router.push({
					path: '/particulars'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.homestay_card {
		width: 143px;
		height: 170px;
		border-radius: 5px;
		margin: 20px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		box-shadow: 1px 1px 10px #efefef;

		img {
			width: 143px;
			height: 109px;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
		}

		.habitable_number {
			font-size: 9px;
			font-weight: normal;
			color: #acacac;
			margin-top: 5px;
			margin-left: 5px;
		}

		.title {
			font-size: 12px;
			font-weight: bold;
			color: #222020;
			margin-top: 5px;
			margin-left: 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}

		.price {
			font-size: 12px;
			font-weight: normal;
			color: #ff7e2e;
			margin-top: 10px;
			margin-left: 5px;
		}
	}
</style>
