<template>
  <div class="nav">
      <router-link to="/">Hello World</router-link>
      <router-link to="/about">About</router-link>
    </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  display: flex;
  justify-content: space-around;
}
</style>
