<template>
  <div id="app">
    <div>
      <p v-text="title"></p>
      <!-- v-html会覆盖远原来的值 --> 
      <p v-html="title"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "<span>我是一个span</span>"
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