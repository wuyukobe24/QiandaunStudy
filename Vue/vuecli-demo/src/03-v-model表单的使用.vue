<template>
  <div id="app">
    <!-- v-model双向数据绑定 value属性 vue变量 --> 
    <div>
      <span>用户名：</span>
      <input type="text" v-model="username">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    }
  },
}
</script>

<style>
  #app{
    text-align: center;
    margin-top: 60px;
  }
</style>