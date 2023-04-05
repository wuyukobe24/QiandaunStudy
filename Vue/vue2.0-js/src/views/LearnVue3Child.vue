<template>
  <div class="content0">
    <h1> {{ title }} </h1>
    <div class="content1">
      <h1 class="view0">首页</h1>
      <h1 class="view1">新闻</h1>
      <h1 class="view2">体育</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "LearnVue3Child",
  props: {
    title: String
  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    console.log('LearnVue3Child 组件已挂载')
  },
}
</script>

<style lang="scss" scoped>
// 嵌套方式只支持 scss
.content0 {
  display: flex;
  background-color: wheat;
  justify-content: center;
  flex-direction: column;
  padding-right: 0.16rem;
  padding-left: 0.16rem;
  margin-bottom: 0.13rem;
  margin-top: 0.25rem;
  .content1 {
    display: flex;
    .view1{
      flex: 1;
      text-align: center;
      line-height: 50px;
      background-color: #007AFF;
    };
  }
}



</style>
