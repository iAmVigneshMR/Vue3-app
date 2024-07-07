<template>
  {{ counter }}
  <v-btn density="compact" @click="store.commit('incrementCounter')">Increment</v-btn>
</template>

<!-- Using Vue 3 Composition Api -->
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const counter = computed(() => store.state.counter)
</script>

<!-- Without Using Vue 3 Composition Api -->
<!-- <script>
import { mapState } from "vuex";
export default {
  name: 'HelloWorld',
  computed: mapState({
    counter: 'counter',
  }),
  props: {
    msg: String
  }
}
</script> -->
