<template>
	<view class="about">
		<image class="about-img" :src="src"></image>
		<view class="address">
			<view @click="callphone">电话: 15501253238</view>
			<view>地址: xxxxxxxxxxxxxxxxxxx</view>
		</view>

		<map style="width: 100%; height: 480rpx;margin:0 auto" :latitude="latitude" :longitude="longitude" :markers="covers"></map>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:"/static/img/about.png",
				latitude:  39.850828,
				longitude: 114.597409,
				covers: [{
					latitude:  39.850828,
					longitude: 114.597409,
					iconPath: '../../static/location.png',
					width:'39',
					height:'50'
				}]				
				
				
			}
		},
		methods: {
			callphone() {
				uni.makePhoneCall({
					phoneNumber: '15501253238'
				})
			}
		}
	}
</script>

<style lang="scss">
.about{
	.about-img{
		width:750rpx;
		height: 400rpx;
		
	}
	.address{
		padding: 20rpx;
		font-size: 36rpx;
		margin-bottom: 50rpx;
		view{
			border-bottom: 2rpx solid #ddd;
			line-height: 2em;
			
		}
		
	}
}
</style>
