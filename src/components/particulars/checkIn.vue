<template>
	<div class="checkIn">
		<div class="date_box">
			<div class="date_box_top" @click="showDate = true">
				<span>{{start}}</span>
				<div class="checinDate">{{num}}晚</div>
				<span>{{end}}</span>
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
		<van-calendar v-model="showDate" position="right" type="range" @confirm="onConfirm" confirm-text="完成"
		 confirm-disabled-text="请选择结束时间" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				date: '',
				showDate: false,
				start: '',
				end: '',
				num: 1,
			};
		},
		watch:{
			num:function(){
				console.log(1);
			}
		},
		created() {
			this.newDate()
		},
		methods: {
			// 初始
			newDate() {
				// 获取当前时间
				let date = new Date()
				// 获得默认入住时间
				let start = date.getMonth() + 1 + '月' + date.getDate() + '日'
				// 获得默认入住时间
				let end = date.getMonth() + 1 + '月' + (date.getDate() + 1) + '日'
				this.start = start
				this.end = end
			},
			// 处理时间戳
			formatDate(date) {
				// 获得入住时间
				let start = date[0].getMonth() + 1 + '月' + date[0].getDate() + '日'
				// 获得离开时间
				let end = date[1].getMonth() + 1 + '月' + date[1].getDate() + '日'
				// 计算入住天数
				let startDate = Date.parse(date[0]);
				let endDate = Date.parse(date[1]);
				let days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
				// 改变值
				this.start = start
				this.end = end
				this.num = days
			},
			// 按钮事件
			onConfirm(date) {
				this.showDate = false;
				this.date = this.formatDate(date);
			},
		},
	}
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

			img {
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
