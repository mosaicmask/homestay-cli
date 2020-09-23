<template>
	<div class="score">
		<span class="grade">4.9分</span>
		<span>超赞</span>
		<div class="preview">
			<img src="../../../static/image/kaixin.png" alt="">
			<span>吃玩，都挺方便的</span>
		</div>
		<span>87条真实评价<img src="../../../static/icon/xiangqing.png"></span>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.score {
		width: 342px;
		height: 50px;
		margin: 0 auto;
		margin-top: 10px;
		background-color: #ffffff;
		box-shadow: 0px 0px 1px 0px rgba(57, 57, 57, 0.59);
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;

		span {
			font-size: 10px;
			letter-spacing: 0px;
			color: #0d0c0c;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}

		.grade {
			font-size: 18px;
			letter-spacing: 0px;
			color: #0d0c0c;
		}

		.preview {
			width: 106px;
			height: 16px;
			background-color: #f2f2f2;
			border-radius: 5px;
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		img {
			width: 12px;
			height: 12px;
			margin: 0px 3px;
		}
	}
</style>
