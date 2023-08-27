<template>
    <div id="app">
      <!-- 侦听器 -->
      <input type="text" v-model="user.name">
      <input type="text" v-model="user.age">
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: ""
      }
    }
  },
  // 计算属性
  watch: {
    user: {
      handler(newValue, oldValue){
        console.log(newValue, oldValue)
      },
      deep: true,
      imdediate: true
    }
  }
}
</script>

<style scoped>

</style>