<template>
	<!-- 我的 -->
	<div class="my">
		<topnav></topnav>
		<div class="img_bg">
			<img class="bg_img" src="../../static/image/1096072529.jpg" alt="">
		</div>
		<user-card></user-card>
		<van-cell title="我的订单" is-link value="全部订单" :border="false" />
		<div class="item_box">
			<me-item>
				<img slot="item_icon" src="../../static/icon/zhifu.png" alt="">
				<span slot="item_text">待支付</span>
			</me-item>
		</div>
		<tap-bar></tap-bar>
	</div>
</template>

<script>
	import TapBar from '@/components/tabbar/tabbar.vue'
	import topnav from '@/components/my/topnav.vue'
	import userCard from '@/components/my/userCard.vue'
	import meItem from '@/components/my/meItem.vue'
	export default {
		components: {
			TapBar,
			topnav,
			userCard,
			meItem
		}
	}
</script>

<style lang="less" scoped>
	.my {
		width: 375px;
		height: 667px;

		.img_bg {
			width: 375px;
			height: 253px;

			.bg_img {
				width: 375px;
				height: 253px;
				filter: blur(5px);
				z-index: -1;
			}
		}

		.van-cell__title {
			text-align: left !important;
		}

		.item_box {
			width: 100%;
			height: 80px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
		}
	}
</style>
