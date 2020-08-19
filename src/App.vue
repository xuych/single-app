<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav>
      <ul>
        <li v-for="(e, i) in menus" :key="'e' + i" @click="pageTo(e.path)">
          {{ e.title }}
        </li>
      </ul>
    </nav>
    <section id="frame">
      <router-view v-show="$route.name"></router-view>
      <router-view v-show="!$route.name" id="iframe"></router-view>
    </section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      menus: [
        {
          key: "Home",
          title: "主页",
          path: "/",
        },
        {
          key: "Adout",
          title: "介绍",
          path: "/about",
        },
      ],
    };
  },
  methods: {
    pageTo(e) {
      if (this.$route.path === e) {
        return;
      }
      this.$router.push(e);
    },
  },
  // components: {
  // HelloWorld
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  width: 100vw;
  height: 100vh;
}
nav {
  width: 150px;
}
section {
  flex: 1;
}
</style>
