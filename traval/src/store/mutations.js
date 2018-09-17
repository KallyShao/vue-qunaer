/*
* @Author: Administrator
* @Date:   2018-09-17 09:43:19
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-17 09:44:08
*/
export default {
    changeCity (state, city){  //与上面的changeCity()没有关系，名字可以相同也可以不同
        state.currCity = city;  //state就是整个store里面的state
        try{
            localStorage.city = city;
        }catch (e){}
    }
}