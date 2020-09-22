<template>
	<div class="influencer">
		<div class="influencer_imgbox">
			<div class="influencer_imgbox_left">
				<slot name="max_img"></slot>
			</div>
			<div class="influencer_imgbox_right">
				<slot name="min_img_i"></slot>
				<slot name="min_img_ii"></slot>
			</div>
		</div>
		<slot name="title"></slot>
		<slot name="describe"></slot>
		<div class="likenum_box">
			<div class="likenum_box_left">
				<slot name="user_img_i"></slot>
				<slot name="user_img_ii"></slot>
				<slot name="user_img_iii"></slot>
			</div>
			<div class="likenum_box_right">
				<slot name="like_icon"></slot>
				<slot name="likenum"></slot>
			</div>
		</div>
		<slot name="city"></slot>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.influencer {
		width: 355px;
		height: 255px;
		margin: 0 auto;
		border-bottom: solid 0.5px #e1e1e1;
		margin-top: 10px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		.influencer_imgbox {
			width: 100%;
			height: 140px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;

			.influencer_imgbox_left {
				width: 215px;
				height: 140px;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.influencer_imgbox_right {
				width: 130px;
				height: 140px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;

				img {
					width: 130px;
					height: 65px;
				}
			}
		}

		.title {
			width: 100%;
			font-size: 15px;
			letter-spacing: 0px;
			color: #2d2b2b;
			text-align: left;
			margin-top: 10px;
		}

		.describe {
			.title();
			font-size: 12px;
		}

		.likenum_box {
			width: 100%;
			height: 40px;
			margin-top: 10px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;

			.likenum_box_left {
				flex: 1;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;

				img {
					width: 30px;
					height: 30px;
					border-radius: 50%
				}

				img:nth-child(2) {
					position: relative;
					left: -10px;
				}

				img:nth-child(3) {
					position: relative;
					left: -20px;
				}
			}

			.likenum_box_right {
				flex: 1;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;

				img {
					width: 20px;
					margin-right: 5px;
				}

				span {
					font-size: 12px;
					letter-spacing: 0px;
					color: #2d2b2b;
					margin-right: 15px;
				}
			}
		}

		.city {
			width: 70px;
			height: 30px;
			background-color: #5e5e5e46;
			font-size: 12px;
			border-radius: 20px;
			line-height: 30px;
			color: #fff;
			position: absolute;
			top: 105px;
			left: 5px;
		}
	}
</style>
