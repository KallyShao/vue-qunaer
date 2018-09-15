<template>
	<div>
	    <home-header :city="city"></home-header>
	    <home-swiper :swiperList="swiperList"></home-swiper>
	    <home-icon :iconList="iconList"></home-icon>
	</div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcon from './components/Icons';
import axios from 'axios';

export default {
    name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcon
	},
	data(){
		return {
			city: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList:  []
		}
	},
	methods: {
		getHomeInfo(){
			axios.get('/api/index.json')
				.then(this.getHomeInfoSucceed);
		},
		getHomeInfoSucceed(res){
			console.log(res);
			res = res.data;
			if(res.ret && res.data){
				this.city = res.data.city;
				this.swiperList = res.data.swiperList;
				this.iconList = res.data.iconList;
				this.recommendList = res.data.recommendList;
				this.weekendList = res.data.weekendList;
			}
		}
	},
	mounted(){
		this.getHomeInfo()
	}
}
</script>

<style>

</style>