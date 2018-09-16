<template>
    <ul class="list">
        <li class = "item" 
            v-for = "item in letters" 
            :key = "item"
            :ref = "item"
            @touchstart = "handleTouchStart"
            @touchmove = "handleTouchMove"
            @touchend = "handleTouchEnd"
            @click = "handleLetterClick">{{ item }}</li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        computed: {
            letters (){
                const letters = [];
                    for (let i in this.cities){
                        letters.push(i);
                    }
                    return letters;
            }
        },
        data (){
            return {
                touchStatus: false,
                startY:  0,
                timer: null
            }
        },
        updated (){
            this.startY = this.$refs['A'][0].offsetTop; //offsetTop是A元素距离有定位的父元素顶部的高度
        },
        methods: {
            handleLetterClick (e){
                this.$emit('currLetterChange', e.target.innerText);
            },
            handleTouchStart (){
                this.touchStatus = true;
            },
            handleTouchMove (e){
                if(this.touchStatus){
                    if(this.timer){
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {  //函数节流，提高性能
                        const touchY = e.touches[0].clientY - 79;  //e.touchs[0]表示手指的相关信息。后面的79是头部和搜索框的绝对像素值，不管屏幕多大，换算之后都是这个值。
                        const index = Math.floor((touchY - this.startY) / 20);
                            if(index >= 0 && index < this.letters.length){
                                this.$emit('currLetterChange', this.letters[index]);
                            }
                    }, 16);
                }
            },
            handleTouchEnd (){
                this.touchStatus = false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content: center
        width: .4rem
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor
</style>