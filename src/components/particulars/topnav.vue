<template>
	<div class="topnav">
		<div class="nav">
			<div class="nav_left">
				<img src="../../../static/icon/jiantou_l.png">
			</div>
			<div class="nav_right">
				<img src="../../../static/icon/like_p.png">
				<img src="../../../static/icon/fenxiang.png">
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
				img{
					width: 22px;
				}
			}

			.nav_right {
				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-around;
				img{
					width: 22px;
				}
			}
		}
	}
</style>
