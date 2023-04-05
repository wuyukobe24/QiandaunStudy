<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="learnVue1"> learnVue1 </button>
<!--    <router-link to="/LearnVue1">LearnVue1路由跳转  </router-link>-->
    <div>
      <button @click="handleVueCodeClick" class="css">VueTest</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleVueCodeClick(){
      window.open('/VueTestCode.html')
    },
    learnVue1 () {
      // params 路由跳转
      this.$router.push({
        // path: '/LearnVue1',
        name: `LearnVue1`,
        params: {
          type: '5',
          page: '1'
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
