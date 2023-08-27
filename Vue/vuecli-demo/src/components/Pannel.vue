<template>
    <div>
      <!-- 侦听器 -->
      <div>这是一个监听器</div>
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