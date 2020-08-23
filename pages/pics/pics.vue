<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view
			@click="leftClickHandle(index,item.id)"
			 :class="active===index?'active':''" 
			 v-for="(item,index) in cates" 
			 :key="index">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true" >
			<view class="item" v-for="(item,index) in secondData" :key="index">
				<image @click="previewImg(item.img_url)" :src="item.img_url" mode=""></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="isData">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[
					{title:"家居生活",id:15},
					{title:"摄影设计",id:16},
					{title:"空间设计",id:17},
					{title:"户型设计",id:18},
					{title:"广告摄影",id:19},
					{title:"摄影学习",id:20},
					{title:"摄影器材",id:21},
					{title:"明星写真",id:22},
					{title:"新闻资讯",id:23},
					{title:"新闻时事",id:24},
					{title:"奇闻异事",id:25},
					{title:"趣事八卦",id:26},
				],
				active:0,
				secondData:[],
				isData:true
			}
		},
		onLoad() {
			
		},
		methods: {
			async leftClickHandle(index,id){
				this.active=index
				// 获取右侧数据
				const res = await this.$myRequest({
					url:'/api/getimages/'+id
				})
				// console.log(res)
				if(res.data.message!=0){
					this.secondData = res.data.message
					this.isData=false
				}else{
					this.secondData=[]
					this.isData=true
				}
				
			},
			previewImg(current){
				//获取图片列表链接
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				// 调用uni图片预览方法
				uni.previewImage({
					current,
					urls
				})
			}
			// 接口数据
			// async getPicsCate(){
			// 	const res = await this.$myRequest({
			// 		url:'接口'
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		overflow: hidden;
	}
	.pics{
		display: flex;
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			color: #333333;
			text-align: center;
			font-size: 30rpx;
			border-right: 1px solid #eee;
			view{
				
				border-top: 1px solid #eee;
				height: 60px;
				line-height: 60px;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
