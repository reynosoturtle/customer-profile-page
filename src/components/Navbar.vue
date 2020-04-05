<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Beep Technical Test</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 text-teal-200 hover:text-white text-xl"
        @click="toggleMenu"
      >
        <i class="fas fa-bars" />
      </button>
    </div>
    <div
      v-if="screenIsLarge || displayMenu"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :class="$route.name === link ? 'text-white' : 'text-teal-200'"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white cursor-pointer mr-4"
        >{{link}}</a>
      </div>
      <div v-if="userProfile">
        <a
          v-for="(link, index) in authLinks.isAuthenticated"
          :key="index"
          :class="$route.name === link.name ? 'text-white font-bold' : 'text-teal-200'"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white cursor-pointer mr-4 last:mr-0"
          @click="pushTo(link.name)"
        >{{link.display}}</a>
      </div>
      <div v-else>
        <a
          v-for="(link, index) in authLinks.isNotAuthenticated"
          :key="index"
          :class="$route.name === link.name ? 'text-white font-bold' : 'text-teal-200'"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white cursor-pointer mr-4 last:mr-0"
          @click="pushTo(link.name)"
        >{{link.display}}</a>
      </div>
      
    </div>
  </nav>
</template>

<script>
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config.js";
import { navLinks, authLinks } from "@/configs/configs";
import { mapState } from 'vuex';

export default {
  name: "Navbar",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      navLinks,
      authLinks,
      displayMenu: false,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    ...mapState(['userProfile']),

    fullConfig() {
      return resolveConfig(tailwindConfig);
    },

    screenBreakpoints() {
      return this.fullConfig.theme.screens;
    },

    screenIsLarge() {
      const breakpoint = Number(this.screenBreakpoints.lg.replace("px", ""));
      return this.windowWidth >= breakpoint;
    }
  },
  watch: {
    screenIsLarge(newVal) {
      if (newVal) {
        this.displayMenu = true;
      } else {
        this.displayMenu = false;
      }
    }
  },

  // Lifecycle Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    toggleMenu() {
      this.displayMenu = !this.displayMenu;
    },

    pushTo(name) {
      if (this.$route.name !== name) this.$router.push({ name: name });
    }
  }
};
</script>

<style scoped>
</style>
