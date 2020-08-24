<template>
  <div id="appContainer">
    <nav>
      <p>{{ commonData.parent }}</p>
      <button @click="changePState">改状态</button>
      <ul>
        <li v-for="(e, i) in menus" :key="'e' + i" @click="pageTo(e.path)">
          {{ e.title }}
        </li>
      </ul>
    </nav>
    <section>
      <router-view></router-view>
      <div id="frame"></div>
    </section>
  </div>
</template>

<script>
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
        {
          key: "simple-ui",
          title: "子应用",
          path: "/simple-ui/",
        },
      ],
    };
  },
  created() {
    console.log(this);
  },
  computed: {
    commonData() {
      return this.$store.state.commonData || "undefined";
    },
  },
  methods: {
    pageTo(e) {
      if (this.$route.path === e) {
        return;
      }
      this.$router.push(e);
    },
    changePState() {
      this.$store.commit("setCommonData", { parent: 1 });
    },
  },
};
</script>

<style>
#appContainer {
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
