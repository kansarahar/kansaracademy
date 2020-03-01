<template>
  <div id="app">
    <NavBarMain></NavBarMain>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style lang="scss">
@import '@/assets/stylesheets/theme.scss';
body {
  background-color: var(--main-bg-color);
  margin: 0;
}
</style>


<script>
import NavBarMain from '@/components/NavBar/NavBarMain.vue'
export default {
  name: "App",
  components: {
    NavBarMain
  }
}
</script>
