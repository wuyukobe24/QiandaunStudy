<template>
  <div id="app">
    <div>
      <span>年龄：</span>
      <!-- 1、number修饰符-把值parsefloat转数值再赋值给v-model对应的变量 --> 
      <input type="number" v-model.number="age">
    </div>
    <div>
      <span>格言：</span>
      <!-- 2、trim修饰-去除首位的空格 --> 
      <input type="text" v-model.trim="motto">
    </div>
    <div>
      <span>简介：</span>
      <!-- 3、lazy修饰符-失去焦点内容改变时，把内容同步给v-model的变量 --> 
      <textarea type="text" v-model.lazy="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: "",
      motto: "",
      intro: ""
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