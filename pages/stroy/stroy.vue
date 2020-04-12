<template>
	<view class="stories">
		<view v-for="item in stories" class="stories-item" :key="item.id">
			<view class="wrap-img">
				<image :src="item.image" @click="myshow(item.id)"></image>
				<text class="duration">{{item.duration}}</text>
			</view>
			
			<view class="content-wrap">
				<view class="header">{{item.header}}</view>
				<view class="sub_header">{{item.original_header}}</view>
				<view class="description">{{item.description}}</view>
			</view>
			<view class="myVideo" v-if="myid == item.id" @click="close()">
				<video  :src="item.video" :autoplay='autoplay'  controls></video>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				stories:[],
				myid:-1,
				autoplay:true
			}
		},
		methods: {
			getstory() {
				uni.request({
					url:'/zt/json/nhqc/stories.json',
					success: (res) => {
						
						this.stories=res.data.stories
						//console.log(this.stories)
					}
				})
			},
			myshow(id) {
				this.myid = id
			},
			close() {
				this.myid = -1
			}
		},
		onLoad() {
			this.getstory();
		}
	}
</script>

<style lang="scss">
.stories{
	padding: 35rpx;
}
.stories-item{
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
	.wrap-img{
		position: relative;
		image{
			width:100%;
			height:450rpx;
			border-radius: 14rpx;
			display: block;
		}
		.duration{
			position: absolute;
			bottom: 14rpx;
			right: 14rpx;
			background: rgba(0,0,0,0.7);
			color: #fff;
			font-size: 24rpx;
			padding: 4rpx 10rpx;
			border-radius: 5rpx;
		}
	}
    .myVideo{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0,0.8);
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 99999999;
		video{
			width: 100%;
		}
	}
}
</style>
