<template>
	<div>
		<template v-for="item in 3">
			<div class="likeCard" @click="goParticulars">
				<img class="show_img" src="../../../static/image/like (2).png">
				<div class="title">春熙路太古里/建设路/熊猫基地半高空景观</div>
				<div class="describe">实拍-整套1居1床2人-5.0分/1314点评</div>
				<div class="userbox">
					<div class="userbox_left">
						<div class="userbox_left_top">
							<van-tag type="warning" round size="large">连住优惠</van-tag>
						</div>
						<div class="userbox_left_bottom">
							<span class="price">￥188</span>
							<div class="label">
								<img class="label_icon" :src="require('../../../static/icon/laba.png')">
								<div class="label_text">
									已减￥122
								</div>
							</div>
							<span class="minititle">国庆大促限时专享</span>
						</div>
					</div>
					<div class="userbox_right">
						<img class="user_img" src="../../../static/image/influencer (9).jpg">
					</div>
				</div>
				<div class="precedence">优先</div>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		methods: {
			goParticulars() {
				// 命名的路由
				this.$router.push({
					name: 'particulars'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.likeCard {
		width: 355px;
		height: 370px;
		margin: 0 auto;
		margin-top: 10px;
		box-shadow: 1px 1px 10px #eeeeee;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		.show_img {
			width: 335px;
			height: 225px;
			border-radius: 5px;
			margin: 0 auto;
			margin-top: 10px;
		}

		.title {
			width: 94%;
			text-align: left;
			font-size: 16px;
			font-weight: normal;
			font-stretch: normal;
			line-height: 22px;
			margin-top: 10px;
			letter-spacing: 0px;
			color: #010101;
		}

		.describe {
			text-align: left;
			width: 94%;
			margin-top: 15px;
			font-size: 12px;
			font-weight: normal;
			letter-spacing: 0px;
			color: #353030;
		}

		.userbox {
			height: 60px;
			width: 94%;
			margin-top: 10px;
			display: flex;
			flex-direction: row;
			align-items: center;

			.userbox_left {
				width: 270px;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.userbox_left_top {
					flex: 1;
					width: 100%;
					display: flex;
					align-items: center;
				}

				.userbox_left_bottom {
					flex: 1;
					width: 100%;
					display: flex;
					align-items: center;

					.price {
						font-size: 18px;
						letter-spacing: 0px;
						color: #f17f4c;
					}

					.label {
						width: 80px;
						height: 17px;
						background-color: #fe5c56;
						border-radius: 8px;
						margin: 0px 5px;
						padding: 1px;
						display: flex;
						flex-direction: row;
						align-items: center;

						.label_text {
							font-size: 5px;
							letter-spacing: 0px;
							color: #e5dfdd;
						}

						.label_icon {
							width: 12px;
							height: 12px;
							margin: 0px 3px 0px 0px;
						}
					}

					.minititle {
						font-size: 13px;
						letter-spacing: 0px;
						color: #f5615e;
					}
				}
			}

			.userbox_right {
				display: flex;
				align-items: center;
				justify-content: center;

				.user_img {
					width: 45px;
					height: 45px;
					background-color: #f7853f;
					border-radius: 23px;
				}
			}
		}

		.precedence {
			width: 58px;
			height: 32px;
			background-color: #fbfbfb;
			border-radius: 16px;
			font-size: 13px;
			line-height: 32px;
			letter-spacing: 0px;
			color: #f5615e;
			position: absolute;
			top: 197px;
			left: 15px;
		}
	}
</style>
