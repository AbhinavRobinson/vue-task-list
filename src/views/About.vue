<template>
  <div class="about">
    My first vue app.<br />Made with <span>&lt;3</span> by
    <a class="default" href="http://github.com/abhinavrobinson"
      >Abhinav Robinson</a
    >
  </div>
</template>

<style lang="less" scoped>
@import "../styles.less";
.about {
  span {
    color: @primary;
    font-weight: bold;
  }
  a {
    font-weight: bold;
    &:visited {
      color: @primary;
    }
    &:active {
      color: @primary-dark;
    }
  }
}
</style>
