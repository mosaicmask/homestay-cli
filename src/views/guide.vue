<template>
	<!-- 引导页 -->
	<div class="guide">
		<van-swipe class="my-swipe" :loop="false" indicator-color="#fe5151" @change="onChange">
			<van-swipe-item>
				<div class="guideBody">
					<van-image width="375" height="556" fit="cover" :src="require('../../static/image/guide1.jpeg')" />
					<div class="span_box">
						<span class="s1">一键预定</span>
						<span class="s2">随时随地查看房源</span>
					</div>
				</div>
			</van-swipe-item>
			<van-swipe-item>
				<div class="guideBody">
					<van-image width="375" height="556" fit="cover" :src="require('../../static/image/guide2.jpeg')" />
					<div class="span_box">
						<span class="s1">来一场说走就走的旅行</span>
						<span class="s2">无后顾之忧</span>
					</div>
				</div>
			</van-swipe-item>
			<van-swipe-item>
				<div class="guideBody">
					<van-image width="375" height="556" fit="cover" :src="require('../../static/image/guide3.jpeg')" />
					<div class="span_box">
						<span class="s1">花样主题房源</span>
						<span class="s2">享受生活的美好温馨</span>
						<button class="goLogin" @click="goLogin">立即前往</button>
					</div>
				</div>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		methods: {
			onChange(index) {
				// Toast('当前 Swipe 索引：' + index);
			},
			goLogin(){
				this.$router.push({
					path: 'login'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.my-swipe {
		width: 375px;
		height: 667px;

		// .van-swipe-item {
		// 	color: #fff;
		// 	font-size: 20px;
		// 	line-height: 150px;
		// 	text-align: center;
		// }

		.guideBody {
			width: 375px;
			height: 667px;
			display: flex;
			flex-direction: column;
			align-items: center;
			.span_box{
				width: 450px;
				height: 180px;
				border-top-right-radius: 50%;
				border-top-left-radius: 50%;
				background-color: #ffffff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: fixed;
				bottom: 0px;
				.s1{
					font-size: 20px;
					font-weight: bold;
					color: #ff6b00;
					margin-top: 15px;
				}
				.s2{
					margin-top: 15px;
					margin-bottom: 15px;
					font-size: 16px;
					color: #ffcc00;
				}
				.goLogin{
					width: 150px;
					height: 40px;
					border-radius: 50px;
					border-style: none;
					background-color: #ff6b00;
					color: #ffffff;
					font-size: 18px;
					font-weight: 600;
					box-shadow: 1px 1px 10px #d1d1d1;
				}
			}
		}
	}
</style>
