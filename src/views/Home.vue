<template>
  <div class="home">
    <div class="container">
      <Header />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
@padding: 20px;
.home {
  display: grid;
  place-items: center;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(400px - @padding * 2);
    padding: @padding;
    border: 1px solid #e5e5e5;
    border-radius: calc(@padding / 2);
    transition-duration: 300ms;
    &:hover {
      box-shadow: 0 5px 10px rgb(235, 235, 235);
    }
  }
}
</style>
