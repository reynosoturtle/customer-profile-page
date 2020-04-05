<template>
  <div class="flex flex-wrap content-start my-4">
    <!-- Navigation -->
    <ul class="flex border-b w-full">
      <li
        v-for="(link, index) in links"
        :key="index"
        :class="{'-mb-px': activeLink === link}"
        class="mr-1"
        @click="() => activeLink = link"
      >
        <span
          :class="activeLink === link ? 'nav-item-active' : 'nav-item'"
          class="capitalize"
        >{{link}}</span>
      </li>
    </ul>
    <!-- End of navigation -->
    <!-- Promotion cards -->
    <div v-for="(promotion, index) in promotions" :key="index">
      <div
        v-if="activeLink === 'all' || activeLink === promotion.type"
        class="w-full p-4 bg-white shadow-sm rounded-lg mt-4 border border-gray-300 hover:border-teal-500 hover:shadow-lg"
      >
        <h1 class="text-gray-900 font-bold text-2xl">{{getPromotionString(promotion)}}</h1>
        <p class="mt-2 text-gray-600 text-sm">Quantity: {{promotion.quantity}}</p>
        <p
          v-if="promotion.type === 'discount'"
          class="mt-2 text-gray-600 text-sm"
        >Here is a discount on your next purchase! We appreciate your continued support and loyalty all these while and here's our way of showing it. 🥳</p>
        <p
          v-else
          class="mt-2 text-gray-600 text-sm"
        >We love having you around so much that we're going to bribe you. Have your next purchase, on us! We both know you deserve it. 😏</p>
        <div class="flex item-center justify-between mt-3">
          <div class="flex flex-wrap items-start content-center">
            <template v-if="promotion.type === 'discount'">
              <h1 class="pill">Discount</h1>
            </template>
            <template v-else>
              <h1 class="pill">Redeem</h1>
            </template>
          </div>
          <button class="teal-button">Use now</button>
        </div>
      </div>
    </div>
    <!-- End of promotion cards -->
  </div>
</template>

<script>
export default {
  name: "Promotion",
  components: {},
  mixins: [],
  props: {
    promotions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeLink: "all"
    };
  },
  computed: {
    links() {
      return [
        "all",
        ...new Set(this.promotions.map(promotion => promotion.type))
      ];
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    getTwoDecimalFloat(float) {
      // Uncertain of how much processing the float needs, so I defaulted to a basic one
      return float.toFixed(2);
    },

    getPromotionString(promotion) {
      const { type, discount, title } = promotion;
      switch (type) {
        case "discount":
          var processedFloat = this.getTwoDecimalFloat(discount);
          return `Enjoy $${processedFloat} off`;
        case "redeem":
          return `Free ${title}`;
      }
    }
  }
};
</script>

<style scoped>
</style>
