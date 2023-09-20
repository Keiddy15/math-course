<template>
  <v-main class="mt-0 pa-0" style="height: 100%">
    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="6" class="content">
          <div>
            <h1 class="display-2 mb-2">¡Hola, amigos matemáticos!</h1>
            <p class="subheading mb-4">
              ¡Bienvenidos a Math Buddy, donde los números se convierten en tus
              superamigos! 🎉
            </p>
          </div>
          <p class="headline mb-6">
            Aquí, explorarás un mundo lleno de diversión matemática: desde sumas
            hasta restas y más allá.
          </p>
          <p class="body-1 mb-6">
            ¡Prepárate para jugar, aprender y ser un as de las matemáticas
            mientras nos divertimos juntos! 🚀🧮
          </p>
          <p class="caption">Let's math!</p>
          <v-btn href="/courses" width="200px" class="mt-5" color="primary"
            >A ello</v-btn
          >
        </v-col>
        <v-col cols="6">
          <img
            :src="require('../assets/img/background-math.jpg')"
            style="width: 100%"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-parallax :src="require('../assets/img/parallax.jpg')" height="700px">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h1
          class="font-weight-bold mb-4 degradado-texto"
          style="font-size: 7rem"
        >
          NOSOTROS SOMOS MATH BUDY
        </h1>
        <h4 style="font-size: 2rem; color: white; text-align: center">
          ¡Bienvenidos a nuestro mundo mágico de números y fórmulas! Somos los increíbles MATH BUDDIES, tus compañeros matemáticos, y estamos aquí para hacer que aprender matemáticas sea divertido, emocionante y súper emocionante.<br>

¿Estás listo para sumergirte en el emocionante mundo de las matemáticas? ¡Porque nosotros sí! Desde sumar dulces gomitas hasta resolver misterios matemáticos en el mundo de los piratas, ¡nosotros hacemos que las matemáticas sean un juego emocionante y lleno de aventuras!
        </h4>
      </div>
    </v-parallax>
  </v-main>
</template>
  
  <script>
export default {
  name: "HomePage",
};
</script>
  
  <style scoped>
.subheading {
  color: #1976d2;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.degradado-texto {
  font-size: 48px;
  background: linear-gradient(
    to right,
    #ff9900,
    #3399ff,
    #33cc33
  ); /* Degradado de colores (naranja, azul y verde) */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* Hace que el texto sea transparente */
}
</style>
  