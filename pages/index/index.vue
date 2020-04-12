<template>
	<view class="content">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="item in slides" :key="item.id">
				<image class="item-img" :src="item.image"></image>
				<view class="content-wrap">
					<view class="sub_header">{{item.sub_header}}</view>
					<view class="header">{{item.header}}</view>
					<view class="description">{{item.description}}</view>
				</view>
				<view class="mores">
					<text @click="yuyue()">预约驾驶</text>
					<text @click="todetails(item.id)">查看详情</text>
				</view>
			</swiper-item>
		</swiper>
		<view class="vehicles">
			<view v-for="item in vehicles" class="vehicles-item" @click="todetails(item.id)" :key="item.id">
				<image :src="item.image"></image>
				<view class="content-wrap">
					<view class="header">{{item.header}}</view>
					<view class="sub_header">{{item.sub_header}}</view>
					<view class="description">{{item.description}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots:true,
				autoplay:true,
				interval:5000,
				duration:500,
				slides:[],
				vehicles:[]
			}
		},
		onLoad() {
           this.getindex();
		   this.getvehicles();
		},
        onShareAppMessage() {
			return {
				title: "汽车",
				path: "pages/index/index"				
			}

        },
		methods: {
           getindex() {
			   uni.request({
			   // #ifdef  H5
			   url:"/zt/json/nhqc/slides.json",
			   // #endif				   
			   	//url:"https://web58.top/zt/json/nhqc/slides.json",
				success: (res) => {
					//console.log(res.data.slides)
					this.slides =res.data.slides
				}
			   })
		   },
		   getvehicles() {
			   uni.request({
			   // #ifdef  H5
			   url:"/zt/json/nhqc/vehicles.json",
			   // #endif
			   	//url:"https://web58.top/zt/json/nhqc/vehicles.json",
				success: (res) => {
					//console.log(res.data.vehicles)
					this.vehicles =res.data.vehicles
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
		   },
		   todetails(id) {
			   uni.navigateTo({
			   	  url:'/pages/details/details?id=' + id
			   })
		   }
		}
	}
</script>

<style lang="scss">
.swiper{
	height: 86vh;
	.item-img{
		width: 750rpx;
		height: 420rpx;
	}
	.content-wrap{
		text-align: center;
		margin-top: 80rpx;
		.sub_header{
			font-size: 34rpx;
			color: #777;
			text-transform: uppercase;
			letter-spacing: 6rpx;
		}
		.header{
			font-size: 60rpx;
			color: $color;
			font-weight: bold;
			line-height: 160rpx;
		}
		.description{
			color: #999;
			font-size: 40rpx;
		}
	}
	.mores{
		text-align: center;
		margin-top: 100rpx;
		text{
			background: #ddd;
			color: #000;
			font-size: 32rpx;
			padding: 18rpx 26rpx;
		}
		text:nth-child(2){
			background:$color;
			color: #fff;
		}
	}
	
}
.vehicles{
	padding: 35rpx;
}
.vehicles-item{
	border-radius: 14rpx;
	box-shadow: 0rpx 0rpx  20rpx #ccc;
	margin-bottom: 40rpx;
    .content-wrap{
		padding: 20rpx;
		padding-bottom: 60rpx;
		.header{
			font-size: 48rpx;
			color: $color;
			font-weight: bold;
			line-height: 2em;
		}
		.sub_header{
			font-size: 30rpx;
			color: $color;	
			text-transform: uppercase;
			&:after{
				content: "";
				display: block;
				width: 100rpx;
				height: 4rpx;
				background: $color;
				margin-top: 10rpx;
			}
		}
		.description{
			color: #777;
			font-size: 32rpx;
			margin-top: 40rpx;
		}
	}
	image{
		width:100%;
		height:450rpx;
		border-radius: 14rpx;
		display: block;
	}
}
</style>
