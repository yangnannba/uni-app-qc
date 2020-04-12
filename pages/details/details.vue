<template>
	<view>
		
		<view class="banner">
			<image class="img" :src="detail.image"></image>
			<view class="bottom">
				<view class="header">{{detail.header}}</view>
				<view class="sub_header">{{detail.sub_header}}</view>
				<view v-if="detail.meta" class="price">{{detail.meta.price}}</view>
			</view>
		</view>
		<view class="detailyy">
			<view class="item">
				<view>二氧化碳排放</view>
				<view v-if="detail.meta"><text >{{detail.meta.carbon_dioxide}}</text> 克/公里</view>
			</view>
			<view class="item">
				<view>综合燃油</view>
				<view v-if="detail.meta"><text>{{detail.meta.fuel}}</text> 升/百公里</view>
			</view>			
		</view>
		
		<view class="yuyue">
			<view>{{detail.description}}</view>
			<view class="btn" @click="yuyue()">预约驾驶</view>
		</view>
        <design :design="detail.meta.exterior_design" v-if="detail.meta" :background="background1" title="外观"></design>
        <design :design="detail.meta.interior_design" v-if="detail.meta" :background="background2" title="内饰"></design>		
	</view>
</template>

<script>
	import design from '../../components/Design.vue'
	export default {
		data() {
			return {
				myid:-1,
				detail:{},
				background1:"#f2f2f2",
				background2:"#fff"
			}
		},
		methods: {
			getdetails() {
				uni.request({
					url:"/zt/json/nhqc/vehicles.json",
					success:(res) => {
						this.detail=res.data.vehicles[this.myid-1]
						//console.log(this.detail)
						uni.setNavigationBarTitle({
							title:this.detail.header,
						
						});	
					}
				})
			},
			yuyue() {
				uni.showToast({
					title: '暂不支持',
					duration: 2000,
					icon: "none",
					position:"bottom"					
				})
			}
		},
		components:{
			design
		},
		onLoad(options) {
			this.myid=options.id;
			this.getdetails();
		
		}
	}
</script>

<style lang="scss">
.banner{
	position: relative;
	.img{
		width:750rpx;
		height: 496rpx;
		display: block;
	}
	.bottom{
		position: absolute;
		bottom: 0;
		left: 0;
		background: linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,1));
		width: 100%;
		color: #fff;
		.header{
			font-size: 32rpx;
	        text-indent: 20rpx;
		}
		.sub_header{
			font-size: 28rpx;
			text-indent: 20rpx;
			line-height: 50rpx;
		}
		.price{
			position: absolute;
			right: 20rpx;
			bottom: 20rpx;
			font-size: 26rpx;
		}
	}
}
.detailyy{
	display: flex;
	border-bottom: 2rpx solid #ddd;
	.item{
		width: 50%;
		text-align: center;
		font-size: 32rpx;
		padding: 40rpx 0;
		text{
			font-size: 54rpx;
		}
	}
	.item:nth-child(1){
		border-right: 2rpx solid #ddd;
	}
}
.yuyue{
	text-align: center;
	font-size: 32rpx;
	padding: 60rpx 0;
	.btn{
		background: $color;
		color: #fff;
		display: inline-block;
		padding: 10rpx 20rpx;
		margin-top: 20rpx;
	}
}
</style>
