<template>
    <div>
        <city-header></city-header>
        <city-search :cities = "cities"></city-search>
        <city-list :cities = "cities" :hotCities = "hotCities" :currLetter = "currLetter"></city-list>
        <city-alphabet :cities = "cities" @currLetterChange = "handleGetCurrLetter"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities: {},
            hotCities: [],
            currLetter: ''
        }
    },
    methods: {
        getCityInfo(){
            axios.get('/api/city.json')
            .then(this.getCityInfoSucceed);
        },
        getCityInfoSucceed(res){
            res = res.data;
            if(res.ret && res.data){
                this.cities = res.data.cities;
                this.hotCities = res.data.hotCities;
            }
        },
        handleGetCurrLetter(currLetter){
            this.currLetter = currLetter;
        }
    },
    mounted(){
        this.getCityInfo();
    }
}
</script>

<style lang="stylus" scoped>

</style>