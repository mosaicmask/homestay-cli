<template>
	<!-- 消息  -->
	<div class="information">
		<div class="top">
			<span>消息</span>
		</div>
		<!-- 消息框 -->
		<message-box>
			<img slot="userimg" src="../../static/image/open_logo.png"/>
			<span slot="title">系统消息</span>
			<span slot="time" class="time">昨天</span>
			<span slot="preview" class="preview">这是消息</span>
		</message-box>
		<tap-bar></tap-bar>
	</div>
</template>

<script>
	import TapBar from '@/components/tabbar/tabbar.vue'
	import messageBox from '@/components/information/messageBox.vue'
	export default{
		components:{
			TapBar,
			messageBox
		}
	}
</script>

<style lang="less" scoped>
	.information{
		width: 375px;
		height: 667px;
		background-color: #f9f9f9;
	}
	.top{
		width: 375px;
		height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		
		span{
			font-size: 15px;
		}
	}
</style>
