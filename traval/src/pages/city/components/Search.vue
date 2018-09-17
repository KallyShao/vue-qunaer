<template>
    <div>
        <div class="search">
            <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model = "keyword">
        </div>
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <li class = "search-item border-bottom" v-for = "item in list" 
                    @click = "handleHotCityClick(item.name)">{{ item.name }}</li>
                <li class="search-item border-bottom"  v-show = "hasNoKeyword">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapMutations } from 'vuex';
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data (){
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoKeyword(){
            return !this.list.length;
        }
    },
    methods: {
        handleHotCityClick (city){
            //派发一个changeCity（action）的事件，在store中接收
            // this.$store.dispatch('changeCity', city); 
            //直接调用mutaition
            this.changeCity(city);  //使用mapMutations()之后
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        keyword (){
            if (this.timer){
                clearTimeout(this.timer);
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = [];
                    for (let key in this.cities){
                        this.cities[key].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                                result.push(value);
                            }
                        }) 
                    }
                    this.list = result;
            }, 100)
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.search);
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .search
        height: .72rem
        padding:0 .1rem
        background: $bgColor
        .search-input
            width: 100%
            text-align: center
            height: .62rem
            box-sizing: border-box
            padding: 0 .1rem
            line-height: .62rem
            border-radius: .06rem
            color: #666
    .search-content
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        z-index: 1
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>