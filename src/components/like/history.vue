<template>
	<div class="history">
		<history-card></history-card>
	</div>
</template>

<script>
	import historyCard from '@/components/like/historyCard.vue'
	export default {
		components: {
			historyCard
		}
	}
</script>

<style lang="less" scoped>
	.history {
		width: 100%;
		height: auto;
		margin-bottom: 70px;
	}
</style>
