/*
* @Author: Administrator
* @Date:   2018-09-16 23:50:25
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-17 10:09:19
*/
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    // actions: {  //action内操作的是异步的数据改变，mutations操作的是同步的数据的改变！！！
    //         //ctx为上下文，city是传进来的参数。这个参数是从组件里传过来的。
    //         //如果组件的数据调用不是太复杂，可以不通过actions，而是直接调用mutations
    //     changeCity (ctx, city){ 
    //         ctx.commit('changeCity', city);
    //     }  
    // },
    mutations,
    getters: {
        doubleCity (state){
            return state.currCity + ' '  + state.currCity
        }
    }
})