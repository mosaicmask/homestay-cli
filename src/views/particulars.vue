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
	</div>
</template>

<script>
	import topnav from '@/components/particulars/topnav.vue'
	import homestayTitle from '@/components/particulars/homestayTitle.vue'
	import articles from '@/components/particulars/articles.vue'
	import score from '@/components/particulars/score.vue'
	import specification from '@/components/particulars/specification.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			topnav,
			homestayTitle,
			articles,
			score,
			specification
		}
	}
</script>

<style lang="less" scoped>
	.particulars {
		width: 100%;
		height: 667px;

		.img_bg {
			width: 375px;
			height: 216px;
			background-image: url(../../static/image/guzhen.jpg);
			background-size: 100%;
			background-repeat: no-repeat;
		}
	}
</style>
