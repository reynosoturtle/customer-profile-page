<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import CustomerApi from "@/mixins/CustomerApi";

export default {
  name: "Name",
  components: {},
  mixins: [CustomerApi],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  // Lifecycle Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.fetchSampleUser();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="scss">
@import "assets/styles/tailwind.postcss";

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

