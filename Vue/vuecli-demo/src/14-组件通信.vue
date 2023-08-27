<template>
  <div id="app">
    <Product title='打篮球' where='北京昌平南邵' intro='在广场这里'></Product>
    <Product title='广场舞' where='南邵篮球场' intro='好多人呀'></Product>
    <Product :title='title' :where='where' :intro='intro'></Product>
  </div>
</template>

<script>
import Product from './components/MyProduct'
export default {
  data() {
    return {
      title: '吃东西',
      where: '世界广场',
      intro: '你知道在哪里吗'
    }
  },
  components: {
    // Product: Product // key和value一样可以写一个
    Product
  }
}
</script>

<style scoped>

</style>