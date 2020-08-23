<template>
	<view class="goods_list">
		<good-list @goodsItemClick="goGoodsDetail" :hotItem="hotItem"></good-list>
		<view class="isOver" v-if="flag">
			-----我是有底线的-----
		</view>
	</view>
</template>

<script>
	import goodList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				// 控制底线显示隐藏
				flag:false,
				// 页码数
				page:0,
				// 商品列表信息
				hotItem:[],
				// 默认商品信息
				hotItemDefault:[
							{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
							{url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
							{url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
							{url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
							{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
							{url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
							{url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
							{url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
							{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
							{url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
							{url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
							{url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
							{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
							{url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
							{url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
							{url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
							{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30}
				]
			}
		},
		//注册组件
		components:{"good-list":goodList},
		methods: {
			pagesChange(num){
				// console.log(this.page)
				//规定页码值
				if(num==0){
					this.hotItem=[
						{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
						{url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
						{url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
						{url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
						{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
						{url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
						{url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
						{url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
						{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
						{url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
						{url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
						{url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
						{url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
						{url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
						{url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
						{url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50}
					]
				}
				let a=2;
				if(this.page>=a){
					//到底显示
					this.flag=true
				}else{
					this.page++;
					if(num==1){
						//合并信息数组
						this.hotItem=this.hotItem.concat(this.hotItemDefault)
					}
				}
				uni.stopPullDownRefresh()
				// console.log(this.hotItem)
			},
			// 导航跳转到详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id,
				})
			}
			// 获取商品列表的数据
				// 获取热门商品列表数据
				// api不可用
				//  async getHotGoods(){
				// 	console.log(1)
				// 	const res = await this.$myRequest({
				// 		url:'/api/getgoods?pageindex='+this.pageindex
				// 	})
				// 	console.log(res)
				// }
		},
		onLoad(){
			// this.getHotGoods()
			this.pagesChange(0)
		},
		onReachBottom() {
			
			this.pagesChange(1)
		},
		onPullDownRefresh() {
			this.page=0,
			this.hotItem=[],
			this.flag=false,
			setTimeout(()=>{
				this.pagesChange(0)
			},1000)
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background-color: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background-color: #fff;
		font-size: 28rpx;
	}
</style>
