<template>
  <div class="app">
    Name: {{name}}
    <br><br>
    <button @click="changeName">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "app",

    data () {
      return {
        firstName: 'Jingjing',
        lastName: 'Jiang',
        obj: {
          num: 19
        }
      }
    },

    computed: {
      // name () {
      //   return this.firstName + ' ' + this.lastName
      // }
      name: {
        get () {
          return this.firstName + ' ' + this.lastName;
        },
        set (name1, name2) { // 一般不要用
          return name1 + ' ' + name2;
        }
      }
    },

    watch: {
      firstName (newValue, oldValue) {
        console.log(newValue, oldValue);
      },
      lastName (newValue, oldValue) {
        console.log(newValue, oldValue);
      },
      // obj: {
      //   handler (newNum, oldNum) {
      //     console.log(this.obj.num);
      //   },
      //   deep: true // 开销较大
      // }
      'obj.num': {
        handler () {
          console.log(this.obj.num);
        }
      }
    },

    methods: {
      changeName () {
        this.firstName = 'tan';
        this.lastName = 'zisong';
        this.obj.num++;
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>