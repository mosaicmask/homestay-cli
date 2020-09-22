<template>
	<div class="tapbar">
		<div class="tapbarbody">
			<div class="unselected">
				<!-- tab-bar-item 有三个插槽 一个是未选中状态下的图标，一个是选中状态下的，还有一个是文字-->
				<tab-bar-item path="/index" activeColor="#FF7E2E">
					<img slot="item-icon" :src="require('../../../static/icon/index.png')" />
					<img slot="item-icon-active" :src="require('../../../static/icon/index_el.png')" />
					<span slot="item-text">首页</span>
				</tab-bar-item>
			</div>
			<div class="unselected">
				<tab-bar-item path="/discover" activeColor="#FF7E2E">
					<img slot="item-icon" :src="require('../../../static/icon/fx.png')" />
					<img slot="item-icon-active" :src="require('../../../static/icon/fx_el.png')" />
					<span slot="item-text">发现</span>
				</tab-bar-item>
			</div>
			<div class="unselected">
				<tab-bar-item path="/like" activeColor="#FF7E2E">
					<img slot="item-icon" :src="require('../../../static/icon/like.png')" />
					<img slot="item-icon-active" :src="require('../../../static/icon/like_el.png')" />
					<span slot="item-text">收藏</span>
				</tab-bar-item>
			</div>
			<div class="unselected">
				<tab-bar-item path="/information" activeColor="#FF7E2E">
					<img slot="item-icon" :src="require('../../../static/icon/XX.png')" />
					<img slot="item-icon-active" :src="require('../../../static/icon/xx_el.png')" />
					<span slot="item-text">消息</span>
				</tab-bar-item>
			</div>
			<div class="unselected">
				<tab-bar-item path="/my" activeColor="#FF7E2E">
					<img slot="item-icon" :src="require('../../../static/icon/my.png')"/>
					<img slot="item-icon-active" :src="require('../../../static/icon/my_el.png')" />
					<span slot="item-text">我的</span>
				</tab-bar-item>
			</div>
		</div>
	</div>
</template>

<script>
	import tabBarItem from '@/components/tabbar/tabbbar_item.vue'
	export default {
		components: {
			tabBarItem
		}
	}
</script>

<style lang="less" scoped>
	.tapbar {
		width: 375px;
		height: 50px;
		position: fixed;
		bottom: 0;
		box-shadow: 1px 1px 5px #cccccc;
		z-index: 99 !important;
		background-color: #fff;

		.tapbarbody {
			width: 375px;
			height: 50px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;

			a {
				color: #000000;
			}

			.unselected {
				flex: 1;
				height: 50px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				span {
					font-size: 12px;
					margin-top: 5px;
				}
			}
		}
	}
</style>
