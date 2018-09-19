<template>
    <div id="app">
        <keep-alive exclude="Detail">
            <!-- exclude指示不做缓存的组件，这里意味着不对详情页进行缓存。组件的名称是组件内定义的name字段 -->
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
