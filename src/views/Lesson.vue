<template>
  <v-app>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
        style="flex-direction: column; margin-top: 2rem"
        class="mx-16"
      >
        <v-col cols="12">
          <div class="lesson-content">
            <h1 class="display-3 text-center mb-4" style="font-size: 2rem">
              ¡Explora la Aventura del Conocimiento!
            </h1>
            <p class="text-h6">
              ¡Hola a todos! En esta emocionante lección, vamos a explorar el
              fascinante mundo de las matemáticas. Acompáñanos en este viaje
              lleno de descubrimientos y aprendizaje.
            </p>
            <v-divider class="my-7" style="border: 5px solid"></v-divider>
            <h2 class="mt-5 mb-2" style="color: #3b60e4; font-size: 2rem">
              {{ lesson.title }}
            </h2>
            <iframe
              width="100%"
              height="315"
              :src="lesson.video"
              frameborder="0"
              allowfullscreen
              class="mb-5"
            ></iframe>
            <p
              v-html="lesson.description.replace(/\n/g, '<br>')"
              style="font-size: 1.5rem; text-align: justify"
            ></p>
            <div v-for="lesson in lesson.subtopic" :key="lesson.title">
              <h2 style="text-align: justify">{{ lesson.subtitle }}</h2>
              <p
                style="text-align: justify; font-size: 1.5rem"
                v-html="lesson.description"
              ></p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
  
  <script>
export default {
  name: "LessonPage",
  data: () => ({
    lesson: {},
  }),
  created() {
    let course = this.$route.params.course;
    let lesson = this.$route.params.lesson;
    switch (course) {
      case "third":
        if (lesson == "conjuntos") {
          this.lesson = {
            title: "La representación de los conjuntos",
            description: `La representación de los conjuntos no es más que una forma de mostrar cómo se escriben o cómo se pueden dibujar.
            Hay tres formas de representar los conjuntos, por medio de diagramas de Venn, por extensión y por comprensión.
            Imagina que tienes una bolsa en la que hay diferentes frutas. Entonces, al traducirlo como un conjunto se vería como lo que representa todas las  frutas. El círculo sería la bolsa y lo que se encuentra adentro, en este caso cada una de las frutas (manzana, banano, naranja) serían los elementos que forman el conjunto de las frutas.
            
            `,
            video: "https://www.youtube.com/watch?v=KmcRMlv9_T4&list=PLeySRPnY35dHACeGz_7oiU5Wo11AUt964",
            subtopic: [
              {
                subtitle: "Por extensión:",
                description: `Es una representación escrita de los conjuntos y se utilizan las llaves para hacerlo. Por ejemplo:
               <p style="text-align: center" class="my-5"> A={Manzana, Mora, Fresa, Sandía, Banano, Naranja} </p>
                Básicamente, dice lo mismo que en el ejemplo que utilizamos en el Diagrama de Ven, solo que está de forma escrita:    es la representación de todas las frutas. Las llaves cumplirían el papel bolsa donde están las frutas.  Y la Manzana, Banano, Naranja serían cada uno de los elementos que están conformando el conjunto.
                `,
              },
              {
                subtitle: "Por comprensión:",
                description: `Es otra forma de representar los conjuntos de manera escrita y vas a encontrar algo como esto 
               <p style="text-align: center" class="my-5"> A={x | x es una fruta} </p>
                Mejor dicho, está expresión: 
                <p style="text-align: center" class="my-5"> A={Manzana, Mora, Fresa, Sandía, Banano, Naranja} </p>
                Es lo mismo, que tener esta
                <p style="text-align: center" class="my-5"> A={x | x es una fruta} </p>
                `,
              },
            ],
          };
        }
        break;
        this.lessons = [
          [
            {
              id: 7,
              title: "Adicción",
              description:
                "La adición y sustracción son operaciones aritméticas que están presentes en numerosos contextos y situaciones de la vida cotidiana infantil y adulta, particularmente los de compra y venta así como en los relacionados con medidas, sea del tiempo, de volumen, de peso, etc.",
              image: require("@/assets/img/fifth/lesson7.png"),
              hover: false,
            },
            {
              id: 8,
              title: "Multiplicación Y División números naturales",
              description:
                "Multiplicar dos números naturales consiste en sumar uno de los factores consigo mismo tantas veces como indica el otro factor. La división es la operación Matemática que nos permite con mayor exactitud averiguar cuántas veces una cantidad está contenida en otra.",
              image: require("@/assets/img/fifth/lesson8.png"),
              hover: false,
            },
            {
              id: 9,
              title: "Números naturales",
              description:
                "Los números naturales son los que utilizamos en la vida cotidiana para contar u ordenar y pertenecen al conjunto de números enteros positivos.",
              image: require("@/assets/img/fifth/lesson9.png"),
              hover: false,
            },
            {
              id: 6,
              title: "Representación de conjuntos",
              description:
                "Se pueden representar entre llaves o por medio de diagramas de Venn - Euler",
              image: require("@/assets/img/fifth/lesson6.png"),
              hover: false,
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
.lesson-content {
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.lesson-video {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
  