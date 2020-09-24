<template>
	<div class="topnav">
		<div class="nav">
			<div class="nav_left">
				<span>我的</span>
			</div>
			<div class="nav_right">
				<img src="../../../static/icon/qiandao.png">
				<img src="../../../static/icon/shezhi.png">
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.topnav {
		width: 100%;
		height: 40px;
		position: fixed;
		top: 0px;
		z-index:99;
		margin-top: 20px;

		.nav {
			width: 90%;
			height: 40px;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.nav_left {
				flex: 3;
				height: 100%;
				display: flex;
				align-items: center;

				span {
					font-size: 18px;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 1px;
					color: #000000;
				}
			}

			.nav_right {
				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-around;

				img {
					width: 22px;
				}
			}
		}
	}
</style>
