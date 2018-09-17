/*
* @Author: Administrator
* @Date:   2018-09-17 09:40:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-17 09:48:05
*/
let defaultCity = '北京';
    try{
        if(localStorage.city){   //防止用户关闭了localStorage功能，一般使用的时候都加上try...catch..
            defaultCity = localStorage.city
        }
    }catch (e){ }

export default {
    currCity: defaultCity
}