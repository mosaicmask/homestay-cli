<template>
	<div class="messageBox">
		<div class="messageBox_left">
			<slot name="userimg"></slot>
		</div>
		<div class="messageBox_right">
			<div class="messageBox_right_top">
				<slot name="title"></slot>
				<slot name="time"></slot>
			</div>
			<div class="messageBox_right_bottom">
				<slot name="preview"></slot>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.messageBox {
		width: 375px;
		height: 70px;
		margin: 0 auto;
		padding: 0px 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #fff;

		.messageBox_left {
			width: 70px;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
			}
		}

		.messageBox_right {
			width: 285px;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.messageBox_right_top {
				flex: 1;
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				span {
					font-size: 18px;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 1px;
					color: #000000;
				}

				.time {
					font-size: 12px;
					color: #9c9c9c;
				}

				.preview {
					font-size: 14px;
				}
			}

			.messageBox_right_bottom {
				.messageBox_right_top()
			}
		}
	}
</style>
