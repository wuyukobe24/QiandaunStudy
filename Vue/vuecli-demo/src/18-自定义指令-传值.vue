<template>
  <div id="app">
    <h1>1、自定义组件-传值</h1>
    <p v-color="'red'">修改文字颜色</p>
    <p v-color="colorStr">使用变量修改文字颜色</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorStr: 'green'
    }
  }
}
</script>

<style scoped>

</style>