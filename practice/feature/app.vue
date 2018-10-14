<template>
  <div class="app">
    <h3>标题: 插槽</h3>
    <NavBar>
      <li slot="nav-left">&lt;</li>
      <li slot="nav-center">我的主页</li>
      <li slot="nav-right">设置</li>
    </NavBar>

    <h3>标题: scopeSlot</h3>
    <SlotDemo>
      <span>{{value}}</span>
    </SlotDemo>
  </div>
</template>

<script>
  import NavBar from './navBar.vue'
  import SlotDemo from './slotDemo.vue'

  export default {
    name: "app",

    data () {
      return {
        value: '父组件中的value'
      }
    },

    provide () {
      return {
        grandpa: this
      }
    },

    components: {
      NavBar,
      SlotDemo
    }
  }
</script>

<style lang="stylus" scoped>
  ul, li {
    margin: 0px;
    padding: 0px;
    list-style: none
  }
</style>