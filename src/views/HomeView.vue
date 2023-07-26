<template>
  <v-card height="100%" class="pa-12">
    <h1 class="pb-10">Escoje tu curso</h1>
    <div class="d-flex flex-row justify-center align-center courses">
      <v-card
        v-for="(i, key) in courses"
        :key="key"
        class="mr-6 mb-5"
        max-width="368"
        elevation="20"
        style="border-radius: 50px"
        @click="handleClick(key)"
      >
        <img :src="i" class="w-100 h-100" style="border-radius: 50px" />
      </v-card>
    </div>
  </v-card>
</template>

<script>
import third from "@/assets/img/third.png";
import fourth from "@/assets/img/fourth.png";
import fifth from "@/assets/img/fifth.png";
export default {
  name: "HomeView",
  data: () => ({
    courses: [third, fourth, fifth],
  }),
  methods: {
    handleClick(key) {
      switch (key) {
        case 0:
          this.$router.push("lessons/third");
          break;
        case 1:
          this.$router.push("lessons/fourth");
          break;
        case 2:
          this.$router.push("lessons/fifth");
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
@media (max-width: 600px) {
  div > .courses {
    flex-direction: column !important;
  }
}
</style>