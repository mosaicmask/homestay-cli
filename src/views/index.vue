<template>
	<!-- 首页 -->
	<div class="index">
		<div class="top_img_bg"></div>
		<!-- 搜索模块 -->
		<search-box></search-box>
		<!-- 分类导航 -->
		<class-nav></class-nav>
		<!-- 特惠好房 -->
		<div class="preference">
			<div class="preference_title">
				<div class="title_text">
					<span>特惠好房</span>
				</div>
			</div>
			<div class="tagcard_box">
				<template v-for="(item,index) in tagcardList">
					<div class="tagcard">
						<span>{{item.text_i}}</span>
						<span>{{item.text_ii}}</span>
					</div>
				</template>
			</div>
			<div class="homestay_box">
				<template v-for="(item,index) in homestayList">
					<homestay-card>
						<img :src="item.image" alt="" slot="item-img">
						<span class="habitable_number" slot="item-habitable_number">{{item.habitableNumber}}</span>
						<span class="title" slot="item-title">{{item.title}}</span>
						<span class="price" slot="item-price">￥{{item.price}}</span>
					</homestay-card>
				</template>
			</div>
			<!-- see more -->
			<van-button class="seemore " type="info" color="#FC9865">查看更多</van-button>
		</div>
		<!-- 底部tapbar -->
		<tap-bar></tap-bar>
	</div>
</template>

<script>
	import TapBar from '@/components/tabbar/tabbar.vue'
	import searchBox from '@/components/index/searchBox.vue'
	import classNav from '@/components/index/classNav.vue'
	import homestayCard from '@/components/index/homestayCard.vue'
	export default {
		data() {
			return {
				tagcardList: [{
						text_i: '今夜特价',
						text_ii: '今夜预定，立享优惠'
					},
					{
						text_i: '新房特惠',
						text_ii: '特价新房，先到先得'
					},
					{
						text_i: '连住优惠',
						text_ii: '连住多天，专享折扣'
					}
				],
				homestayList: [{
						habitableNumber: '整租-1居室-宜住3人',
						title: '【依然】LOFT复式 近...',
						price: 323,
						image:require('../../static/image/tehui (1).jpg')
					},
					{
						habitableNumber: '整租-1居室-宜住2人',
						title: '宁蘭-LITE2 海洋球空…',
						price: 208,
						image:require('../../static/image/tehui (2).jpg')
					},
					{
						habitableNumber: '整租-1居室-宜住4人',
						title: '市中心法式Loft落地窗…',
						price: 320,
						image:require('../../static/image/tehui (3).jpg')
					},
					{
						habitableNumber: '整租-1居室-宜住3人',
						title: '摩洛哥风格、巨屏投…',
						price: 448,
						image:require('../../static/image/tehui (4).jpg')
					}
				]
			}
		},
		components: {
			TapBar,
			searchBox,
			classNav,
			homestayCard
		}
	}
</script>

<style lang="less" scoped>
	.index {
		width: 375px;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 50px;

		.top_img_bg {
			width: 375px;
			height: 287px;
			background-image: linear-gradient(#ffffff, #757575);
			background-image: url(../../static/image/1096072529.jpg);
			background-repeat: no-repeat;
			background-image: 100%;
		}

		.preference {
			width: 100%;
			height: 600px;
			margin-top: 30px;
			display: flex;
			flex-direction: column;
			align-items: center;

			.preference_title {
				width: 94%;
				height: auto;
				display: flex;
				justify-content: flex-start;

				span {
					width: 116px;
					height: 29px;
					font-size: 30px;
					font-weight: normal;
					color: #4f4f4f;
				}
			}

			.tagcard_box {
				width: 94%;
				height: auto;
				margin-top: 15px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.tagcard {
					width: 99px;
					height: 40px;
					background-color: #F79646;
					box-shadow: 1px 1px 10px #dfdfdf;
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					padding: 5px;

					span:nth-child(1) {
						font-size: 15px;
						font-weight: normal;
						letter-spacing: 0px;
						color: #ffffff;
					}

					span:nth-child(2) {
						font-size: 10px;
						font-weight: normal;
						letter-spacing: 0px;
						margin-top: 5px;
						color: #efefef;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					}
				}
			}

			.homestay_box {
				width: 100%;
				height: auto;
				margin-top: 20px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				flex-wrap: wrap;
			}

			.seemore {
				width: 188px;
				height: 26px;
			}
		}
	}
</style>
