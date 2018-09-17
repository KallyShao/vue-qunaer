<template>
    <div class="container" @click="handleGallaryClose">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(img, index) in imgs" :key="index">
                    <img class="gallary-img" :src="img" :alt="index">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:  'CommonGallary',
    props: {
        imgs: {
            type: Array
        }
    },
    data (){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true   //如果监听到自己或父元素发生dom结构变化时，会自我刷新
            }
        }
    },
    methods: {
        handleGallaryClose (){
            this.$emit('gallaryClose');
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow: inherit
.container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 1
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: #000
    .wrapper
        height: 0
        width: 100%
        padding-bottom: 100%
        .gallary-img
            width: 100%
        .swiper-pagination
            color: #fff
            bottom: -1rem
</style>