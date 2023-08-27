<template>
    <div id="app">
    <!-- 语法 :class="{类名: 布尔值}  :style="{css属性名: 值}" --> 
    <p :class="{red_str: show}" :style="{backgroundColor: bgColor}">动态使用class</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      bgColor: 'orange',
    }
  }
}
</script>

<style scoped>
  .red_str{
    color: red;
  }
</style>