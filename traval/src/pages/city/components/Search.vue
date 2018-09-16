<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
</template>

<script>
    export default {
        name: 'CitySearch'
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
            
</style>