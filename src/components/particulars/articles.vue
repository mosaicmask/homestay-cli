<template>
	<div class="articles">
		<div class="articles_top">
			<span>卫生情况</span>
			<span>良好 房源已签署《民宿房源卫生标准》</span>
			<div class="more">
				<span>详情</span>
				<img src="../../../static/icon/xiangqing.png">
			</div>
		</div>
		<div class="articles_bottom">
			<span>洗漱用品</span>
			<span>配备齐全 有牙具、毛巾、洗发水等</span>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.articles {
		width: 339px;
		height: 71px;
		background-color: #ffffff;
		box-shadow: 0px 0px 1px 0px rgba(57, 57, 57, 0.59);
		border-radius: 10px;
		margin: 0 auto;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;

		.articles_top {
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;

			span {
				font-size: 10px;
				margin: 5px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}

			.more {
				width: 50px;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;

				span {
					font-size: 9px;
					letter-spacing: 0px;
					color: #454343;
				}

				img {
					width: 12px;
					height: 12px;
				}
			}
		}

		.articles_bottom {
			.articles_top();
		}
	}
</style>
