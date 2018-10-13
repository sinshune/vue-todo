<template>
  <div class="app">
    <p>
      <span v-text="msg"></span> || <span>{{msg}}</span>
    </p>
    <p>
      <span v-html="html"></span><span>vue2.x中无法使用{{sym}}这种写法</span>
      <span v-pre>{{{html}}}</span>
    </p>
    <p>
      <button @click="toggleShow">隐藏 / 显示</button>
      <br><br>
      <!--<span v-show="isShow">这是一个可以显示可以隐藏的span</span>-->
      <br>
      <span v-if="!isShow">这也是一个可以显示可以隐藏的span</span>
      <!--<span v-else>和上一个相反</span>-->
      <span v-else-if="flag==='show'">前面的都不成立, 且flag为show才显示</span>
    </p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(value, key, index) in obj" :key="key">{{index + ': ' + value}}</li>
    </ul>
    <p>
      <input type="text" v-model.number="text"> {{text}}
      <br><br>
      <input type="text" v-model.trim="text"> {{text}}
    </p>
    <div>
      <button @click="add">+1</button> <span v-once>{{num}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",

    data () {
      return {
        msg: 'hello world',
        html: '<b>adf</b>',
        sym: '{{{html}}}',
        isShow: true,
        flag: 'show',
        arr: [ 'tom', 'jarry', 'lisa' ],
        obj: {
          name: 'tom',
          age: 19,
          sex: '男'
        },
        text: '',
        num: 10
      }
    },

    methods: {
      toggleShow () {
        // this.isShow = !this.isShow;
        this.isShow = 'asdf';
      },

      add () {
        this.num++;
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>