<template>
  <div class="grandson">
    孙子组件想要引用爷爷组件
  </div>
</template>

<script>
  export default {
    name: "grandson",

    inject: [ 'grandpa' ],

    mounted () {
      console.log(this.$parent.$parent.value);
      console.log(this.grandpa.value)
    }
  }
</script>

<style lang="stylus" scoped>

</style>