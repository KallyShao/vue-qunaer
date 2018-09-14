<template>
	<div class="header">
	    <div class="header-left">
	    	<span class="iconfont back-icon">&#xe624;</span>
	    </div>
	    <div class="header-input">
	    	<span class="iconfont">&#xe632;</span>
	   		输入城市/景点/游玩主题
		</div>
	    <div class="header-right">
	    	<span>城市</span>
	    	<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
	line-height: .86rem
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
		width: 1.24rem
		text-align: center
		.arrow-icon
			font-size: .24rem
</style>