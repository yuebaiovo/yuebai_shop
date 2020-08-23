<template>
	<view class="">
		<!-- 自定义组件news-item 方便重复使用 -->
		<news-item :list='newsList' @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	//导入自定义组件
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList=res.data.message
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getNews()
		},
		//注册组件
		components:{"news-item":newsItem}
	}
</script>

<style lang="scss">
	
</style>
