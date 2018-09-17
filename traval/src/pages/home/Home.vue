<template>
	<div>
	    <home-header></home-header>
	    <home-swiper :swiperList="swiperList"></home-swiper>
	    <home-icon :iconList="iconList"></home-icon>
	</div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcon from './components/Icons';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcon
	},
	data(){
		return {
			// city: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList:  [],
			lastCity: ''  //上次加载时的城市
		}
	},
	computed: {
		...mapState(['currCity'])
	},
	methods: {
		getHomeInfo(){
			axios.get('/api/index.json?city=' + this.currCity)
			.then(this.getHomeInfoSucceed);
		},
		getHomeInfoSucceed(res){
			res = res.data;
			if(res.ret && res.data){
				// this.city = res.data.city;
				this.swiperList = res.data.swiperList;
				this.iconList = res.data.iconList;
				this.recommendList = res.data.recommendList;
				this.weekendList = res.data.weekendList;
			}
		}
	},
	mounted (){
		//mounted在页面初次加载的时候执行
		this.lastCity = this.currCity;
		this.getHomeInfo();
	},
	//使用了<keep-alive></keep-alive>时，组件里会多出activated()这个生命周期函数
	//activated()在页面重新被显示的时候执行
	activated (){
		if (this.lastCity !== this.currCity){
			this.lastCity = this.currCity;
			this.getHomeInfo();
		}
	}
}
</script>

<style>

</style>