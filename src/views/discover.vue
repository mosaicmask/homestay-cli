<template>
	<!-- 发现页面 -->
	<div class="discover">
		<van-tabs v-model="active" color="#FF8D47">
			<van-tab title="旅行推荐">
				<div class="travel_body">
					<div class="travel_body_left">
						<template v-for="(item,index) in travelData">
							<template v-if="index%2!=0">
								<travel-recommend>
									<!-- 对应插槽 -->
									<img :src="item.image" slot="showimg" class="showimg">
									<span class="title" slot="title">
										{{item.title}}
									</span>
									<img :src="item.userimg" slot="userimg" class="userimg">
									<img :src="require('../../static/icon/likenum_int.png')" slot="likenum_int_img">
									<span slot="likenum">{{item.theNumber}}</span>
									<img :src="require('../../static/icon/comment.png')" slot="comment_img">
									<span slot="comment_num">{{item.commentNumber}}</span>
								</travel-recommend>
							</template>
						</template>
					</div>
					<div class="travel_body_right">
						<template v-for="(item,index) in travelData">
							<template v-if="index%2==0">
								<travel-recommend>
									<!-- 对应插槽 -->
									<img :src="item.image" slot="showimg" class="showimg">
									<span class="title" slot="title">
										{{item.title}}
									</span>
									<img :src="item.userimg" slot="userimg" class="userimg">
									<img :src="require('../../static/icon/likenum_int.png')" slot="likenum_int_img">
									<span slot="likenum">{{item.theNumber}}</span>
									<img :src="require('../../static/icon/comment.png')" slot="comment_img">
									<span slot="comment_num">{{item.commentNumber}}</span>
								</travel-recommend>
							</template>
						</template>
					</div>
				</div>
			</van-tab>
			<van-tab title="民宿推荐">
				<div class="influencer_body">
					<template v-for="item in influencer">
						<influencer>
							<img :src="item.img_i" slot="max_img">
							<img :src="item.img_ii" slot="min_img_i">
							<img :src="item.img_iii" slot="min_img_ii">
							<span slot="title" class="title">{{item.title}}</span>
							<span slot="describe" class="describe">{{item.describe}}</span>
							<img :src="item.userimg_i" slot="user_img_i">
							<img :src="item.userimg_ii" slot="user_img_ii">
							<img :src="item.userimg_iii" slot="user_img_iii">
							<img slot="like_icon" :src="require('../../static/icon/likenum_int.png')">
							<span slot="likenum">{{item.likenum}}</span>
							<span slot="city" class="city">{{item.city}}</span>
						</influencer>
					</template>
				</div>
			</van-tab>
			<van-tab title="体验感受">
				<div class="experience_body">
					<div class="experience_body_left">
						<template v-for="(item,index) in experience">
							<template v-if="index%2!=0">
								<travel-recommend>
									<!-- 对应插槽 -->
									<img :src="item.image" slot="showimg" class="showimg">
									<span class="title" slot="title">
										{{item.title}}
									</span>
									<img :src="item.userimg" slot="userimg" class="userimg">
									<img :src="require('../../static/icon/likenum_int.png')" slot="likenum_int_img">
									<span slot="likenum">{{item.theNumber}}</span>
									<img :src="require('../../static/icon/comment.png')" slot="comment_img">
									<span slot="comment_num">{{item.commentNumber}}</span>
									<span slot="city" class="city">{{item.city}}</span>
								</travel-recommend>
							</template>
						</template>
					</div>
					<div class="experience_body_right">
						<template v-for="(item,index) in experience">
							<template v-if="index%2==0">
								<travel-recommend>
									<!-- 对应插槽 -->
									<img :src="item.image" slot="showimg" class="showimg">
									<span class="title" slot="title">
										{{item.title}}
									</span>
									<img :src="item.userimg" slot="userimg" class="userimg">
									<img :src="require('../../static/icon/likenum_int.png')" slot="likenum_int_img">
									<span slot="likenum">{{item.theNumber}}</span>
									<img :src="require('../../static/icon/comment.png')" slot="comment_img">
									<span slot="comment_num">{{item.commentNumber}}</span>
									<span slot="city" class="city">{{item.city}}</span>
								</travel-recommend>
							</template>
						</template>
					</div>
				</div>
			</van-tab>
			<van-tab title="特色房源">
				<div class="feature_body">
					<template v-for="item in feature">
						<feature>
							<img slot="img" :src="item.image" />
							<span slot="name">{{item.text}}</span>
						</feature>
					</template>
				</div>
			</van-tab>
		</van-tabs>
		<tap-bar></tap-bar>
	</div>
