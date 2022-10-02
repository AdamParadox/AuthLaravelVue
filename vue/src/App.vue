<template>
 <div class="app-body">
  <TheNavigation v-if="!navigation"></TheNavigation>
  <router-view/>
 </div>
</template>

<script>
  import TheNavigation from './components/TheNavigation.vue';
  export default {
      components: {TheNavigation},
      data() {
        return {
          navigation: null
        }
      },
      methods: {
      checkRoute() {
        if(this.$route.name === 'login' || this.$route.name === 'register' ) {
          this.navigation = true;
          return;
        }
        this.navigation = false
      }
    },
     watch: {
      $route() {
        this.checkRoute();
      },
    },
  }
  </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2196F3;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2196F3;
}
a{
  color:#2196F3;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
}
</style>
