<template>
	<!-- 分类导航 -->
	<div class="class_nav">
		<div class="nav_box">
			<van-grid :column-num="5" :border="false">
				<van-grid-item v-for="(item,index) in navList" :key="index" :icon="item.icon" :text="item.text" />
			</van-grid>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
						text: '特惠预售',
						icon: 'https://s1.ax1x.com/2020/09/20/wosHB9.png'
					},{
						text: '四见精选',
						icon: 'https://s1.ax1x.com/2020/09/20/woBffO.png'
					},
					{
						text: '做饭方便',
						icon: 'https://s1.ax1x.com/2020/09/20/woBDl4.png'
					},
					{
						text: 'ins风',
						icon: 'https://s1.ax1x.com/2020/09/20/woBWtK.png'
					},
					{
						text: '全家出游',
						icon: 'https://s1.ax1x.com/2020/09/20/woBc01.png'
					},
					{
						text: '品牌民宿',
						icon: 'https://s1.ax1x.com/2020/09/20/woBBpF.png'
					},
					{
						text: '网红推荐',
						icon: 'https://s1.ax1x.com/2020/09/20/woB6mR.png'
					},
					{
						text: '超赞新房',
						icon: 'https://s1.ax1x.com/2020/09/20/woBgTx.png'
					},
					{
						text: '中长租',
						icon: 'https://s1.ax1x.com/2020/09/20/woBr6J.png'
					},
					{
						text: '聚会轰趴',
						icon: 'https://s1.ax1x.com/2020/09/20/woBsX9.png'
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.class_nav {
		width: 100%;
		height: auto;
		z-index: -1 !important;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 200px;

		.nav_box {
			width: 94%;
		}

		span {
			font-size: 13px;
			margin-top: 5px;
			color: #646566;
		}
	}
</style>
