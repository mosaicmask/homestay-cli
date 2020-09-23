<template>
	<!-- 旅游推荐版块组件 -->
	<div class="TravelRecommend">
		<slot class="showimg" name="showimg"></slot>
		<slot class="title" name="title"></slot>
		<div class="userbox">
			<slot name="userimg"></slot>
			<div class="interaction_box">
				<div class="likenum_int">
					<slot name="likenum_int_img"></slot>
					<slot name="likenum"></slot>
				</div>
				<div class="comment">
					<slot name="comment_img"></slot>
					<slot name="comment_num"></slot>
				</div>
			</div>
		</div>
		<slot name="city"></slot>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.TravelRecommend {
		width: 165px;
		height: 220px;
		box-shadow: 1px 1px 10px #e7e7e7;
		border-radius: 5px;
		margin-top: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		position: relative;

		.showimg {
			width: 165px;
			height: 130px;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
		}

		.title {
			width: 148px;
			font-size: 13px;
			letter-spacing: 1px;
			color: #2d2b2b;
			margin-top: 8px;
			// padding: 10px;
			line-height: 20px;
			text-align: left;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.userbox {
			width: 97%;
			height: 50px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.userimg {
				width: 24px;
				height: 24px;
				border-radius: 50%;
				margin-left: 10px;
			}

			.interaction_box {
				width: 90px;
				height: 20px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;

				.likenum_int {
					display: flex;
					flex-direction: row;
					align-items: center;

					img {
						width: 15px;
					}

					span {
						font-size: 13px;
					}
				}

				.comment {
					.likenum_int()
				}
			}
		}

		.city {
			width: 40px;
			height: 20px;
			background-color: #5e5e5e60;
			font-size: 12px;
			border-radius: 10px;
			color: #fff;
			padding: 1px;
			line-height: 20px;
			text-align: center;
			position: absolute;
			top: 100px;
			left: 5px;
		}
	}
</style>
