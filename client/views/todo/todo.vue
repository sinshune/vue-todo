<template>
  <section class="real-app">
    <input type="text"
            class="add-input"
           autofocus="autofocus"
           placeholder="接下来要做什么?"
           @keyup.enter="addTodo"
    >
    <Item v-for="(todo, index) in filteredTodos"
          :key="index"
          :todo="todo"
          @del="deleteTodo"
    />
    <Tabs :filter="filter"
          :todos="todos"
          @toggleFilter="toggleFilter"
          @clearAllCompleted = 'clearAllCompleted'
    />
  </section>
</template>

<script>
  import Item from './item.vue'
  import Tabs from './tabs.vue'

  let id = 0;

  export default {
    name: "todo",

    data () {
      return {
        todos: [],
        filter: 'all' // 显示过滤后的对应的todos内容(全部, 完成, 未完成)
      }
    },

    components: {
      Item,
      Tabs
    },

    methods: {
      // 添加一条记录
      addTodo (e) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        });
        e.target.value = '';
      },

      // 删除一条记录
      deleteTodo (id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id), 1);
      },

      // 切换 全部/未完成/完成 的状态
      toggleFilter (state) {
        this.filter = state;
      },

      // 删除所有已完成记录
      clearAllCompleted () {
        // 删除已完成记录 <=> 留下未完成记录, 所以通过filter把未完成的记录过滤下来就行
        this.todos = this.todos.filter(todo => !todo.completed);
      }
    },

    computed: {
      // 用于循环显示对应(all/actived/completed)的Item
      filteredTodos () {
        if (this.filter === 'all') {
          return this.todos;
        } else if (this.filter === 'active') {
          return this.todos.filter(todo => todo.completed);
        } else {
          return this.todos.filter(todo => !todo.completed);
        }
      }
    },

    // 组件内的导航钩子
    // beforeRouteEnter (to, from, next) {
    //   console.log('beforeRouteEnter');
    //   next();
    // },
    // beforeRouteUpdate (to, from, next) {
    //   console.log('beforeRouteUpdate');
    //   next();
    // },
    // beforeRouteLeave (to, from, next) {
    //   console.log('beforeRouteLeave');
    //   next();
    // }
  }
</script>

<style lang="stylus" scoped>
  .real-app{
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
  }
  .add-input{
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  }
</style>