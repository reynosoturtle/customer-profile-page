<template>
    <div class="max-w-4xl flex items-center h-auto lg:h-full flex-wrap mx-auto my-6">
      <div class="w-full lg:w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
        <div class="p-4 md:p-12">
          <h1 class="text-3xl font-bold pt-8 lg:pt-0"> 
            <i class="fas fa-user-circle text-teal-700 mr-2" />
            {{userProfile.name}}
          </h1>
          <div class="divider" />
          <!-- <p class="mt-4 text-center teal-button">
            <i class="fas fa-edit mr-4" />
            Edit profile
          </p> -->
          <p class="mt-4">
            <i class="fas fa-envelope text-teal-700 mr-4" />
            {{userProfile.email}}
          </p>
          <p class="mt-4">
            <i class="fas fa-phone-alt text-teal-700 mr-4" />
            +65 8268 0511
          </p>
          <p class="mt-4 text-sm">Welcome to your profile! In here, you can view and use your accumulated promotions, edit your profile information and more!</p>
          <promotions :promotions="userProfile.promotions" />
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Promotions from "@/components/Promotions";

export default {
  name: "Profile",
  components: {
    Promotions
  },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["userProfile"])
  },
  watch: {},

  // Lifecycle Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
};
</script>

<style scoped>
</style>
