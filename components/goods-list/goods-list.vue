<template>
	<view class="goods_list">
		<view class="goods_item" @click="navigator(index)" v-for="(item,index) in hotItem" :key="index">
			<!-- image :src="item.url" -->
			<image :src="item.url" mode=""></image>
			<view class="price">
				<!-- text item.price -->
				<text>${{item.price}}</text>
				<text>${{item.costPrice}}</text>
			</view>
			<view class="name">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['hotItem'],
		methods:{
			navigator(id){
				this.$emit('goodsItemClick',id)
			}
		}
		
	}
</script>

<style lang="scss">
	.goods_list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 15rpx;
		justify-content: space-between;
	
		.goods_item {
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
	
			image {
				width: 80%;
				height: 150px;
				display: block;
				margin: auto;
			}
	
			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
	
			.name {
				font-size: 28rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
				line-height: 50rpx;
			}
		}
	}
</style>
