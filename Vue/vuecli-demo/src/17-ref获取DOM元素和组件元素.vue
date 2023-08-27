<template>
  <div id="app">
    <h1>1、获取DOM元素</h1>
    <p id="p" ref="myP">这是一个DOM元素</p>
    <h1>2、获取组件对象</h1>
    <Demo ref="de"></Demo>
  </div>
</template>

<script>
import Demo from './components/Demo'
export default {
  mounted() {
    // 1、获取DOM元素的两种方法
    console.log(document.getElementById("p"));
    console.log(this.$refs.myP);
    // 2、获取组件元素并调用组件中方法
    let demoObj = this.$refs.de;
    demoObj.fn();
  },
  components: {
    Demo
  } 
}
</script>

<style scoped>

</style>