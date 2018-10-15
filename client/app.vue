<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>

    <router-link to="/app">主页</router-link> <router-link to="/login">登录</router-link>
    <!-- 路由外链 -->
    <router-view></router-view>
    <!-- 路由外链 end -->
    <Footer></Footer>

    <!--<button @click="changeName">改名</button>-->
    <button @click="increment">+1</button>
    {{count}} {{fullName}}
  </div>
</template>

<script>
  import Header from './layout/header.vue'
  import Footer from './layout/footer.vue'

  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: "app",

    data () {
      return {
        i: 1
      }
    },

    components: {
      Header,
      Footer
    },

    computed: {
      ...mapState({
        count: (state) => state.count
      }),
      ...mapGetters(['fullName'])
    },

    methods: {
      ...mapMutations(['updateCount']),
      ...mapActions(['updateCountAsync']),

      increment () {
        this.updateCount(this.i++);
      }
    },

    mounted () {
      this.updateCountAsync({
        num: this.i,
        time: 1000
      })
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