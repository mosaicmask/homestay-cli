<template>
	<div class="meItem">
		<slot name="item_icon"></slot>
		<slot name="item_text"></slot>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.meItem {
		width: 50px;
		height: 70px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		img {
			width: 35px;
			height: 36px;
		}

		span {
			width: 70px;
			font-size: 12px;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 1px;
			color: #000000;
		}
	}
</style>
