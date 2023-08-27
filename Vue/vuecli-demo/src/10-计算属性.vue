<template>
    <div id="app">
      <!-- 计算属性 -->
      <div>num的值：{{ num }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20
    }
  },
  // 计算属性
  computed: {
    num() {
      return this.a + this.b
    }
  }
}
</script>

<style scoped>

</style>