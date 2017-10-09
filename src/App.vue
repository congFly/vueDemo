<template>
  <div id="app">
    <span class="parent">
      <router-link to="/parent">parent</router-link>
    </span>
    <span class="child2">
      <router-link to="/child2">child2</router-link>
    </span>
    <span class="child3">
      <router-link to="/child3">child3</router-link>
    </span>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
