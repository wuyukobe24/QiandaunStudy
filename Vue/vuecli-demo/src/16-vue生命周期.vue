<template>
  <div id="app">
    <h1>vue生命周期</h1>
    <Life v-if="isshow"></Life>
    <button @click="isshow=false">点击销毁Life</button>
  </div>
</template>

<script>
import Life from './components/Life'
export default {
  data() {
    return {
      isshow: true
    }
  },
  components: {
    Life
  }
}
</script>

<style scoped>

</style>