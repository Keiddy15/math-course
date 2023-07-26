<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/navigation/AppBar";
//import Footer from "@/components/Footer";
export default {
  name: "AppLayout",
  components: {
    AppBar,
    //  Footer,
  },
};
</script>

<style>
</style>