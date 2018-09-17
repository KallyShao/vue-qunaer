<template>
	<div class="header">
	    <div class="header-left">
	    	<span class="iconfont back-icon">&#xe624;</span>
	    </div>
	    <div class="header-input">
	    	<span class="iconfont">&#xe632;</span>
	   		输入城市/景点/游玩主题
		</div>
	    <router-link to="/city">
		    <div class="header-right">
		    	<span class="current-city">{{ this.currCity }}</span>
		    	<!-- <span class="current-city">{{ this.doubleCity }}</span> -->
		    	<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
	    </router-link>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';
    export default {
        name: 'home',
        computed: {
        	...mapState(['currCity']),  //简化state的写法，将state中的对象分别映射出来
        	// ...mapGetters(['doubleCity'])  //getters的用法
        }
    }
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
	height: $headerHeight 
	line-height: $headerHeight 
	display: flex
	background: $bgColor
	color: #fff
	.header-left
		width: .64rem
		float: left
		padding-left: .2rem
		.back-icon
			text-align: center
			font-size: .4rem
	.header-input
		flex: 1
		text-align: left
		margin-top: .12rem
		margin-left: .2rem
		height:.64rem
		line-height:.64rem
		border-radius: .1rem
		background: #fff
		color: #ccc
		padding-left: .2rem
	.header-right
		float: right
		min-width: 1.04rem
		padding: 0 .1rem
		text-align: center
		color: #fff
		.arrow-icon
			font-size: .24rem
</style>