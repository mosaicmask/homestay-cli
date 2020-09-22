<template>
	<!-- 登录页面 -->
	<div class="login">
		登录
	</div>
</template>

<script>
</script>

<style>
</style>
A<template>
	<div class="login">
		<div class="login_body">
			<span class="welcome_text">
				登录一见民宿,
				<br />
				以使用更多服务
			</span>
			<div class="input_body">
				<van-cell-group :border="false">
					<van-field type="tel" label="手机号" v-model="importPhone" placeholder="请输入手机号" />
				</van-cell-group>
				<van-cell-group>
					<van-field type="password" label="密码" v-model="importPwd" placeholder="请输入密码" />
				</van-cell-group>
			</div>
			<div class="btn_body">
				<van-button type="warning" size="large" round @click="login">登录</van-button>
			</div>
			<div class="auxiliary">
				<div class="a_left">
					<span>验证码验证</span>
				</div>
				<div class="a_right">
					<span>忘记密码</span>
					<span class="L">|</span>
					<span @click="register">快速注册</span>
				</div>
			</div>
		</div>
		<div class="footr_body">
			<div class="l_box">
				<van-divider>
					更多登录方式
				</van-divider>
			</div>
			<div class="login_mode">
				<van-grid :border="false">
					<van-grid-item icon="https://s1.ax1x.com/2020/09/07/wKV3ad.png" text="QQ" />
					<van-grid-item icon="https://s1.ax1x.com/2020/09/07/wKVPrF.png" text="微信" />
					<van-grid-item icon="https://s1.ax1x.com/2020/09/07/wKVpvT.png" text="支付宝" />
					<van-grid-item icon="https://s1.ax1x.com/2020/09/07/wKVCKU.png" text="京东" />
				</van-grid>
			</div>
			<div class="remindertext">
				<span>登录即代表你已经同意<span class="reminderName">《一见民宿隐私政策》</span></span>
				<span>登陆之后我们将获取你您的头像昵称等公开信息</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				importPhone: '',
				importPwd: ''
			}
		},
		methods: {
			register() {
				// 命名的路由
				this.$router.push({
					name: 'register'
				})
			},
			// 登录
			login() {
				// 获取缓存
				let phone = localStorage.getItem('userPhone')
				let pwd = localStorage.getItem('userPwd')
				if (this.importPhone == phone) {
					if (this.importPwd == pwd) {
						// 轻提示
						this.$toast({
							message: '登陆成功,即将自动跳转'
						})
						// 定时跳转
						setTimeout(res => {
							this.$router.push({
								name: 'index'
							})
						},3000)
					} else {
						// 轻提示
						this.$toast({
							message: '密码错误'
						})
					}
				} else {
					// 轻提示
					this.$toast({
						message: '用户名不存在，亲请先前往注册'
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.login {
		width: 100%;
		height: auto;

		.login_body {
			width: 90%;
			height: auto;
			margin: 0 auto;
			margin-top: 30px;

			.welcome_text {
				font-size: 30px;
				font-weight: bold;
				display: block;
				line-height: 50px;
				color: #ff6b00;
			}

			.input_body {
				margin-top: 50px;
			}
		}

		.btn_body {
			button {
				margin-top: 30px;
			}
		}

		.auxiliary {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			height: 50px;

			span {
				font-size: 10px;
			}

			.L {
				margin: 5px;
				font-size: 15px;
				color: #d9d9d9;
			}
		}
	}

	.footr_body {
		width: 100%;
		height: 200px;
		margin: 0 auto;
		position: fixed;
		bottom: 0;

		.l_box {
			width: 80%;
			height: auto;
			margin: 0 auto;
		}

		.remindertext {
			width: 90%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 20px;

			span {
				font-size: 10px;
				color: #a5a5a5;
				line-height: 16px;
			}

			.reminderName {
				color: #ff6b00;
			}
		}
	}
</style>
