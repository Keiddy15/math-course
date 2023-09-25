<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
          v-for="lesson in lessons[0]"
          :key="lesson.id"
          cols="12"
          sm="6"
          md="4"
          lg="4"
        >
          <v-card
            elevation="4"
            :class="['lesson-card', { 'lesson-card-hover': lesson.hover }]"
            @mouseover="lesson.hover = true"
            @mouseout="lesson.hover = false"
            @click="lesson.goTo"
          >
            <v-img
              :src="lesson.image"
              alt="Imagen de la lección"
              class="lesson-card-image"
            ></v-img>
            <v-card-title class="lesson-card-title">{{
              lesson.title
            }}</v-card-title>
            <v-card-text style="height: 5rem">{{
              lesson.description.substring(0, 150) + "..."
            }}</v-card-text>
            <v-card-actions>
              <v-btn text class="learn-more"> Aprender más </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="lesson in lessons[1]"
          :key="lesson.id"
          cols="12"
          sm="6"
          md="4"
          lg="4"
        >
          <v-card
            elevation="4"
            :class="['lesson-card', { 'lesson-card-hover': lesson.hover }]"
            @mouseover="lesson.hover = true"
            @mouseout="lesson.hover = false"
            @click="lesson.goTo"
          >
            <v-img
              :src="lesson.image"
              alt="Imagen de la lección"
              class="lesson-card-image"
            ></v-img>
            <v-card-title class="lesson-card-title">{{
              lesson.title
            }}</v-card-title>
            <v-card-text style="height: 5rem">{{
              lesson.description.substring(0, 150) + "..."
            }}</v-card-text>
            <v-card-actions>
              <v-btn text class="learn-more"> Aprender más </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="lesson in lessons[2]"
          :key="lesson.id"
          cols="12"
          sm="6"
          md="4"
          lg="4"
        >
          <v-card
            elevation="4"
            :class="['lesson-card', { 'lesson-card-hover': lesson.hover }]"
            @mouseover="lesson.hover = true"
            @mouseout="lesson.hover = false"
            @click="lesson.goTo"
          >
            <v-img
              :src="lesson.image"
              alt="Imagen de la lección"
              class="lesson-card-image"
            ></v-img>
            <v-card-title class="lesson-card-title">{{
              lesson.title
            }}</v-card-title>
            <v-card-text style="height: 5rem">{{
              lesson.description.substring(0, 150) + "..."
            }}</v-card-text>
            <v-card-actions>
              <v-btn text class="learn-more"> Aprender más </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Lessons",
  data: () => ({
    lessons: [],
  }),
  created() {
    let course = this.$route.params.course;
    switch (course) {
      case "third":
        this.lessons = [
          [
            {
              id: 1,
              title: "La representación de los conjuntos",
              description:
                "La representación de los conjuntos no es más que una forma de mostrar cómo se escriben o cómo se pueden dibujar.",
              image: require("@/assets/img/third/lesson1.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/conjuntos");
              },
            },

            {
              id: 2,
              title: "Relación de orden de los números naturales",
              description:
                "La relación de orden en los números naturales implica que algunos números representan una cantidad mayor o menor que otros. Esto nos permite decir que existen números mayores, menores o iguales, y utilizamos símbolos para determinar cuál es mayor o menor según ciertas reglas.",
              image: require("@/assets/img/third/lesson2.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/orden-numeros-naturales");
              },
            },
            {
              id: 3,
              title: "Relación de pertenencia",
              description:
                "La relación de pertenencia asocia a un elemento con su conjunto. Si un elemento está en un conjunto, se dice que pertenece al conjunto y en este caso usamos el símbolo ∈ para mostrar esta relación.",
              image: require("@/assets/img/third/lesson3.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/relacion-de-pertenencia");
              },
            },
            {
              id: 4,
              title: "Sistema decimal",
              description:
                "Es una técnica muy utilizada en la numeración en que las cantidades utilizan como bases al numero diez y sus potencias.",
              image: require("@/assets/img/fourth/lesson15.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/sistema-decimal");
              },
            },
            {
              id: 5,
              title: "Sumas",
              description:
                "Sumar es juntar 2 o más cosas para saber cuántas hay en total.",
              image: require("@/assets/img/third/lesson5.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/sumas");
              },
            },
          ],
          [
            {
              id: 7,
              title: "Múltiplos de un número",
              description:
                "Son los números naturales que se logran obtener al momento de multiplicar un numero por todos los reales (se multiplican los números que están en la tabla hasta el infinito)",
              image: require("@/assets/img/third/lesson7.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/multiplos-numero");
              },
            },
            {
              id: 8,
              title: "Criterios de divisibilidad",
              description:
                "Son aquellas reglas que nos dicen que un número es divisible Por otro sin hacer una división ",
              image: require("@/assets/img/third/lesson8.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/criterios-divisibilidad");
              },
            },
            {
              id: 9,
              title: "Numeros primos y compuestos",
              description:
                "Los números primos son aquellos que SOLO son divisibles entre 1 y ellos mismos, es decir que al intentar dividirlos por cualquier otro número el resultado será un número no entero",
              image: require("@/assets/img/third/lesson9.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/numeros-primos-compuestos");
              },
            },
            {
              id: 10,
              title: "Multiplicación",
              description:
                "La multiplicación es una operación matemática que pertenece a las cuatro operaciones básicas o elementales de la matemática",
              image: require("@/assets/img/third/lesson10.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/multiplicacion");
              },
            },
            {
              id: 6,
              title: "Restas",
              description:
                " Es una operación que tiene como función quitar, reducir, separar, etc.",
              image: require("@/assets/img/third/lesson6.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/restas");
              },
            },
          ],
          [
            {
              id: 11,
              title: "Fracciones",
              description:
                "La fracción es aquella que representa el número de partes que cogemos o utilizamos de algo que está dividido en partes iguales",
              image: require("@/assets/img/third/lesson11.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/third/fracciones");
              },
            },
          ],
        ];
        break;

      case "fourth":
        this.lessons = [
          [
            {
              id: 1,
              title: "Lectura y escritura de números",
              description:
                "Para leer un número se separan sus cifras de derecha a izquierda de tres en tres. Luego se nombran de izquierda a derecha comenzando por las centenas, decenas y unidades correspondientes a la clase más elevada, continuando con la de menor valor y así sucesivamente hasta que termine con el orden de las unidades simples.ƒ",
              image: require("@/assets/img/fourth/lesson1.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/lectura-escritura-numeros");
              },
            },
            {
              id: 2,
              title: "Operaciones combinadas",
              description:
                "Son expresiones numéricas que pueden contener suma, resta, multiplicación, división",
              image: require("@/assets/img/fourth/lesson2.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/operaciones-combinadas");
              },
            },
            {
              id: 3,
              title: "Números naturales",
              description:
                "Los números naturales son los que utilizamos en la vida cotidiana para contar u ordenar y pertenecen al conjunto de números enteros positivos. Nosotros consideramos que es un número natural, aunque no todos los autores están de acuerdo.",
              image: require("@/assets/img/fifth/lesson9.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/numeros-naturales");
              },
            },
            {
              id: 6,
              title: "Sistema decimal",
              description:
                "El sistema decimal es un sistema numérico que se basa en la utilización de diez símbolos distintos para representar cantidades. Estos símbolos son los dígitos del 0 al 9 este Sistema cada posición es una potencia de 10",
              image: require("@/assets/img/fourth/lesson4.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/sistema-decimal");
              },
            },
            {
              id: 7,
              title: "Conjuntos",
              description:
                "En matemáticas, un conjunto es una colección de elementos considerada en sí misma como un objeto. Los elementos de un conjunto, pueden ser las siguientes: personas, números, colores, letras, figuras, etc.",
              image: require("@/assets/img/third/lesson1.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/conjuntos");
              },
            },
            
          ],
          [
            {
              id: 2,
              title: "Criterios de divisibilidad",
              description:
                "Son reglas matemáticas que nos permiten determinar si un número es divisible por otro sin necesidad de realizar la división completa. Esto es muy útil en matemáticas y pueden facilitar cálculos.",
              image: require("@/assets/img/third/lesson8.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/criterios-divisibilidad");
              },
            },
            {
              id: 3,
              title: "Fracciones",
              description:
                "Se llaman fracciones propias a aquellas que representan números menores que la unidad. Y ¿cómo son estas fracciones? Todas las fracciones que representan un número menor que la unidad se caracterizan por tener el numerador menor que el Fracciones impropias",
              image: require("@/assets/img/third/lesson11.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/fracciones");
              },
            },
            {
              id: 4,
              title: "Máximo común divisor",
              description:
                "El máximo común divisor (MCD), también conocido como máximo común divisor (MCD) o mayor divisor común (MDC), de dos o más números enteros es el número más grande que divide exactamente a todos ellos. En otras palabras, es el mayor número que es un divisor común de esos números.",
              image: require("@/assets/img/fourth/lesson9.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/maximo-comun-divisor");
              },
            },
            {
              id: 5,
              title: "Números compuestos",
              description:
                "Un número compuesto es un número entero mayor que 1 que tiene más de dos divisores positivos este si tiene más divisores que los número primos que solo tiene dos.",
              image: require("@/assets/img/fifth/lesson4.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/numeros-compuestos");
              },
            },
            {
              id: 6,
              title: "Mínimo común multiplo",
              description:
                "El mínimo común múltiplo (MCM) es un concepto matemático que se aplica principalmente en aritmética y álgebra. El MCM de dos o más números enteros positivos es el número más pequeño que es múltiplo de todos ellos. Para encontrar el MCM de dos números, hay varias formas de hacerlo. Una de las más comunes es mediante la descomposición en factores primos",
              image: require("@/assets/img/fourth/lesson11.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/minimo-comun-multiplo");
              },
            },
            {
              id: 7,
              title: "Números primos",
              description:
                "Los números primos son aquellos números enteros mayores que 1 que solo tienen dos divisores: 1 y sí mismos esta regla es obligatorio ya que si esto no se cumple estos número no se pueden llamar número primos.",
              image: require("@/assets/img/fifth/lesson4.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/numeros-primos");
              },
            },
            {
              id: 8,
              title: "Los multiplos",
              description:
                "Son aquellos números que obtenemos a multiplicarlos por el resto de los números naturales",
              image: require("@/assets/img/fourth/lesson13.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/multiplos");
              },
            },
            {
              id: 9,
              title: "Los divisores",
              description:
                "Un número es divisor de otro cuando lo divide exactamente.",
              image: require("@/assets/img/fourth/lesson14.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/divisores");
              },
            },
          ],
          [
            {
              id: 1,
              title: "Decimales",
              description:
                "Un número decimal es un número no entero, compuesto por una parte entera y una parte decimal, y se usan cuando queremos representar números que son más pequeños que la unidad.",
              image: require("@/assets/img/fourth/lesson15.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/decimales");
              },
            },
            {
              id: 1,
              title: "Fracciones",
              description:
                "Una fracción es un número, que se obtiene de dividir un entero en partes iguales. Por ejemplo cuando decimos una cuarta parte de la torta, estamos dividiendo la torta en cuatro partes y consideramos una de ellas.",
              image: require("@/assets/img/third/lesson11.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fourth/fracciones3");
              },
            },
          ],
        ];
        break;
      case "fifth":
        this.lessons = [
          [
            {
              id: 7,
              title: "Adición",
              description:
                "La adición y sustracción son operaciones aritméticas que están presentes en numerosos contextos y situaciones de la vida cotidiana infantil y adulta, particularmente los de compra y venta así como en los relacionados con medidas, sea del tiempo, de volumen, de peso, etc.",
              image: require("@/assets/img/fifth/lesson7.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/adicion");
              },
            },
            {
              id: 9,
              title: "Números naturales",
              description:
                "Los números naturales son los que utilizamos en la vida cotidiana para contar u ordenar y pertenecen al conjunto de números enteros positivos.",
              image: require("@/assets/img/fifth/lesson9.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/numeros-naturales");
              },
            },
            {
              id: 6,
              title: "Representación de conjuntos",
              description:
                "Se pueden representar entre llaves o por medio de diagramas de Venn - Euler",
              image: require("@/assets/img/fifth/lesson6.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/representacion-conjuntos");
              },
            },
          ],
          [
            {
              id: 2,
              title: "Múltiplos y divisores",
              description:
                "Los múltiplos son los números que se obtienen al multiplicar un número por otros números. Los divisores son los números que pueden dividir a otro número sin dejar residuo.",
              image: require("@/assets/img/fifth/lesson2.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/multiplos-divisores");
              },
            },
            {
              id: 3,
              title: "Criterios de divisibilidad",
              description:
                "Los criterios de divisibilidad son reglas que nos ayudan a saber si un número es divisible por otro sin necesidad de hacer la división completa.",
              image: require("@/assets/img/fifth/lesson3.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/criterios-divisibilidad");
              },
            },
            {
              id: 5,
              title: "Mínimo común múltiplo",
              description:
                "El mínimo común múltiplo es el número más pequeño que es múltiplo de dos o más números al mismo tiempo.",
              image: require("@/assets/img/fifth/lesson5.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/minimo-comun-multiplo");
              },
            },

            {
              id: 4,
              title: "Números primos y compuestos",
              description:
                "Los números primos son aquellos que solo pueden dividirse entre 1 y ellos mismos sin dejar residuo. - Los números compuestos son aquellos que tienen más divisores además de 1 y ellos mismos.",
              image: require("@/assets/img/fifth/lesson4.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/numeros-primos-compuestos");
              },
            },
            {
              id: 1,
              title: "Potenciación",
              description:
                "La potenciación es cuando multiplicamos un número por sí mismo varias veces.",
              image: require("@/assets/img/fifth/lesson1.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/potenciacion");
              },
            },
          ],
          [
            {
              id: 1,
              title: "División de un decimal entre un natural",
              description:
                "Hacer la división normal, como si no estuviese la coma del número decimal. En el momento en el que bajemos la primera cifra de la derecha de la coma tenemos que poner una coma en el cociente. Ejemplo: Vamos a dividir 360,57 entre 51. Empezamos dividiendo 360 entre 51.7",
              image: require("@/assets/img/fifth/lesson10.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/division-decimal-natural");
              },
            },
            {
              id: 2,
              title: "Fracciones y expresiones decimales",
              description:
                "Las fracciones en cuyo denominador hay un 10 o una potencia de 10 (es decir, un 1 seguido de ceros, como ocurre en 100, 1000, etc.) se denominan fracciones decimales",
              image: require("@/assets/img/fifth/lesson11.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/fracciones-expresion-decimal");
              },
            },
            {
              id: 3,
              title: "Orden de los números decimales",
              description:
                "Para ordenar dos o más números decimales, lo hacemos comparando los números en la misma posición del punto decimal. Por ejemplo, para encontrar el mayor de los siguientes números 12,48; 12,5 y 12,458 lo primero que hacemos es fijarnos en la parte entera del decimal",
              image: require("@/assets/img/fifth/lesson12.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/orden-numeros-decimales");
              },
            },
            {
              id: 4,
              title: "Polinomío aritmético",
              description:
                "Los polinomios aritméticos son expresiones que combinan las cuatro operaciones básicas. Aritmética significa operaciones que involucran números únicamente. El propósito de un polinomio aritmético simplificado es obtener el resultado de la expresión cuando se realizan todas las operaciones especificadas.",
              image: require("@/assets/img/fifth/lesson13.png"),
              hover: false,
              goTo: () => {
                this.$router.push("/lessons/fifth/polinomio-aritmetico");
              },
            },
          ],
        ];
      default:
        break;
    }
  },
};
</script>

<style scoped>
@import "vuetify/dist/vuetify.min.css";

.lesson-card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  min-height: 22rem;
  max-height: 22rem;
}

.lesson-card-image {
  border-radius: 8px;
  margin-bottom: 16px;
  max-width: 10rem;
  max-height: 7rem;
  height: 7rem;
  margin: 0 auto;
}

.lesson-card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  text-wrap: wrap;
  height: 5rem;
}

.lesson-card-hover {
  border-bottom: 2px solid #ff564f;
  margin-top: -5px;
  box-shadow: 0 11px 18px 0 rgba(0, 0, 0, 0.22);
}
.learn-more {
  color: #ff564f !important;
  position: relative;
  font-weight: 700;
}
main {
  background-image: url("../assets/img/fondo1.jpg");
  background-size: cover;
}
</style>