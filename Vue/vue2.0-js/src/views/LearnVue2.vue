<template>
  <div>
    <h1> {{ title }} </h1>
    <div class="div-btn-update">
      <button class="btn-update" @click="upgradeClickAction">跳转到LearnVue3</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnVue2",
  props: {
    title: String
  },
  mounted () {
    console.log('LearnVue2 组件已挂载')
  },
  methods: {
    upgradeClickAction (){
      console.log('query 路由跳转')
      this.$router.push({
        path: '/LearnVue3',
        query: {
          type: '15',
          page: "学习css"
        }
      })
    }
  }
}
</script>

<style scoped>
.div-btn-update {
  background-color: burlywood;
}
.btn-update {
  width: 6.43rem;
  height: 2.48rem;
  /*position: absolute;*/
  /*left: 50.00%;*/
  /*top: 50.00%;*/
  /*bottom: 47.17%;*/
  /*background: #117af2;*/
  /*border-radius: 0.04rem;*/
  /*font-family: "PingFang SC";*/
  /*font-style: normal;*/
  /*font-weight: 500;*/
  /*font-size: 0.16rem;*/
  /*text-align: center;*/
  /*color: #ffffff;*/
  /*border-width: 0px;*/
}
</style>
