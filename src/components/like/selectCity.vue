<template>
	<div class="selectCity_body">
		<div class="selectCity" @click="showSelectCity = true">
			全部城市
		</div>
		<div class="date">
			08.27-08.21
		</div>
		<van-action-sheet v-model="showSelectCity" :actions="actions" cancel-text="取消" close-on-click-action />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showSelectCity: false,
				actions: [{
						name: '北京',
						color: '#ee0a24'
					},
					{
						name: '广西',
						disabled: true
					}
				],
			};
		},
		methods: {
			onSelect(item) {
				// 默认情况下点击选项时不会自动收起
				// 可以通过 close-on-click-action 属性开启自动收起
				this.show = false;
				Toast(item.name);
			},
		},
	};
</script>

<style lang="less" scoped>
	.selectCity_body {
		width: 94%;
		height: 40px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: flex-start;

		.selectCity {
			width: 75px;
			height: 20px;
			font-size: 15px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			background-image: url(../../../static/icon/jiaobiao.png);
			background-repeat: no-repeat;
			background-size: 45%;
			background-position-x: 45px;
			background-position-y: 3px;
		}

		.date {
			.selectCity();
			width: 150px;
			margin-left: 25px;
			background-size: 22%;
			background-position-x: 58px;
			background-position-y: 3px;
		}
	}
</style>
