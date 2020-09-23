<template>
	<div class="specification">
		<div class="specification_top">
			<template v-for="item in specificationList">
				<div class="top_box">
					<div class="top_box_left">
						<img :src="item.icon">
					</div>
					<div class="top_box_right">
						<div class="top_box_right_top">
							{{item.text_i}}
						</div>
						<div class="top_box_right_bottom">
							{{item.text_ii}}
						</div>
					</div>
				</div>
			</template>
		</div>
		<div class="specification_bottom">
			<div class="specification_bottom_box">
				<div class="left_box">
					<span>整套</span>
					<span>独享整套房源</span>
				</div>
				<div class="right_box">
					<span>床型信息</span>
					<span>1张双人床</span>
				</div>
			</div>
		</div>
		<div class="hr"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				specificationList: [{
						icon: require('../../../static/icon/zhengtao.png'),
						text_i: '整套',
						text_ii: '36㎡'
					},
					{
						icon: require('../../../static/icon/guizi.png'),
						text_i: '一间卧室',
						text_ii: '0厅0厨1卫'
					},
					{
						icon: require('../../../static/icon/chuang.png'),
						text_i: '一床二人',
						text_ii: '不可加客'
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.specification {
		width: 340px;
		height: 105px;
		margin: 0 auto;
		margin-top: 10px;
		position: relative;
		background-color: #ffffff;
		box-shadow: 0px 0px 1px 0px rgba(57, 57, 57, 0.59);
		border-radius: 5px;
		display: flex;
		flex-direction: column;

		.specification_top {
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;

			.top_box {
				flex: 1;
				height: 100%;
				display: flex;
				flex-direction: row;

				.top_box_left {
					flex: 1;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;

					img {
						height: 28px;
						width: 28px;
					}
				}

				.top_box_right {
					flex: 1;
					height: 100%;
					display: flex;
					flex-direction: column;

					.top_box_right_top {
						flex: 1;
						width: 100%;
						display: flex;
						align-items: flex-end;
						font-size: 10px;
						margin: 2px;
						letter-spacing: 0px;
						color: #0d0c0c;
					}

					.top_box_right_bottom {
						.top_box_right_top();
						align-items: flex-start;
					}
				}
			}
		}

		.specification_bottom {
			flex: 1;
			width: 100%;
			display: flex;
			align-items: center;

			.specification_bottom_box {
				width: 323px;
				height: 42px;
				background-color: #f6f6f6;
				margin: 0 auto;
				border-radius: 5px;
				opacity: 0.35;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				.left_box {
					flex: 1;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-evenly;

					span {
						font-size: 10px;
						color: #0d0c0c;
					}
				}

				.right_box {
					.left_box();
					flex: 2;
				}
			}
		}

		.hr {
			width: 1px;
			height: 25px;
			background-color: #d0cece;
			position: absolute;
			bottom: 12px;
			left: 98px;
		}
	}
</style>
