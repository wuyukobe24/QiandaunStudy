<template>
  <div id="app">
    <Product v-for='obj in list' :key='obj.id' :title='obj.title' :where='obj.where' :intro='obj.intro'></Product>
  </div>
</template>

<script>
import Product from './components/MyProduct'
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: '打篮球',
          where: '昌平南邵',
          intro: '在广场这里'
        },{
          id: 2,
          title: '广场舞',
          where: '南邵篮球场',
          intro: '好多人呀'
        },{
          id: 3,
          title: '吃东西',
          where: '世界广场',
          intro: '你知道在哪里吗'
        },
      ]
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