<template>
  <v-main class="pt-15 pa-0" style="height: 100%">
    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="6" class="content">
          <div>
            <h1 class="display-2 mb-2" style="font-size: 3.4rem">
              ¡Hola, amigos matemáticos!
            </h1>
            <p class="subheading mb-4">
              ¡Bienvenidos a Math Buddy, donde los números se convierten en tus
              superamigos! 🎉
            </p>
          </div>
          <p class="headline mb-6" style="font-size: 1.5rem">
            Aquí, explorarás un mundo lleno de diversión matemática: desde sumas
            hasta restas y más allá.
          </p>
          <p class="body-1 mb-6" style="font-size: 1.2rem">
            ¡Prepárate para jugar, aprender y ser un as de las matemáticas
            mientras nos divertimos juntos! 🚀🧮
          </p>
          <p class="caption animated-text" style="font-size: 4rem">
            Let's math!
          </p>
          <a href="/courses" class="cta">
            <span>A Aprender</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </v-col>
        <v-col cols="6">
          <img
            src="https://i.ibb.co/jf9895R/mascota.png"
            alt="mascota"
            border="0"
            style="width: 80%"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-img class="mt-8" src="../assets/img/home-background.png"></v-img>

    <div class="container-text">
      <h1>Bienvenidos a nuestro mundo mágico de números y fórmulas!</h1>
      <v-row>
        <v-col cols="6">
          <img
            src="https://i.ibb.co/k1rYkpD/background-math.jpg"
            alt="mascota"
            border="0"
          />
        </v-col>
        <v-col>
          <p class="p1">
            Somos los increíbles MATH BUDDIES, tus compañeros matemáticos, y
            estamos aquí para hacer que aprender matemáticas sea divertido,
            emocionante y súper emocionante.
          </p>
          <p class="p2">
            ¿Estás listo para sumergirte en el emocionante mundo de las
            matemáticas? ¡Porque nosotros sí! Desde sumar dulces gomitas hasta
            resolver misterios matemáticos en el mundo de los piratas, ¡nosotros
            hacemos que las matemáticas sean un juego emocionante y lleno de
            aventuras!
          </p>
        </v-col>
      </v-row>
    </div>
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
  font-size: 2rem;
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
  color: transparent;
  text-align: center;
}
@keyframes gradientAnimation {
  0% {
    background: linear-gradient(45deg, #33cc33, #fddb92);
    -webkit-background-clip: text;
    color: transparent;
    transform: translateY(0);
  }
  50% {
    background: linear-gradient(45deg, #3399ff, #ff5733);
    -webkit-background-clip: text;
    color: transparent;
    transform: translateY(-5px);
  }
  100% {
    background: linear-gradient(45deg, #3399ff, #fddb92);
    -webkit-background-clip: text;
    color: transparent;
    transform: translateY(0);
  }
}
.animated-text {
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(
    to left,
    #33cc33,
    #3399ff,
    #56c7a7,
    
    
  ); /* Degradado de colores (naranja, azul y verde) */
  -webkit-background-clip: text;
  color: transparent;
  animation: gradientAnimation 2s linear infinite;
}

a {
  text-decoration: none;
  color: inherit;
}

.cta {
  position: relative;
  margin-top: 10px;
  padding: 19px 22px;
  transition: all 0.2s ease;
}
.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: #3e94e9;
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta span {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
}
.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #111;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
.cta:hover:before {
  width: 100%;
  background: #5bcdc0;
}
.cta:hover svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.96);
}

.container-text {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.container-text > h1 {
  color: #3e94e9;
  text-align: center;
  font-size: 4rem;
}

.p2 {
  color: #33cc33 !important;
  font-size: 2rem;
  line-height: 3.3rem;
}
.container-text:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}
.p1 {
  color: #ff9900 !important;
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
main {
  background-image: url("../assets/img/back3.jpg");
  background-size: cover;
  height: 100%;
}
</style>
  