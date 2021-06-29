<template>
  <div id="navbar">
    <span id="logo">
      <span id="kansar">Kansar</span>
      <span id="academy">Academy</span>
    </span>
    <div id="nav-items">
      <NavBarItem name="Home"></NavBarItem>
      <NavBarItem name="About"></NavBarItem>
      <NavBarItem name="Projects"></NavBarItem>
    </div>
  </div>
</template>


<script>
import NavBarItem from './NavBarItem';
export default {
  name: "NavBarMain",
  components: { 
    NavBarItem
  },
};
</script>


<style lang="scss" scoped>
@import './src/assets/stylesheets/theme.scss';
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
#navbar {
  --navbar-height: 60px;
  --navbar-tab-width: 200px;
  --navbar-logo-padding: 5px 35px 10px 15px;
  --navbar-logo-fontsize: 42px;
  --navbar-tab-fontsize: 20px;
}
#navbar {
  display: flex;
  align-items: center;
  height: var(--navbar-height);
  background-color: var(--main-nav-color);
  font-family: 'Montserrat';
}
#logo {
  display: flex;
  align-items: center;
  padding: var(--navbar-logo-padding);
  font-size: var(--navbar-logo-fontsize);
}
#kansar {
  color: var(--text-color);
  margin: 0;
}
#academy {
  color: var(--alt-text-color);
  margin: 0;
}
#nav-items {
  display: flex;
  flex-grow: 1;
  height: 100%;
  font-size: var(--navbar-tab-fontsize);
}
</style>
