<template>
	<div>
		<template v-for="item in 3">
			<div class="likeCard">
				<img class="show_img" src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg">
				<div class="title">春熙路太古里/建设路/熊猫基地半高空景观</div>
				<div class="describe">实拍-整套1居1床2人-5.0分/1314点评</div>
				<div class="userbox">
					<div class="userbox_left">
						<div class="userbox_left_top">
							<van-tag type="warning" round size="large">新房特惠</van-tag>
							<van-tag type="warning" round size="large">闪订</van-tag>
							<van-tag type="warning" round size="large">可做饭</van-tag>
						</div>
						<div class="userbox_left_bottom">
							<span class="price">￥188/晚</span>
						</div>
					</div>
					<div class="userbox_right">
						<img class="user_img" src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg">
					</div>
				</div>
				<div class="precedence">5.0 “超赞” 29次好评</div>
			</div>
		</template>
	</div>
</template>

<script>
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

					span {
						margin: 0px 5px;
						background-color: #ff976a70;
					}
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
			width: auto;
			height: 32px;
			background-color: #fbfbfb;
			border-radius: 16px;
			padding: 0px 10px;
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
