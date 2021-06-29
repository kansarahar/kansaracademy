<template>
  <router-link 
    class="nav-item"
    v-bind:to=this.name.toLowerCase() 
    active-class="active" 
    v-on:mouseover="setActive(true)"
    v-on:mouseout="setActive(false)"
  >
    {{ this.name }}
  </router-link>
</template>


<script>
export default {
  name: "NavBarItem",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    setActive(bool) {
      this.active = bool;
    }
  }
};
</script>


<style lang="scss" scoped>
@import './src/assets/stylesheets/theme.scss';
a {
  text-decoration: none;
  color: var(--text-color);
}
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  color: var(--text-color);
}
.active {
  color: var(--alt-text-color);
  background-color: var(--active-tab-bg-color)
}
</style>
