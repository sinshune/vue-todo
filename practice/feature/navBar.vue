<template>
  <div class="navBar">
    <ul>
      <slot name="nav-left"></slot>
      <slot name="nav-center"></slot>
      <slot name="nav-right"></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "navBar"
  }
</script>

<style lang="stylus" scoped>
  ul, li {
    margin: 0px;
    padding: 0px;
    list-style: none
  }

  ul {
    display: flex;
    padding: 10px;
    background: #f00;
    color: #fff;
    li {
      flex: 1;
      &:nth-child(2) {
        text-align: center;
      }
      &:nth-child(3) {
        text-align: right;
      }
    }
  }
</style>