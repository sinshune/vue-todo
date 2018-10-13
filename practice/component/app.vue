<template>
  <div class="app">
    {{msg}}
    <button @click="sonEvent">调用son中的方法</button>
    <Son :is-show="isShow" @toggleHide="toggleHide" ref="son"/>
  </div>
</template>

<script>
  import Son from './son.vue'

  export default {
    name: "app",

    data () {
      return {
        msg: 'hello world',
        isShow: true
      }
    },

    components: {
      Son
    },

    methods: {
      toggleHide () {
        this.isShow = !this.isShow;
      },
      sonEvent () {
        // this.$refs.son.sonEvent();
        console.log(this.$children)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>