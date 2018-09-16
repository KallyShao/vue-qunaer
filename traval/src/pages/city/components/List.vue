<template>
    <div class = "list" ref = "wrapper">
        <div>
            <div class = "area">
                <div class = "title border-topbottom">当前城市</div>
                <div class = "button-list">
                    <div class = "button-wrapper">
                        <div class = "button">北京</div>
                    </div>
                </div>
            </div>
            <div class = "area">
                <div class = "title border-topbottom">热门城市</div>
                <div class = "button-list">
                    <div class = "button-wrapper" v-for = "city in hotCities" :key = "city.id">
                        <div class = "button">{{ city.name }}</div>
                    </div>
                </div>
            </div>
            <div class = "area" v-for = "(item, key) in cities" :key = "key" :ref = "key">
                <div class = "title border-topbottom">{{ key }}</div>
                <div class = "item-list" v-for = "city in item" :key = "city.id">
                    <div class = "item border-bottom">{{ city.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        currLetter: String
    },
    mounted (){
        this.scroll = new BScroll(this.$refs.wrapper)
        // this.$refs.currLetter.top = 
    },
    //监听currLetter的变化
    watch: {
        currLetter (){
            if(this.currLetter){
                const element = this.$refs[this.currLetter][0];   //注意这里:ref，而不是ref，前面有冒号
                    this.scroll.scrollToElement(element);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        left: 0
        right: 0
        top: 1.58rem
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    text-align: center
                    margin: .1rem
                    padding: .1rem 0
                    border-radius: .06rem
                    border: .02rem solid #ccc
        .item-list
            .item
                height: .76rem
                line-height: .76rem
                color: #666
                padding-left: .2rem
</style>