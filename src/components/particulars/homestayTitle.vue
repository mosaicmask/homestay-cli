<template>
	<div class="homestayTitle">
		<div class="title_text">
			春熙路太古里/建设路/熊猫基地半高空景观
		</div>
		<div class="title_label">
			<van-tag type="warning">速订</van-tag>
			<van-tag type="warning">可带宠物</van-tag>
			<van-tag type="warning">有停车位</van-tag>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.homestayTitle {
		width: 94%;
		height: 60px;
		margin: 0 auto;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		// align-items: center;

		.title_text {
			flex: 1;
			width: 284px;
			font-size: 15px;
			line-height: 25px;
			letter-spacing: 0px;
			color: #454343;
		}

		.title_label {
			flex: 1;
			width: 284px;
			display: flex;
			span{
				margin: 0px 10px;
				padding: 0px 10px;
				border-radius: 5px;
				background-color: #FF976A90;
			}
		}
	}
</style>
