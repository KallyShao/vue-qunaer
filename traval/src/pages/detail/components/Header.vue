<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data (){
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll (){
            const scrollTop = document.documentElement.scrollTop;
            if (scrollTop >= 60){
                let opacity = scrollTop / 160;
                    opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = { opacity };
                this.showAbs = false;
            }else{
                this.showAbs =  true;
            }
        }
    },
    activated (){   //该生命周期只有在使用了<keep-alive>标签时才起作用。在页面即将被展示时执行
        window.addEventListener('scroll', this.handleScroll);
    },
    deactivated (){  //即将离开页面时执行
        window.removeEventListener('scroll', this.handleScroll)
    }
  
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    .header-abs-back
        color: #fff
        font-size: .4rem
.header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight 
    line-height: $headerHeight 
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .3rem
    .header-fixed-back
        position: absolute
        left: 0
        top: 0
        width: .64rem
        font-size: .4rem
        text-align: center
        color: #fff
</style>