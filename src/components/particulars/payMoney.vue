<template>
	<div class="payMoney">
		<div class="price">
			<span>
				￥188
			</span>
			<span>
				共一晚
			</span>
		</div>
		<div class="operation">
			<div class="hr"></div>
			<div class="chat">
				<img src="../../../static/icon/liaotian.png" />
				<span>聊天</span>
			</div>
			<button>
				立即预定
			</button>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.payMoney {
		width: 100%;
		height: 60px;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		border-top: 0.5px solid #e5e5e5;
		display: flex;
		flex-direction: row;

		.price {
			flex: 2;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;

			span:nth-child(1) {
				font-size: 25px;
				font-weight: 600;
				color: #1a1a1a;
				margin-left: 20px;
				color: #FF6D00;
			}

			span:nth-child(2) {
				font-size: 10px;
				letter-spacing: 0px;
				color: #1a1a1a;
				margin-left: 40px;
			}
		}

		.operation {
			flex: 3;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			align-items: center;

			.chat {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				span {
					font-size: 10px;
					margin-top: 5px;
				}

				img {
					width: 30px;
				}
			}

			button {
				width: 93px;
				height: 37px;
				background-color: #ff6b00;
				border: none;
				border-radius: 5px;
				color: #fff;
				font-size: 14px;
				font-weight: bold;
				letter-spacing: 3px;
			}

			.hr {
				width: 1px;
				height: 30px;
				background-color: #e6e5e5;
			}
		}

	}
</style>
