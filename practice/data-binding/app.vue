<template>
  <div class="app">
    {{html}}
    <p v-html="html"></p>
    <!--<div :class="[{active : !isActive}, {'two-class' : !isActive}]">动态添加class</div>-->
    {{classNames}}
    <div :class="classNames">动态添加class</div>
    <div  :style="[styles, styles2]">动态绑定style</div>
  </div>
</template>

<script>
  export default {
    name: "app",

    data () {
      return {
        html: '<span>this is span</span>',
        isActive: true,
        styles: {
          color: '#0f0'
        },
        styles2: {
          background: '#f00',
          'font-size': '20px'
        }
      }
    },

    computed: {
      classNames () {
        return this.isActive ? ['active', 'two-class'] : ''
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>