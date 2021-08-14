<template>
  <div class="bar">
    <header>Task Tracker</header>
    <button>Add Task</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  computed: {
    tasks: function () {
      return this.$store.state.tasks;
    },
  },
})
export default class Header extends Vue {}
</script>

<style lang="less" scoped>
@import "../styles.less";
.bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  header {
    font-weight: bold;
    font-size: larger;
  }
  button {
    background-color: white;
    border: 1px solid @dark;
    border-radius: @padding / 4;
    padding: @padding / 2;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition-duration: 150ms;
    &:hover {
      border: 1px solid @primary;
      background-color: @primary;
      color: white;
    }
    &:active {
      transform: translateY(2px) scale(0.98);
    }
  }
}
</style>
