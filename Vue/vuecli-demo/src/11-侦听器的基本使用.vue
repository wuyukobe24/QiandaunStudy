<template>
    <div id="app">
      <!-- 侦听器 -->
      <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    }
  },
  // 计算属性
  watch: {
    name(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  }
}
</script>

<style scoped>

</style>