<template>
	<div class="recommended">
		<div class="location">
			<img src="../../../static/icon/weizhi.png">
			<span>
				距离仙霞路地铁站步行6min
			</span>
		</div>
		<div class="advantage">
			<div class="advantage_left">
				<div class="advantage_left_top">
					<img src="../../../static/icon/dagou.png">
					<span>面积大</span>
				</div>
				<div class="advantage_left_bottom">
					<span>比附近经济型酒店面积大16m</span>
				</div>
			</div>
			<div class="advantage_left">
				<div class="advantage_left_top">
					<img src="../../../static/icon/dagou.png">
					<span>有音响</span>
				</div>
				<div class="advantage_left_bottom">
					<span>有音响，住宿音乐娱乐两不误</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.recommended {
		width: 339px;
		height: 116px;
		margin: 0 auto;
		margin-top: 5px;
		background-color: #fcfcfc;
		border-radius: 5px;

		.location {
			height: 45px;
			width: 95%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;

			span {
				font-size: 15px;
				letter-spacing: 0px;
				color: #0d0c0c;
				margin-left: 5px;
			}

			img {
				width: 14px;
			}
		}

		.advantage {
			height: 65px;
			width: 95%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.advantage_left {
				flex: 1;
				height: 100%;
				display: flex;
				flex-direction: column;

				.advantage_left_top {
					flex: 1;
					width: 90%;
					display: flex;
					align-items: center;

					img {
						width: 18px;
						height: 18px;
						margin-right: 5px;
					}

					span {
						font-size: 14px;
						color: #0d0c0c;
					}
				}

				.advantage_left_bottom {
					span{
						font-size: 10px;
						text-align: left;
						margin-left: 20px;
					}
				}
			}
		}
	}
</style>
