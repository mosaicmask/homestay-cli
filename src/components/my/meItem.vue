<template>
	<div class="meItem">
		<slot name="item_icon"></slot>
		<span name="item_text">待支付</span>
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
			font-size: 12px;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 1px;
			color: #000000;
		}
	}
</style>
