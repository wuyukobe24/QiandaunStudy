<template>
  <div id="app">
    <div>
      <ol>
        <!-- v-for 迭代数组: 可以绑定数据到数组来渲染一个列表 -->
        <li v-for="site in sites" :key="site">
          {{site.name}}
        </li>
      </ol>
      <ul>
        <!-- 模板中使用 v-for： -->
        <template  v-for="site in sites">
          <li :key="site.name">{{site.name}}</li>
          <li :key="site.name">-----------</li>
        </template>
      </ul>
      <ul>
        <!-- v-for 迭代对象: 可以通过一个对象的属性来迭代数据： -->
        <li v-for="value in object" :key="value">
          {{value}}
        </li>
      </ul>
      <ul>
        <!-- 迭代 index key value -->
        <li v-for="(value, key, index) in object" :key="value">
          {{ index }}. {{ key }} : {{ value }}
        </li>
      </ul>
      <ul>
        <!-- 迭代整数 -->
        <li v-for="n in 10" :key="n">
          数字：{{n}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sites: [{"name": "ni"},{"name": "hao"},{"name": "ya",}],
      object: {
        name: '菜鸟教程',
        url: 'http://www.runoob.com',
        slogan: '学的不仅是技术，更是梦想！'
      }
    }
  },
}
</script>

<style>
  /* #app{
    text-align: center;
    margin-top: 60px;
  } */
</style>