<template>
  <v-container class="mt-9">
    <h1
      style="
        text-align: center;
        font-weight: 900;
        color: #1d5d9b;
        font-size: 4rem;
      "
      class="mb-4"
    >
      JUEGOS MATEMÁTICOS
    </h1>
    <v-row class="mx-0">
      <v-col
        v-for="(game, index) in games"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="mb-5"
      >
        <v-card class="game-card" elevation="0" @click="game.goTo">
          <div style="text-align: center">
            <img :src="game.img" style="height: 18rem" />
          </div>
          <v-card-title class="game-title mx-auto" style="text-align: center">{{
            game.name
          }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  name: "Games",
  data() {
    return {
      games: [
        {
          name: "Calculadora",
          img: require("../assets/img/calculator.png"),
          goTo: () => {
            this.$router.push("/game/calculator")
          }
        },
        {
          name: "Operaciones",
          img: require("../assets/img/operations.png"),
          goTo: () => {
            this.$router.push("/game/operations")
          }
        },
        {
          name: "Suma",
          img: require("../assets/img/sum.png"),
          goTo: () => {
            this.$router.push("/game/sum")
          }
        },
        {
          name: "Matemâtica básica",
          img: require("../assets/img/basicmath.png"),
          goTo: () => {
            this.$router.push("/game/basicmath")
          }
        },
        {
          name: "Crucigrama",
          img: require("../assets/img/crucigrama.png"),
          goTo: () => {
            this.$router.push("/game/crucigrama")
          }
        },
        {
          name: "Números Naturales",
          img: require("../assets/img/numerosnaturales.png"),
          goTo: () => {
            this.$router.push("/game/naturalnumbers")
          }
        },
        {
          name: "Operaciones Matemáticas",
          img: require("../assets/img/operations.png"),
          goTo: () => {
            this.$router.push("/game/mathoperations")
          }
        },
        {
          name: "Fracciones Equivalentes",
          img: require("../assets/img/fracciones.png"),
          goTo: () => {
            this.$router.push("/game/fracciones")
          }
        },
        {
          name: "División y Multiplicación",
          img: require("../assets/img/formula.png"),
          goTo: () => {
            this.$router.push("/game/divisionmultiplicacion")
          },
          
        },
        {
          name: "Crucigrama Matemático",
          img: require("../assets/img/math-crucigram.png"),
          goTo: () => {
            this.$router.push("/game/mathcrucigram")
          }
        },
        {
          name: "Quiz de Fracciones",
          img: require("../assets/img/quiz-fracciones.png"),
          goTo: () => {
            this.$router.push("/game/quizfracciones")
          }
        },
        {
          name: "Multiplicación de 2 y 3 cifras",
          img: require("../assets/img/multi2y3.png"),
          goTo: () => {
            this.$router.push("/game/multiplication2_3")
          }
        },
        {
          name: "Divisiones Exactas",
          img: require("../assets/img/divisionesexactas.png"),
          goTo: () => {
            this.$router.push("/game/divisionesexactas")
          }
        },
        {
          name: "Términos Matemáticos",
          img: require("../assets/img/concepto.png"),
          goTo: () => {
            this.$router.push("/game/terminosmatematicos")
          }
        },
        {
          name: "Matemáticas",
          img: require("../assets/img/math.png"),
          goTo: () => {
            this.$router.push("/game/math")
          }
        },
        {
          name: "Múltiplos y Divisores",
          img: require("../assets/img/learning.png"),
          goTo: () => {
            this.$router.push("/game/multiplosdivisores")
          }
        },
      ],
    };
  },
  methods: {
    openGame(game) {
      // Implement logic to open the game
      // You can use Vue Router to navigate to a specific game component
      console.log(`Opening ${game.name}`);
    },
  },
};
</script>
  
  <style scoped>
/* Add scoped styles here */
.game-card {
  cursor: pointer;
  margin: 10px;
  transition: transform 0.2s;
}

.game-card:hover {
  transform: scale(1.05);
}

.game-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.game-description {
  font-size: 1rem;
  color: #666;
}
</style>
  