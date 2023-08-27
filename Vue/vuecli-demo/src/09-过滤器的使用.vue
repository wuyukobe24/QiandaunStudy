<template>
    <div id="app">
      <div>原来的样子：{{ msg }}</div>
      <!-- 2、过滤器适用
      语法：{{ 值|过滤器名字 }} -->
      <div>使用翻转过滤器：{{ msg | reverse }}</div>
      <div :title='msg | toUp'>鼠标长停</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello vue',
    }
  },
  filters:{
    toUp(val){
      return val.toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>