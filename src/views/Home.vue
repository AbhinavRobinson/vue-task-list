<script lang="ts" setup>
import Header from "../components/Header.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
  <div class="home">
    <div class="container">
      <Header />
      <TodoList />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../styles.less";
.home {
  display: grid;
  place-items: center;
  .container {
    background-color: @light;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(@width - @padding * 2);
    padding: @padding;
    border: 1px solid rgba(@dark, 0.15);
    border-radius: calc(@padding / 2);
    transition-duration: 300ms;
    &:hover {
      box-shadow: 0 5px 10px rgba(@dark, 0.1);
    }
  }
}
</style>
