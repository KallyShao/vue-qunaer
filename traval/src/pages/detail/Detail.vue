<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list=categoryList></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios';

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data (){
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            categoryList: [],
            lastId:  ''
        }
    },
    methods: {
        getDetailInfo(){
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            })
            .then(this.getDetailInfoSucceed);
        },
        getDetailInfoSucceed(res){
            res = res.data;
            if(res.ret && res.data){
                this.sightName = res.data.sightName;
                this.bannerImg = res.data.bannerImg;
                this.gallaryImgs = res.data.gallaryImgs;
                this.categoryList = res.data.categoryList;
            }
        }
    },
    mounted (){
        //mounted在页面初次加载的时候执行
        this.getDetailInfo();
    }
}
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>