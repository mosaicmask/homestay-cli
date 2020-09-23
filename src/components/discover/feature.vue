<template>
	<div class="feature">
		<slot name="img"></slot>
		<slot name="name">别墅</slot>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.feature {
		width: 110px;
		height: 160px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		img {
			width: 110px;
			height: 117px;
			border-radius: 3px;
		}

		span {
			font-size: 14px;
			letter-spacing: 1.5px;
			font-weight: 500;
			color: #2d2b2b;
		}
	}
</style>
