import { createStore } from "vuex";

export const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    incrementCounter(state) {
      state.counter += 1;
    },
  },
});
