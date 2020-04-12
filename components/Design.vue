<template>
	<view :style='{background:background}' class="design">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay"  :duration="duration">
                        <swiper-item class="swiper-item" v-for="item in design">
                          
								<view class="title">{{title}}</view>
								<view class="header">{{item.header}}</view>
								<view class="description">{{item.description}}</view>
								<image class="image" :src="item.image" @click="showimg(item.image)"></image>
								
								
							
                        </swiper-item>

                    </swiper>
					
			
	</view>
</template>

<script>
export default {
	props: ['design','background','title'],
	data() {
		return {
			indicatorDots:true,
			autoplay:false,
			duration:300
		}
	},
	methods:{
		showimg(current) {
			
			let urls = this.design.map(item => {
				return item.image
			})
		
			uni.previewImage({
				current,
				urls
			})
		}
	}
}
</script>

<style lang="scss">
.design{
	padding: 30rpx 0;
}
.swiper{
	height:980rpx;
}
.swiper-item{
	text-align: center;
	.title{
		font-size: 28rpx;
		color: #777;
		line-height: 2em;
	}
	.header{
		font-size: 50rpx;
		line-height: 2em;
	}
	.description{
		font-size: 32rpx;
		line-height: 2em;
		padding: 0 40rpx;
		height: 320rpx;
	}
	.image{
		width: 750rpx;
		height:420rpx;
		display: block;
	}
}
</style>
