<template>
	<div class="myLike">
		<select-city></select-city>
		<like-card></like-card>
	</div>
</template>

<script>
	import likeCard from '@/components/like/likeCard.vue'
	import selectCity from '@/components/like/selectCity.vue'
	export default {
		components: {
			likeCard,
			selectCity
		}
	}
</script>

<style lang="less" scoped>
	.myLike {
		width: 100%;
		height: auto;
		margin-bottom: 70px;
	}
</style>