</template>

<script>
	import TapBar from '@/components/tabbar/tabbar.vue'
	import TravelRecommend from '@/components/discover/TravelRecommend.vue'
	import influencer from '@/components/discover/influencer.vue'
	import feature from '@/components/discover/feature.vue'
	export default {
		data() {
			return {
				active: '',
				travelData: [{
						image: require('../../static/image/discover (1).png'),
						title: '273度落地窗俯瞰湘江 无边泳池 长沙民宿',
						userimg: require('../../static/image/userimg (1).jpg'),
						theNumber: 345,
						commentNumber: 11
					},
					{
						image: require('../../static/image/discover (2).png'),
						title: '少女心满满粉色小屋！超甜der！成都民宿',
						userimg: require('../../static/image/userimg (2).jpg'),
						theNumber: 235,
						commentNumber: 21
					},
					{
						image: require('../../static/image/discover (3).png'),
						title: '这家民宿有滑梯！住进仙女游乐园 宜昌民宿 ',
						userimg: require('../../static/image/userimg (3).jpg'),
						theNumber: 445,
						commentNumber: 54
					},
					{
						image: require('../../static/image/discover (4).png'),
						title: '少女专属游乐场！海洋球池大滑梯 超可！无锡民宿',
						userimg: require('../../static/image/userimg (4).jpg'),
						theNumber: 345,
						commentNumber: 23
					},
					{
						image: require('../../static/image/discover (5).png'),
						title: '成都ins风民宿  设计感超强 近太古里…',
						userimg: require('../../static/image/userimg (5).jpg'),
						theNumber: 125,
						commentNumber: 28
					},
					{
						image: require('../../static/image/discover (6).png'),
						title: '成都超强设计感民宿摩洛哥风格 仙气爆棚…',
						userimg: require('../../static/image/userimg (6).jpg'),
						theNumber: 165,
						commentNumber: 28
					},
					{
						image: require('../../static/image/discover (7).png'),
						title: '成都/住哪里/成都万达广场和老…',
						userimg: require('../../static/image/userimg (7).jpg'),
						theNumber: 135,
						commentNumber: 67
					},
					{
						image: require('../../static/image/discover (8).png'),
						title: '重庆无敌江景民宿！180度大滑梯 超可！无锡民宿',
						userimg: require('../../static/image/userimg (8).jpg'),
						theNumber: 135,
						commentNumber: 67
					}
				],
				influencer: [{
					img_i: require('../../static/image/1-1.png'),
					img_ii: require('../../static/image/1-2.png'),
					img_iii: require('../../static/image/1-3.png'),
					title: '270度落地窗俯俯瞰湘江 无边泳池 长沙民宿',
					describe: '云顶|五一广场|无边泳池270度观景|轻奢白金系烟花江景loft',
					userimg_i: require('../../static/image/influencer (1).jpg'),
					userimg_ii: require('../../static/image/influencer (2).jpg'),
					userimg_iii: require('../../static/image/influencer (3).jpg'),
					likenum: 54,
					city: '长沙'
				},
				{
					img_i: require('../../static/image/2-1.png'),
					img_ii: require('../../static/image/2-2.png'),
					img_iii: require('../../static/image/2-3.png'),
					title: '法式轻奢少女心 住在西湖边的杭州民宿',
					describe: '湖宿[生如夏花]西湖湖滨一居室/楼下武林夜市/步行断桥、北山街/近地铁/嘉里中心',
					userimg_i: require('../../static/image/influencer (4).jpg'),
					userimg_ii: require('../../static/image/influencer (5).jpg'),
					userimg_iii: require('../../static/image/influencer (6).jpg'),
					likenum: 354,
					city: '杭州'
				},
				{
					img_i: require('../../static/image/3-1.png'),
					img_ii: require('../../static/image/3-2.png'),
					img_iii: require('../../static/image/3-3.png'),
					title: '日式浮世绘汤池 这家南京民宿美到哭泣！',
					describe: '【归宿】浮世绘汤池 百寸家庭影院 紧邻玄武湖/新街口总统府/颐和路/夫子庙',
					userimg_i: require('../../static/image/influencer (7).jpg'),
					userimg_ii: require('../../static/image/influencer (8).jpg'),
					userimg_iii: require('../../static/image/influencer (9).jpg'),
					likenum: 254,
					city: '南京'
				},
				{
					img_i: require('../../static/image/4-1.png'),
					img_ii: require('../../static/image/4-2.png'),
					img_iii: require('../../static/image/4-3.png'),
					title: '洛丽塔小姑娘的童话世界！武汉民宿',
					describe: '【汉堡包】江汉路/复古婚纱/洛丽塔',
					userimg_i: require('../../static/image/influencer (10).jpg'),
					userimg_ii: require('../../static/image/influencer (11).jpg'),
					userimg_iii: require('../../static/image/influencer (12).jpg'),
					likenum: 454,
					city: '武汉'
				}],
				experience: [{
						image: require('../../static/image/tiyan (1).png'),
						title: '第一次来杭州，住西湖边 清新loft',
						userimg: require('../../static/image/userimg (1).jpg'),
						theNumber: 345,
						commentNumber: 11,
						city: '杭州'
					},
					{
						image: require('../../static/image/tiyan (2).png'),
						title: '杭州瑶仙境民宿 住进仙境里！',
						userimg: require('../../static/image/userimg (2).jpg'),
						theNumber: 235,
						commentNumber: 21,
						city: '杭州'
					},
					{
						image: require('../../static/image/tiyan (3).png'),
						title: '不到200元，住进重庆北欧风江景民宿！',
						userimg: require('../../static/image/userimg (3).jpg'),
						theNumber: 445,
						commentNumber: 54,
						city: '重庆'
					},
					{
						image: require('../../static/image/tiyan (4).png'),
						title: '西安地铁口附近ins投影电竞双床房',
						userimg: require('../../static/image/userimg (4).jpg'),
						theNumber: 345,
						commentNumber: 23,
						city: '西安'
					},
					{
						image: require('../../static/image/tiyan (5).png'),
						title: '平价！高端！西安北欧简约风民宿',
						userimg: require('../../static/image/userimg (5).jpg'),
						theNumber: 125,
						commentNumber: 28,
						city: '西安'
					},
					{
						image: require('../../static/image/tiyan (6).png'),
						title: '大连高性价比海景民宿，阳光沙滩海浪 住进世外…',
						userimg: require('../../static/image/userimg (6).jpg'),
						theNumber: 165,
						commentNumber: 28,
						city: '大连'
					},
					{
						image: require('../../static/image/tiyan (7).png'),
						title: '芳心纵火犯！人均80！西安最美loft民宿',
						userimg: require('../../static/image/userimg (7).jpg'),
						theNumber: 135,
						commentNumber: 67,
						city: '西安'
					},
					{
						image: require('../../static/image/tiyan (8).png'),
						title: '重庆南滨路民宿，超大落地窗看一线江景',
						userimg: require('../../static/image/userimg (8).jpg'),
						theNumber: 135,
						commentNumber: 67,
						city: '重庆'
					}
				],
				feature:[
					{
						image:require('../../static/image/bieshu.jpg'),
						text:'别墅'
					},
					{
						image:require('../../static/image/haijin.jpg'),
						text:'海景房'
					},
					{
						image:require('../../static/image/zhuti.jpg'),
						text:'主题特色'
					},
					{
						image:require('../../static/image/qinglv.jpg'),
						text:'情侣房'
					},
					{
						image:require('../../static/image/fushi.jpg'),
						text:'复式'
					},
					{
						image:require('../../static/image/siheyuan.jpg'),
						text:'四合院'
					},
					{
						image:require('../../static/image/mufang.jpg'),
						text:'木房'
					},
					{
						image:require('../../static/image/guzhen.jpg'),
						text:'古镇客栈'
					},
					{
						image:require('../../static/image/nongjia.jpg'),
						text:'农家院'
					}
				]
			}
		},
		components: {
			TapBar,
			TravelRecommend,
			influencer,
			feature
		}
	}
</script>

<style lang="less" scoped>
	.travel_body {
		width: 94%;
		height: auto;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		margin-bottom: 60px;
		margin-top: 20px;

		.travel_body_left {
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.travel_body_right {
			.travel_body_left();
			margin-top: 50px;
		}
	}

	.experience_body {
		width: 94%;
		height: auto;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		margin-bottom: 60px;
		margin-top: 20px;

		.experience_body_left {
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.experience_body_right {
			.experience_body_left();
		}
	}

	.influencer_body {
		width: 100%;
		height: auto;
		margin-bottom: 50px;
	}

	.feature_body {
		width: 100%;
		height: 667px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 60px;
	}
</style>
