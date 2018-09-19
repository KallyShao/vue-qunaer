<template>
    <div>
        <div class="banner" @click="handleShowGallary">
            <img class="banner-img" :src="bannerImg" alt="001">
            <div class="banner-info">
                <div class="banner-title">{{ sightName }}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    {{ this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <common-gallary :imgs="gallaryImgs" v-show="showGallary" @gallaryClose="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary';  
import axios from 'axios';
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    components: {
        CommonGallary
    },
    data (){
        return {
            showGallary: false
        }
    },
    methods: {
        handleShowGallary (){
            this.showGallary = true;
        },
        handleGallaryClose (){
            this.showGallary = false;
        },
        getDetailInfo (){
            axios.get('/api/detail.json')
            .then(this.getDetailInfoSucceed)
        },
        getDetailInfoSucceed (res){
            if (res.data.ret){
                res = res.data
                if (res.data){
                    this.imgs = res.data.gallaryImgs;
                }
            }
        }
    },
    mounted (){
        this.getDetailInfo();
    }
}
</script>

<style lang="stylus" scoped>
.banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
        width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        color: #fff
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
        .banner-title
            flex: 1
            font-size: .32rem
            padding: 0 .2rem
        .banner-number
            height: .32rem
            line-height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            border-radius: .2rem
            background: rgba(0, 0, 0, .8)
            font-size: .24rem
            .banner-icon
                font-size: .24rem
</style>