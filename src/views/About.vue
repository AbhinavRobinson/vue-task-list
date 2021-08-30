<template lang="pug">
.about My first vue app.
  br
  | !{'Made with '}
  span !{'&lt;3 '}
  | !{'by '}
  a.default(href="http://github.com/abhinavrobinson")
    | Abhinav Robinson
</template>

<style lang="less" scoped>
@import "../styles.less";
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
</style>
