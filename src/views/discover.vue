<template>
	<!-- 发现页面 -->
	<div class="discover">
		<van-tabs v-model="active" color="#FF8D47">
			<van-tab title="旅行推荐">
				<div class="travel_body">
					<div class="travel_body_left">
						<template v-for="item in 5">
							<travel-recommend>
								<!-- 对应插槽 -->
								<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="showimg" class="showimg">
								<span class="title" slot="title">
									273度落地窗俯瞰湘江 无边泳池 长沙民宿
								</span>
								<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="userimg" class="userimg">
								<img :src="require('../../static/icon/likenum_int.png')" slot="likenum_int_img">
								<span slot="likenum">123</span>
								<img :src="require('../../static/icon/comment.png')" slot="comment_img">
								<span slot="comment_num">123</span>
							</travel-recommend>
						</template>
					</div>
					<div class="travel_body_right">
						<template v-for="item in 5">
							<travel-recommend>
								<!-- 对应插槽 -->
								<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="showimg" class="showimg">
								<span class="title" slot="title">
									273度落地窗俯瞰湘江 无边泳池 长沙民宿
								</span>
								<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="userimg" class="userimg">
								<img :src="require('../../static/icon/likenum_int.png')" slot="likenum_int_img">
								<span slot="likenum">123</span>
								<img :src="require('../../static/icon/comment.png')" slot="comment_img">
								<span slot="comment_num">123</span>
							</travel-recommend>
						</template>
					</div>
				</div>
			</van-tab>
			<van-tab title="网红民宿">
				<div class="influencer_body">
					<template v-for="item in 10">
						<influencer>
							<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="max_img">
							<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="min_img_i">
							<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="min_img_ii">
							<span slot="title" class="title">270度落地窗俯俯瞰湘江 无边泳池 长沙民宿</span>
							<span slot="describe" class="describe">云顶|五一广场|无边泳池270度观景|轻奢白金系烟花江景loft</span>
							<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="user_img_i">
							<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="user_img_ii">
							<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="user_img_iii">
							<img slot="like_icon" :src="require('../../static/icon/likenum_int.png')">
							<span slot="likenum">134</span>
							<span slot="city" class="city">北京</span>
						</influencer>
					</template>
				</div>
			</van-tab>
			<van-tab title="体验感受">
				<div class="experience_body">
					<div class="experience_body_left">
						<template v-for="item in 5">
							<travel-recommend>
								<!-- 对应插槽 -->
								<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="showimg" class="showimg">
								<span class="title" slot="title">
									第一次来杭州，住西湖边 清新loft
								</span>
								<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="userimg" class="userimg">
								<img :src="require('../../static/icon/likenum_int.png')" slot="likenum_int_img">
								<span slot="likenum">123</span>
								<img :src="require('../../static/icon/comment.png')" slot="comment_img">
								<span slot="comment_num">123</span>
								<span slot="city" class="city">北京</span>
							</travel-recommend>
						</template>
					</div>
					<div class="experience_body_right">
						<template v-for="item in 5">
							<travel-recommend>
								<!-- 对应插槽 -->
								<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="showimg" class="showimg">
								<span class="title" slot="title">
									第一次来杭州，住西湖边 清新loft
								</span>
								<img src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" slot="userimg" class="userimg">
								<img :src="require('../../static/icon/likenum_int.png')" slot="likenum_int_img">
								<span slot="likenum">123</span>
								<img :src="require('../../static/icon/comment.png')" slot="comment_img">
								<span slot="comment_num">123</span>
								<span slot="city" class="city">北京</span>
							</travel-recommend>
						</template>
					</div>
				</div>
			</van-tab>
			<van-tab title="特色房源">
				<div class="feature_body">
					<template v-for="item in 9">
						<feature>
							<img slot="img" src="https://s1.ax1x.com/2020/08/09/aTqWMn.jpg" />
							<span slot="name">别墅</span>
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
				travelData:[
					{
						image:'',
						title:'',
						userimg:'',
						theNumber:345,
						commentNumber:2
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
