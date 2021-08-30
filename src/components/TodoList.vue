<script setup lang="ts">
const items = [
  {
    task: "HELLO WORLD",
    time: "6:00PM",
  },
];
const isEmpty = items.length < 1;
</script>

<template>
  <div class="list" :class="isEmpty ? 'no-items' : ''">
    <!-- IF HAS NO ITEMS -->
    <h4 v-if="isEmpty">Add an item to track 🚀</h4>
    <!-- DEFAULT -->
    <ul>
      <li v-for="item in items" :key="item.task">
        <span>{{ item.task }}</span>
        <span>{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import "../styles.less";
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: calc(@width - (@padding * 4));
  margin: @padding 0;
  &.no-items {
    margin: @padding 0 calc(@padding / 4) 0;
  }
  h4 {
    padding: 0;
    margin: 0;
    color: @primary;
    text-align: center;
  }
}
</style>
