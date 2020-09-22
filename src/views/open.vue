<template>
	<!-- 启动页面 -->
	<div class="open">
		<div class="openBody">
			<van-image width="200" height="225" :src="require('../../static/image/open_logo.png')" />
			<span class="appName">
				一见民宿
			</span>
			<span class="appBelief">
				家一般的感觉
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			this.goGuidance()
		},
		methods: {
			goGuidance() {
				let this_ = this
				// 通过缓存，判读用户是否第一次打开页面
				if (localStorage.getItem('userPhone')) {
					// 如果不是第一次，就直接进入首页
					setTimeout(function() {
						this_.$router.push({
							path: 'index'
						})
					}, 3000)
				} else {
					// 否则进入引导页
					setTimeout(function() {
						this_.$router.push({
							path: 'guide'
						})
					}, 3000)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.open {
		width: 375px;
		height: 667px;
		background-image: url(../../static/image/open_bg.jpg);
		background-size: 150%;
		background-position-x: -50px;
		background-repeat: no-repeat;
	}

	.openBody {
		width: 375px;
		height: 667px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #ffffffba;

		.appName {
			width: 126px;
			height: 28px;
			font-size: 30px;
			font-weight: 600;
			color: #ff6b00;
			text-align: center;
			margin-top: 22px;
		}

		.appBelief {
			width: 106px;
			height: 17px;
			font-size: 16px;
			text-align: center;
			margin-top: 46px;
			color: #ff6b00;
		}
	}
</style>
