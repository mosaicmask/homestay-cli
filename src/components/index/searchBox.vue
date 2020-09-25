<template>
	<!-- 搜索模块 -->
	<div class="search_box">
		<div class="location">
			<div class="location_text">
				<span>广西壮族自治区南宁市西乡塘区丰达路8号</span>
			</div>
			<div class="orientation">
				<span>当前位置</span>
				<van-image width="25" height="25" :src="require('../../../static/icon/location.png')" />
			</div>
		</div>
		<div class="checkindata" @click="showDate = true">
			<div class="checkindata_left">
				<span>入住</span>
				<span>{{start}}</span>
			</div>
			<div class="checkindata_center">
				<span>
					共{{num}}晚
				</span>
			</div>
			<div class="checkindata_right">
				<span>离开</span>
				<span>{{end}}</span>
			</div>
		</div>
		<div class="antistop">
			<div class="antistop_title">
				<span>关键词/位置/民宿名</span>
			</div>
			<div class="antistop_content">
				<div class="antistop_list">国庆大促</div>
				<div class="antistop_list">朝阳广场/中山路</div>
				<div class="antistop_list">青秀区</div>
				<div class="antistop_list">国际会展中心/万象城</div>
				<div class="antistop_list">西乡塘区</div>
				<div class="antistop_list">上林县</div>
			</div>
		</div>
		<div class="button_box">
			<van-button type="warning" color="linear-gradient(to left, #FF7E2E, #FF6B00)" size="large" round class="btn_vant">开始搜索</van-button>
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
				num: 1
			};
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
	.search_box {
		width: 355px;
		height: 250px;
		background-color: #ffffff;
		border-radius: 5px;
		box-shadow: 3px 6px 15px 0px rgba(0, 0, 0, 0.21);
		position: absolute;
		top: 230px;
		display: flex;
		flex-direction: column;
		align-items: center;

		.location {
			width: 94%;
			height: 40px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			border-bottom: 0.5px solid #eeeeee;

			.location_text {
				width: 220px;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				span {
					font-size: 18px;
					font-weight: 600;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
			}

			.orientation {
				width: 100px;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;

				span {
					font-size: 14px;
					margin-right: 5px;
				}
			}
		}

		.checkindata {
			width: 94%;
			height: 40px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			border-bottom: 0.5px solid #eeeeee;
			margin-top: 10px;

			.checkindata_left {
				flex: 1;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				span:nth-child(1) {
					font-size: 10px;
					color: #B9B8B8;
					margin-bottom: 5px;
				}

				span:nth-child(2) {
					font-size: 12px;
				}
			}

			.checkindata_center {
				flex: 1;
				height: 100%;
				text-align: center;
				line-height: 30px;
				font-size: 10px;
			}

			.checkindata_right {
				.checkindata_left()
			}
		}


		.antistop {
			width: 90%;
			height: 100px;
			display: flex;
			flex-direction: column;

			.antistop_title {
				width: 100%;
				height: auto;
				margin-top: 10px;
				display: flex;

				span {
					font-size: 14px;
					color: #B9B8B8;
					letter-spacing: 1px;
				}

			}

			.antistop_content {
				width: 100%;
				height: 70px;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.antistop_list {
					height: 20px !important;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					background-color: #f0f0f0;
					height: auto;
					font-size: 10px;
					line-height: 20px;
					border-radius: 50px;
					padding: 3px 10px;
					margin: 5px;
					letter-spacing: 1px;
				}
			}
		}

		.button_box {
			width: 90%;
			height: auto;
			margin-top: 10px 0px;

			.btn_vant {
				font-weight: bold;
				letter-spacing: 3px;
				height: 40px;
			}
		}
	}
</style>
