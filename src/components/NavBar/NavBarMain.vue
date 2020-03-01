<template>
  <nav>
    <span id="logo">
      <h1 id="kansar">Kansar</h1>
      <h1 id="academy">Academy</h1>
    </span>
    <ul>
      <NavBarItem name="Home"></NavBarItem>
      <NavBarItem name="About"></NavBarItem>
      <NavBarItem name="Projects"></NavBarItem>
    </ul>
  </nav>
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
#logo {
  font-family: 'Montserrat';
  font-size: 32px;
  background-color: var(--main-nav-color);
  display: flex;
  padding: 5px 0 10px 20px;
  
}
#kansar {
  color: var(--text-color);
  margin: 0;
}
#academy {
  color: var(--alt-text-color);
  margin: 0;
}
</style>
