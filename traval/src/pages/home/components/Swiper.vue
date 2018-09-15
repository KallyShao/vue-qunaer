<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide>
		    	<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" alt="001">
		    </swiper-slide>
		    <swiper-slide>
		    	<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg" alt="002">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</div>
</template>

<script>

export default {
    name: 'HomeSwiper',
    data(){
    	return {
    		swiperOption: {}
    	}
    },
	components: {
	}
}
</script>

<style lang="stylus" scoped>
.wrapper
	width: 100%
	height: 0
	overflow: hidden
	padding-bottom: 31.25%
	.swiper-img{
		width: 100%
	}
</style>