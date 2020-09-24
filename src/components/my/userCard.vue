<template>
	<div class="userCard">
		<img src="../../../static/image/userimg (5).jpg" alt="">
		<span class="username">林见深鹿</span>
		<div class="userPanel">
			<ul>
				<li>
					<span>0</span>
					<span>浏览</span>
				</li>
				<li>
					<span>0</span>
					<span>收藏</span>
				</li>
				<li>
					<span>0</span>
					<span>积分</span>
				</li>
				<li>
					<span>0</span>
					<span>代金券</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.userCard {
		width: 237px;
		height: 143px;
		background-color: #ffffff;
		border-radius: 30px;
		position: absolute;
		top: 100px;
		left: 66px;
		display: flex;
		flex-direction: column;

		img {
			width: 69px;
			height: 69px;
			border-radius: 50%;
			position: absolute;
			top: -30px;
			left: 85px;
		}

		.username {
			margin-top: 45px;
			font-size: 18px;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 1px;
			color: #000000;
		}

		.userPanel {
			width: 100%;
			height: 50px;
			margin-top: 20px;

			ul {
				width: 100%;
				height: 50px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;

				li {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					span {
						width: 56px;
						font-size: 15px;
						letter-spacing: 1px;
						color: #000000;
					}
				}
			}
		}
	}
</style>
