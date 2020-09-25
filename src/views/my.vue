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
			<template v-for="item in item_list">
				<me-item>
					<img slot="item_icon" :src="item.icon" alt="">
					<span slot="item_text">{{item.text}}</span>
				</me-item>
			</template>
		</div>
		<van-cell title="领券中心" :border="false" />
		<div class="item_box">
			<template v-for="item in item_list_2">
				<me-item>
					<img slot="item_icon" :src="item.icon" alt="">
					<span slot="item_text">{{item.text}}</span>
				</me-item>
			</template>
		</div>
		<van-cell title="工具与服务" :border="false" />
		<div class="item_box">
			<template v-for="item in item_list_3">
				<me-item>
					<img slot="item_icon" :src="item.icon" alt="">
					<span slot="item_text">{{item.text}}</span>
				</me-item>
			</template>
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
		data() {
			return {
				item_list: [{
						icon: require('../../static/icon/zhifu.png'),
						text: '待支付'
					},
					{
						icon: require('../../static/icon/ruzhu.png'),
						text: '待入住'
					},
					{
						icon: require('../../static/icon/dianping.png'),
						text: '待点评'
					},
					{
						icon: require('../../static/icon/tuikuan.png'),
						text: '退款单'
					}
				],
				item_list_2: [{
						icon: require('../../static/icon/lingquanzhongxin (2).png'),
						text: '免押入住'
					},
					{
						icon: require('../../static/icon/lingquanzhongxin (1).png'),
						text: '学生特权'
					},
					{
						icon: require('../../static/icon/lingquanzhongxin (4).png'),
						text: '特权卡券'
					},
					{
						icon: require('../../static/icon/lingquanzhongxin (3).png'),
						text: '商旅出行'
					}
				],
				item_list_3: [{
						icon: require('../../static/icon/gongju (5).png'),
						text: '常用人入住'
					},
					{
						icon: require('../../static/icon/gongju (3).png'),
						text: '一见管家'
					},
					{
						icon: require('../../static/icon/gongju (2).png'),
						text: '邀请好友'
					},
					{
						icon: require('../../static/icon/gongju (1).png'),
						text: '联系客服'
					},
					{
						icon: require('../../static/icon/gongju (4).png'),
						text: '意见反馈'
					}
				]
			}
		},
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
