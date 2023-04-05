<template>
  <div>
    <h1> {{page}} </h1>
    <LearnVue3Child title="title:  LearnVue3 的 子控件 LearnVue3Child"> </LearnVue3Child>
  </div>
</template>

<script>
// import LearnVue3Child from "@/views/LearnVue3Child";

export default {
  name: "LearnVue3",
  // components: LearnVue3Child,
  components: {
    LearnVue3Child: () => import('@/views/LearnVue3Child')
  },
  data() {
    return {
      page: '',
      type: ''
    }
  },
  methods: {
    getRouterData() {
      this.page = this.$route.query.page
      this.type = this.$route.query.type
      console.log('params: page ==', this.page, 'type == ', this.type)
    }
  },
  created() {
    // query路由接受参数
    this.getRouterData()
  },
}
</script>

<style scoped>

</style>
