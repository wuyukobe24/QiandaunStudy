<template>
  <div id="app">
    <div>
      <span>来自于：</span>
      <!-- 1、下拉菜单要绑定在select上 --> 
      <select v-model="from">
        <option value="北京市">北京</option>
        <option value="天津市">天津</option>
        <option value="上海市">上海</option>
      </select>
    </div>
    <div>
      <!-- 2、复选框，v-model的变量值
      非数组，关联的是复选框的checkbox属性（true）
      数组，关联的是复选框的value属性（[唱歌,跳舞]）
       --> 
      <span>爱好：</span>
      <input type="checkbox" v-model="hobby" value="唱歌">唱歌
      <input type="checkbox" v-model="hobby" value="跳舞">跳舞
      <input type="checkbox" v-model="hobby" value="追剧">追剧
    </div>
    <div>
      <span>性别：</span>
      <input type="radio" value="男" name="sex" v-model="gender">男
      <input type="radio" value="女" name="sex" v-model="gender">女
    </div>
    <div>
      <span>介绍：</span>
      <textarea v-model="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: "天津市",
      hobby: [],
      gender: "",
      intro: "sedesssaaa"
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