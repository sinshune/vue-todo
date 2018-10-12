<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} item left</span>

    <span class="tabs">
      <span v-for="(state, index) in states"
            :key="index"
            :class="[state, filter === state ? 'actived' : '']"
            @click="toggleFilter(state)"
      >{{state}}</span>
    </span>

    <span class="clear" @click="clearAllCompleted">Clear completed</span>
  </div>
</template>

<script>
  export default {
    name: "tabs",

    data () {
      return {
        // 状态: 全部, 未完成, 完成
        states: ['all', 'active', 'completed']
      }
    },

    props: {
      todos: {
        type: Array,
        required: true
      },

      // 显示过滤后的对应的todos内容(全部, 完成, 未完成)
      filter: {
        type: String,
        required: true
      }
    },

    methods: {
      // 切换完成状态
      toggleFilter (state) {
        this.$emit('toggleFilter', state);
      },

      // 清除所有已完成任务
      clearAllCompleted () {
        this.$emit('clearAllCompleted');
      }
    },

    computed: {
      unFinishedTodoLength () {
        // let count = 0;
        // 复习一下数组遍历的方法
        // for (let i=0 ; i<this.todos.length; i++) {
        //   if (!this.todos[i].completed) {
        //     count++;
        //   }
        // }
        // return count;
        // element, index
        // filter()方法,接收一个回调函数作为参数, 回调函数的三个参数分别为数组元素, 下标, 数组本身, filter()返回一个新数组, 数组元素为原数组过滤后的元素
        return this.todos.filter((todo, index) => !todo.completed).length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .helper{
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #fff
    font-size 14px
    font-smoothing: antialiased
  }
  .left, .clear, .tabs{
    padding 0 10px
    box-sizing border-box
  }
  .left, .clear{
    width 150px
  }
  .left{
    text-align left
  }
  .clear{
    text-align right
    cursor pointer
  }
  .tabs{
    width 200px
    display flex
    justify-content space-around
    * {
      display inline-block
      padding 0 10px
      cursor pointer
      border 1px solid rgba(175,47,47,0)
      &.actived{
        border-color rgba(175,47,47,0.4)
        border-radius 5px
      }
    }
  }
</style>