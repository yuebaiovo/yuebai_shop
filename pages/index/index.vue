<template>
	<view class="home">

		<swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
			<!-- view v-for="item in shuju" :key="item.id" -->
			<good-list @goodsItemClick="goGoodsDetail" :hotItem="hotItem"></good-list>
		</view>
	</view>
	</view>
</template>

<script>
	import goodList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				//接收数据
				swipers: [],
				//热门商品的本地数据
				hotItem:[
					{id:0,url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
					{id:1,url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
					{id:2,url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
					{id:3,url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
					{id:4,url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
					{id:5,url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
					{id:6,url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
					{id:7,url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
					{id:8,url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
					{id:9,url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
					{id:10,url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
					{id:11,url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
					{id:12,url:"../../static/hot/hot1.jpg",name:"营养牛奶(MIKE) 进口牛奶 每天补充一点 变成更强壮的你",price:20,costPrice:30},
					{id:13,url:"../../static/hot/hot2.jpg",name:"苹果手机(IPHONE) iPhoneXPlus 16G双5G版",price:5499,costPrice:5999},
					{id:14,url:"../../static/hot/hot3.jpg",name:"洁面仪(JIEMIANYI) 月白牌高档洁面仪 一键去除你的黑",price:599,costPrice:699},
					{id:15,url:"../../static/hot/hot4.jpg",name:"橄榄油(GANLANYOU) 做菜放一点 直接好吃到起飞",price:39,costPrice:50},
					
				],
				// nav数据
				navs:[
					{
						icon:'iconfont icon-ziyuan',
						title:'月白超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			// this.getHotGoods()
		},
		// 注册为组件
		components:{"good-list":goodList},
		methods: {
			//获取轮播图的数据
			// async getSwipers(){
			// 	const res = await uni.request({
			// 		url:'http://localhost:8082/api/getlunbo'
			// 	})
			// 	console.log(res.data.message)
			//	this.swipers=res.data.message
			// }
			async getSwipers() {
				// console.log('获取轮播图的数据')
				// uni.request({
				// 	//接口路径
				// 	url:'http://localhost:8082/api/getlunbo',
				// 	// url:'http://'+require("os").hostname()+':8082/api/getlunbo',
				// 	//函数会改变下面的this指向,所以要用箭头函数
				// 	//回调函数
				// 	success:res=>{
				// 		// console.log(res)
				// 		//判断是否请求成功 status0 为请求成功 不等于0请求失败
				// 		if(res.data.status!==0){
				// 			return uni.showToast({
				// 				title:'获取数据失败'
				// 			})
				// 		}
				// 		//保存请求数据
				// 		this.swipers=res.data.message
				// 	}
				// })
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				// console.log(res)
				this.swipers = res.data.message
			},
			// 获取热门商品列表数据
			// api不可用
			//  async getHotGoods(){
			// 	console.log(1)
			// 	const res = await this.$myRequest({
			// 		url:'/api/getgoods?pageindex=1'
			// 	})
			// 	console.log(res)
			// }
			
			
			// 导航点击的处理函数
			navItemClick(url){
				// console.log('跳转')
				// console.log(url)
				//键值一样可以缩写成本身
				uni.navigateTo({
					url
				})
			},
			// 导航跳转到详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id,
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		width: 750rpx;
		//轮播
		swiper {
			width: 100%;
			height: 380rpx;

			image {
				// height: 100%;
				width: 100%;
			}
		}

		//导航
		.nav {
			// 浮动
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					height: 120rpx;
					width: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				//个别大小修改
				.icon-tupian {
					font-size: 45rpx;
				}

				//文字大小
				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			margin-top: 10px;
			background-color: #eee;
			overflow: hidden;

			.tit {
				margin: 7rpx 0;
				height: 50px;
				color: $shop-color;
				line-height: 50px;
				text-align: center;
				letter-spacing: 20px;
				background-color: #fff;
			}

			
		}
	}
</style>
