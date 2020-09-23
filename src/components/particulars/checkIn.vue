<template>
	<div class="checkIn">
		<div class="date_box">
			<div class="date_box_top">
				<span>10月01日</span>
				<div class="checinDate">一晚</div>
				<span>10月02日</span>
				<div class="modification">
					<span>修改</span>
					<img src="../../../static/icon/jiantou_xiugai.png">
				</div>
			</div>
			<div class="date_box_bottom">
				<div class="haveSeen">
					<img src="../../../static/icon/huobao.png">
					<span>83人今天看过该房源</span>
				</div>
			</div>
		</div>
		<div class="discounts_box">
			<div class="discounts_box_top">
				<van-tag round color="#ececec">房东优惠</van-tag>
				<span>学生特价已省￥34.2</span>
				<span>连住等5项优惠<img src="../../../static/icon/xiangqing.png"></span>
			</div>
			<div class="discounts_box_bottom">
				<van-tag round color="#ececec">福利活动</van-tag>
				<span>砍价现返￥50</span>
				<span>其他3项优惠<img src="../../../static/icon/xiangqing.png"></span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.checkIn {
		width: 340px;
		height: 157px;
		margin: 0 auto;
		margin-top: 20px;
		background-color: #ffffff;
		box-shadow: 0px 0px 1px 0px rgba(57, 57, 57, 0.59);
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.date_box {
		flex: 1;
		width: 95%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 0.5px solid #ececec;

		.date_box_top {
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-evenly;

			.checinDate {
				width: 35px;
				height: 11px;
				border-radius: 5px;
				background-color: #FFC4AB;
				font-size: 8px;
				color: #827878;
			}

			span {
				font-size: 18px;
				letter-spacing: 0px;
				color: #0d0c0c;
			}

			img {
				width: 14px;
			}
		}

		.date_box_bottom {
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.haveSeen {
				width: 327px;
				height: 29px;
				background-color: #e6e5e5;
				border-radius: 5px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;

				img {
					width: 20px;
					height: 20px;
					margin: 0px 5px 0px 10px;
				}

				span {
					font-size: 10px;
					color: #0d0c0c;
				}
			}
		}
	}

	.discounts_box {
		flex: 1;
		width: 95%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.discounts_box_top {
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			span {
				font-size: 12px;
				letter-spacing: 0px;
				color: #0d0c0c;
			}
			img{
				width: 12px;
				height: 12px;
				margin-left: 5px;
			}
		}

		.discounts_box_bottom {
			.discounts_box_top();
		}
	}
</style>
