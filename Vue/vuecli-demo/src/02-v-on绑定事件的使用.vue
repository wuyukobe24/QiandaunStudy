<template>
  <div id="app">
    <h1>I WANT TO BUT {{count}}  </h1>
    <!-- 绑定事件语法：v-on:事件名='少量代码' --> 
    <button v-on:click="count = count + 1">+1</button>
    <!-- 绑定事件语法：v-on:事件名='methon里函数名' --> 
    <button v-on:click="addFn">+1</button>
    <!-- 绑定事件语法：v-on:事件名='methon里函数名(值)' --> 
    <button v-on:click="addCountFn(5)">+5</button>
    <!-- 绑定事件语法：@事件名='methon里函数名(值)' --> 
    <button @click="addCountFn(10)">+10</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    addFn(){
      this.count++
    },
    addCountFn(num){
      this.count = this.count + num
    }
  }
}
</script>

<style>
  #app{
    text-align: center;
    margin-top: 60px;
  }
</style>