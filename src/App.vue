<template>
  <div id="app">
    <template v-if="loading === false">
      <navbar :active-link="activeLink" />
      <router-view v-if="loading === false" />
    </template>
      <div v-else class="flex h-screen">
        <p class="text-green-500 text-center m-auto">
          <i class="fas fa-circle-notch fa-spin fa-5x"/>
          <br>
          Loading...
        </p>
      </div>
  </div>
</template>

<script>
import CustomerApi from "@/mixins/CustomerApi";
import { mapActions, mapState, mapMutations } from "vuex";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  mixins: [CustomerApi],
  props: {},
  data() {
    return {
      activeLink: "profile"
    };
  },
  computed: {
    ...mapState(["loading"])
  },
  watch: {},

  // Lifecycle Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.initialize();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    ...mapMutations(["setLoading"]),
    ...mapActions(["updateUserProfile"]),

    initialize() {
      this.setLoading(true);
      this.fetchSampleUser()
        .then(this.updateUserProfile)
        .finally(() => this.setLoading(false));
    }
  }
};
</script>

<style lang="scss">
@import "assets/styles/tailwind.postcss";

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

