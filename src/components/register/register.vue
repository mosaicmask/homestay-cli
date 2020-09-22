<template>
	<div class="register">
		<div class="register_box">
			<van-field :border="false" type="tel" v-model="value" placeholder="请输入手机号" />
			<van-divider :style="{margin:'0'}" />
			<div class="redio_text">
<!-- 				<van-radio-group v-model="radio">
					<van-radio name="true">
						已阅读并同意
						<span>《熊熊金融用户注册协议》</span>
						<span>《熊熊金融隐私政策》</span>
						<span>《熊熊用户协议》</span>
					</van-radio>
				</van-radio-group> -->
				<van-checkbox v-model="checked" checked-color="#66ccd4">
					已阅读并同意
					<span>《一见民宿用户注册协议》</span>
					<span>《一见民宿隐私政策》</span>
					<span>《一见民宿用户协议》</span>
				</van-checkbox>
			</div>
			<van-button type="warning" size="large" round @click="nextStep" :disabled="btn_flg">下一步</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: null,
				value:'',
				btn_flg:true
			}
		},
		watch:{
			// 监听属性
			value(){
				if(this.value != ''){
					this.btn_flg = false
				}else{
					this.btn_flg = true
				}
			}
		},
		methods: {
			// 点击下一步的事件
			nextStep() {
				// console.log(this.radio);
				if (this.checked) {
					this.$router.push({
						name: 'password',
						params: { phone: this.value }
					})
				} else {
					// 轻提示
					this.$toast({
						message: '请阅读并同意协议'
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.register {
		width: 100%;
		height: 667px;

		.register_box {
			width: 90%;
			height: auto;
			margin: 0 auto;
			margin-top: 50px;
		}

		.redio_text {
			margin-top: 20px;
			font-size: 10px;

			span {
				font-size: 10px;
				color: #3ba0d6
			}
		}

		button {
			margin-top: 20px;
		}
	}
</style>
