<template>
  <div class="son">
    <button @click="hide">隐藏/显示</button>
    <div class="div1"
          v-show="isShow"
    >
      see me if isShow
    </div>
  </div>
</template>

<script>
  export default {
    name: "son",

    props: {
      isShow: {
        type: Boolean,
        required: true,
        // default: '' // 如果类型是对象, default需要是一个对象, 然后return返回数据
        validator (value) {
          // 验证传入的值是否符合规则
        }
      }
    },

    methods: {
      hide () {
        // this.$parent.toggleHide();
        this.$emit('toggleHide');
      },

      sonEvent () {
        alert('这是子组件son中的方法');
      }
    }
  }
</script>

<style lang="stylus" scoped>
.div1 {
  width: 100px;
  height: 100px;
  background: #ffc1d2
}
</style>