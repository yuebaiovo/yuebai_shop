<template>
	<view class="goods_detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image src="../../static/download.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/download.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/download.jpg" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>商品折扣价</text>
				<text>商品原价</text>
			</view>
			<view class="name">
				商品名称
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view class="">
				货号:(商品号码)
			</view>
			<view class="">
				库存:(库存剩余)
			</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">内容</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id: 0,
				// swipers:[]
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 0,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				],
			}
		},
		methods: {
			async getSwipers(id) {
				const res = await this.$myRequest({
					url: '/api/getthumimages/' + this.id
				})
				// this.swipers=res.data.message
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
		},
		components: {
			uniGoodsNav
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.box1 {
			padding: 10rpx;

			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box3 {
			padding-bottom: 50px;
			.tit {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10px;
				font-size: 28rpx;
			}
		}
	}
	.goods_nav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.line {
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}
</style>
