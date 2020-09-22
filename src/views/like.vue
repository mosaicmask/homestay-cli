<template>
	<!-- 收藏 -->
	<div class="like">
		<div class="nav">
			<router-link to="/like/myLike"> 我的收藏</router-link>
			<router-link to="/like/history"> 浏览历史</router-link>
		</div>
		<router-view></router-view>
		<tap-bar></tap-bar>
	</div>
</template>

<script>
	import TapBar from '@/components/tabbar/tabbar.vue'
	import likeCard from '@/components/like/likeCard.vue'
	export default {
		components: {
			TapBar,
			likeCard
		}
	}
</script>

<style lang="less" scoped>
	.nav {
		width: 100%;
		height: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 10px;

		a {
			font-weight: bold;
			color: #2c3e50;
			width: 91px;
			height: 27px;
			font-size: 15px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
			box-sizing: 1px 1px 10px #eeeeee;

			&.router-link-exact-active {
				color: #fff;
				background-color: #ff6b00;
				border-radius: 5px;
				box-sizing: 1px 1px 10px #eeeeee;
				font-size: 15px;
			}
		}
	}
</style>
