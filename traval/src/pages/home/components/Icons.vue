<template>
    <div class="icons-wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) in pages" :key="index">
            <div class="icon" v-for="icon in page" :key="icon.id">
                <div class="icon-img">
                    <img class="img-item" :src="icon.imgUrl" :alt="icon.id">
                </div>
                <p class="icon-desc">{{icon.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
    export default {
        name:  'HomeIcons',
        props: {
            iconList: Array
        },
        data(){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: false
                }
            }
        },
        computed: {
            pages(){
                const pages = [];
                    this.iconList.forEach((item, index) => {
                        const pageNum = Math.floor(index / 8);  //当前数据应该显示在第几页
                            if(!pages[pageNum]){
                                pages[pageNum] = []
                            }
                            pages[pageNum].push(item);
                    })
                    return pages;
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    @import '~style/mixins.styl'
    .icons-wrapper >>> .swiper-container
        width: 100%
        height: 0
        padding-bottom: 50%
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height:0 //这个很关键
        padding-bottom: 25%
        background: #fff
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .img-item
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            bottom: 0
            left: 0
            right: 0
            height: .44rem
            line-height: .44rem
            color: $darkTextColor
            text-align: center
            ellipsis()
</style>