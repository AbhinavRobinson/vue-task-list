<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="less">
@import "./styles.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @dark;
}
#nav {
  padding: @padding * 2;
  a {
    font-weight: bold;
    color: @dark;

    &.router-link-exact-active {
      color: @primary;
    }
  }
}
</style>
