<template>
	<view class="contact">
		<image class="img" src="../../static/contact-img/20200809-10359677.jpg" mode=""></image>
		<view class="info">
			<view class="" @click="phone">
				联系电话:17638344413 ( 点击拨打 ) 
			</view>
			<view class="">
				联系地址:河南省洛阳市洛龙区龙门大道*号大街***太康新苑
			</view>
			<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:112.47967,
				latitude:34.632396,
				scale:14,
				markers:[
					{
						longitude:112.47967,
						latitude:34.632396,
						iconPath:'../../static/icon/home-active.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'17638344413',
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
		
	}
</style>
