<template>
  <li 
    class="nav-item" 
    v-bind:class="{ active: this.active }"
    v-on:mouseover="setActive(true)"
    v-on:mouseout="setActive(false)">
    {{ this.name }}
  </li>
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
      name: this.name,
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
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.active {
  color: red;
}
</style>
