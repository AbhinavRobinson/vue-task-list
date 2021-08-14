import { createStore } from "vuex";

export default createStore({
  state: {
    taskCount: 0,
    tasks: [{ title: "INITIAL", time: "8:00PM" }] as {
      [key: string]: string;
    }[],
  },
  mutations: {
    addTask(state, task: string) {
      state.tasks.push({ title: task, time: "8:00PM" });
      state.taskCount++;
    },
  },
  actions: {},
  modules: {},
});
