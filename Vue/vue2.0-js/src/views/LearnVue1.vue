<template>
  <div class='form-element'>
    <h1 class="class_1"> vue 2.0 </h1>
    <h2> {{ title }} </h2>
    <input type='text' v-model='username' placeholder='Username' />

    <input type='password' v-model='password' placeholder='Password' />

    <button @click='login'>
      Submit
    </button>
    <p>
      Values: {{ username + ' ' + password }}
    </p>
    <p>
      计算属性 Values: {{ lowerCaseUsername + ' ' + password }}
    </p>
    <p>
      获取data Values: {{'getArr' +  arr}}
    </p>
    <p>
      更新了 username : {{ this.username }}
    </p>
    <LearnVue2 title="title: LearnVue1 的子控件 LearnVue2">  </LearnVue2>
  </div>
</template>

<script>
// import LearnVue2 from "@/views/LearnVue2";  写这里报错： did you register the component correctly?  估计和倒入方式有关
let arrN = [3,5,6];

export default {
  name: "LearnVue1",
  // components: LearnVue2,
  components: {
    LearnVue2: () => import('@/views/LearnVue2')
  },
  props: {
    title: String
  },

  // 计算属性 - Computed Properties
  computed: {
    lowerCaseUsername () {
      return this.username.toLowerCase()
    }
  },

  // watch监听方法，擅长处理的场景：一个数据影响多个数据 watch是去监听一个值的变化，然后执行相对应的函数。
  watch: {

  },

  // 数据定义 函数方法，返回数据的方式
  data () {
    return {
      page: '',
      type: '',
      username: '',
      password: '',
      arr: arrN,
    }
  },
   /*
    methods 编写
    Vue2 的选项型API是把methods分割到独立的属性区域的。我们可以直接在这个属性里面添加方法来处理各种前端逻辑。
   */
   methods: {
    login () {
      /*
      在 Vue2，this代表的是当前组件，不是某一个特定的属性。所以我们可以直接使用this访问prop属性值。
      就比如下面的例子在挂载完成后打印处当前传入组件的参数title。
      * */
      console.log('title: ' + this.title + '登录方法')
      // 主要用法：子组件向父组件传值
      this.$emit('login', {
        username: this.username,
        password: this.password
      })
      // 数据更新
      this.username = this.type
    },

     getRouterData() {
       this.page = this.$route.params.page
       this.type = this.$route.params.type
       console.log('params: page ==', this.page, 'type == ', this.type)
     }
  },

  /*
  生命周期钩子 — Lifecyle Hooks
   */


  beforeCreate () {
    // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  },

  /*（
   在实例创建完成后被立即调用。实例已经创建完成之后被调用。
   在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，
   watch/event 事件回调。然而，挂载阶段还没开始，
   $el 属性目前不可见。初始化数据请求写这里
  */
  created() {
    // params 路由接受参数
    this.getRouterData()
    this.name = this.type
  },
  beforeMount () {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  },
  /*
    页面初始化方法
    编译好的HTML挂载到页面完成后执行的事件钩子 初始化数据除非有依赖dom的放在mounted()里面，加个nextTick
    el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    此钩子函数中一般会做一些ajax请求获取数据进行数据初始化
   */
  mounted () {
    console.log('组件已挂载')
  },

  updated () {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
    //然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
    // 该钩子在服务器端渲染期间不被调用。

  },

  beforeDestroy () {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。一般用于清除定时器
    //$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {
      function timer() {
        console.log('time')
      }
      clearInterval(timer);
    })

  },

  destroyed () {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
    // 所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。

  }

}
</script>

<style scoped>
.class_1{
  color: red;
}
</style>
