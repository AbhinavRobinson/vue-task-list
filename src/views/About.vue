<template>
  <div class="about">
    My first vue app.<br />
    Made with <span>&lt;3</span> by
    <a href="http://github.com/abhinavrobinson" class="default"
      >Abhinav Robinson</a
    >
  </div>
</template>

<style lang="less" scoped>
span {
  color: #42b983;
  font-weight: bold;
}
a {
  font-weight: bold;
  &:visited {
    color: #42b983;
  }
  &:active {
    color: #217750;
  }
}
</style>
