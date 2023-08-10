<template>
  <v-app-bar color="teal-darken-2" density="compact" style="height: 60px">
    <template v-slot:prepend>
      <v-btn href="/">
        <img :src="logo" style="width: 200px; height: 50px" />
      </v-btn>
    </template>
    <template v-slot:append>
      <v-btn href="/">HOME</v-btn>
      <v-btn href="/games">Juegos</v-btn>
      <v-btn href="/contact">Contacto</v-btn>
    </template>
  </v-app-bar>
</template>ƒ

<script>
import logo from "@/assets/img/logo.png";

export default {
  name: "AppBar",

  data: () => ({
    logo: logo,
  }),
};
</script>