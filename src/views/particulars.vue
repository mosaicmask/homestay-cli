<template>
	<div class="particulars">
		<!-- 顶部导航 -->
		<topnav></topnav>
		<div class="img_bg"></div>
		<!-- 房间信息标题 -->
		<homestay-title></homestay-title>
		<!-- 生活用品 -->
		<articles></articles>
		<!-- 评分 -->
		<score></score>
		<!-- 房间规格 -->
		<specification></specification>
		<!-- 入住日期 -->
		<check-in></check-in>
		<!-- 推荐理由-->
		<div class="title">
			<span>
				推荐理由
			</span>
		</div>
		<recommended></recommended>

		<!-- 周边位置 -->
		<div class="title">
			<span>
				周边位置
			</span>
		</div>
		<van-image width="339px" height="199px" fit="fill" :src="require('../../static/image/map.jpg')" />
		
		<!-- 结算栏 -->
		
		<pay-money></pay-money>
	</div>
</template>

<script>
	import topnav from '@/components/particulars/topnav.vue'
	import homestayTitle from '@/components/particulars/homestayTitle.vue'
	import articles from '@/components/particulars/articles.vue'
	import score from '@/components/particulars/score.vue'
	import specification from '@/components/particulars/specification.vue'
	import checkIn from '@/components/particulars/checkIn.vue'
	import recommended from '@/components/particulars/recommended.vue'
	import payMoney from '@/components/particulars/payMoney.vue'
	export default {
		data() {
			return {

			}
		},
		methods:{
			onSubmit(){
				
			}
		},
		components: {
			topnav,
			homestayTitle,
			articles,
			score,
			specification,
			checkIn,
			recommended,
			payMoney
		}
	}
</script>

<style lang="less" scoped>
	.particulars {
		width: 100%;
		height: auto;
		margin-bottom: 80px;

		.img_bg {
			width: 375px;
			height: 216px;
			background-image: url(../../static/image/guzhen.jpg);
			background-size: 100%;
			background-repeat: no-repeat;
		}

		.title {
			width: 90%;
			height: 30px;
			display: flex;
			align-items: center;
			margin: 0 auto;
			margin-top: 20px;

			span {
				font-size: 18px;
				letter-spacing: 0px;
				color: #0d0c0c;
			}
		}

		.mapimg {
			width: 339px;
			height: 199px;
			background-color: #d0cece;
			border-radius: 5px;
		}
	}
</style>
