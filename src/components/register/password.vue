<template>
	<div class="password">
		<div class="pwd_body">
			<van-field :border="false" v-model="pwdOne" type="password" placeholder="8-20位数字/字母/字符组合" />
			<van-divider :style="{margin:'0'}" />
			<van-field :border="false" v-model="pwdTwo" type="password" placeholder="请确认密码" />
			<van-divider :style="{margin:'0'}" />
			<van-button type="warning" size="large" round :disabled="btn_flg" @click="accomplish">完成</van-button>
			<div class="text">
				<span>
					温馨提示：请您避免设置与其他常用软件、网站相同或类似的用户名和密码组合
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phone: null,
				btn_flg: true,
				pwdOne: '',
				pwdTwo: ''
			}
		},
		watch: {
			// 监听输入框1
			pwdTwo() {
				if (this.pwdOne === this.pwdTwo) {
					this.btn_flg = false
				} else {
					this.btn_flg = true
				}
			},
			// 监听输入框2
			pwdOne() {
				if (this.pwdOne === this.pwdTwo) {
					this.btn_flg = false
				} else {
					this.btn_flg = true
				}
			}
		},
		mounted() {
			this.getParams()
		},
		methods: {
			// 获取url传参
			getParams() {
				let getphone = this.$route.params.phone
				this.phone = getphone
			},
			// 设置缓存
			accomplish() {
				let userInfo = {}
				localStorage.setItem("userPhone", this.phone)
				localStorage.setItem("userPwd", this.pwdTwo)
				// 轻提示
				this.$toast({
					message: '注册成功'
				});

				setTimeout(res => {
					this.$router.push({ name: 'login'})
				}, 2000)
			}
		}
	}
</script>

<style lang="less" scoped>
	.password {
		width: 100%;
		height: 667px;

		.pwd_body {
			width: 90%;
			height: 300px;
			margin: 0 auto;
			margin-top: 50px;
		}

		button {
			margin-top: 20px;
		}

		.text {
			margin-top: 20px;

			span {
				font-size: 12px;
				color: #5e5e5e
			}
		}
	}
</style>
