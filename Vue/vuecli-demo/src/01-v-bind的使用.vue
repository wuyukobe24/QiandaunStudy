<template>
    <div id="app">
    <h1>I WANT TO BUT {{obj.num}} {{msg}} {{obj.name}} </h1>
    <!-- 语法 v-bind:原生属性名=vue变量 --> 
    <a v-bind:href='url'>点击去官网</a>
    <img class="tesla" alt="tesla logo" src="./assets/tesla.png">
    <!-- 语法 :原生属性名=vue变量 --> 
    <img class="tesla" :src='imgUrl'>
    <img class="tesla" :src="localImage">
  </div>
</template>

<script>
import imgObj from './assets/tesla.png'
export default {
  data() {
    return {
      url: 'https://www.tesla.cn',
      localImage: imgObj,
      imgUrl: 'https://mp.ofweek.com/data/images/leiTech/2021-11-25/60cafd53f0bcd6410b359372771f942c.png',
      msg: 'TESLA ',
      obj: {
        name: 'Model Y',
        num: '1'
      }
    }
  }
}
</script>

<style>
  #app{
    text-align: center;
    margin-top: 60px;
  }
  .tesla{
    width: 500px;
  }
</style>