<template>
    <div> 
        <h2>这是Life.vue</h2>
        <p id='myP'>{{msg}}</p>
        <ul id='myUL'>
            <li v-for='(value, index) in arr' :key='index'>{{value}}</li>
        </ul>
        <button @click="arr.push(100)">点击按钮更新数据</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello vue',
            arr: [5,6,8,1]
        }
    },
    // 1、初始化阶段
    // new Vue()之后，vue内部给实例对象添加了一些属性和方法，data和methods初始化之前
    beforeCreate() {
        console.log('beforeCreate - 执行');
        console.log(this.msg); // undefined
    },
    // data和methods初始化之前
    // 使用场景：网络请求、注册全局事件
    created() {
        console.log('created - 执行');
        console.log(this.msg); // hello vue
    },
    // 2、挂载
    // 真实DOM挂载之前
    // 场景：预处理data，不会触发updated钩子函数
    beforeMount() {
        console.log('beforeMount - 执行');
        console.log(document.getElementById("myP")); // null
    },
    // 真实DOM挂载之后
    mounted() {
        console.log('mounted - 执行');
        console.log(document.getElementById("myP")); // <p id="myP">hello vue</p>
    },
    // 3、更新
    // data数据变化之后才会执行
    // 更新之前
    beforeUpdate() {
        console.log("beforeUpdate - 执行");
        console.log(document.querySelectorAll("#myUL>LI")[4]);
    },
    // 更新之后
    // 获取更新后的真实dom
    updated() {
        console.log("updated - 执行");
        console.log(document.querySelectorAll("#myUL>LI")[4]);
    },
    // 4、销毁
    // 前提：v-if=“false” 销毁vue实例
    // 场景：移除全局事件、移除当前组件、计时器、定时器
    beforeDestroy() {
        console.log("beforeDestory - 执行");
    }, 
    destroyed() {
        console.log("destory - 执行");
    }

}
</script>