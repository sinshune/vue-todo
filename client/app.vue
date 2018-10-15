<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>

    <router-link to="/app">主页</router-link> <router-link to="/login">登录</router-link>
    <!-- 路由外链 -->
    <router-view></router-view>
    <!-- 路由外链 end -->
    <Footer></Footer>

    {{count}}
  </div>
</template>

<script>
  import Header from './layout/header.vue'
  import Footer from './layout/footer.vue'

  export default {
    name: "app",

    data () {
      return {
      }
    },

    components: {
      Header,
      Footer
    },

    mounted () {
      // console.log(this.$store);
      let i = 1;
      setInterval(() => {
        this.$store.commit('updateCount', i++);
      }, 1000)
    },

    computed: {
      count () {
        return this.$store.state.count;
      }
    }
  }
</script>

<style lang="stylus">
  #app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0

    #cover{
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      background-color #999
      opacity .9
      z-index -1
    }
  }
</style>