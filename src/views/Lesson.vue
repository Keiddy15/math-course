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
            <div
              v-for="lesson in lesson.subtopic"
              :key="lesson.title"
              class="mt-5"
            >
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
            video: "https://www.youtube.com/embed/KmcRMlv9_T",
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
        } else if (lesson == "orden-numeros-naturales") {
          this.lesson = {
            title: "Relación de orden de los números naturales",
            description: `La relación de orden de los números naturales es que existen algunos números naturales que representan mayor o menos cantidad que otros, entonces nosotros decimos que existen números mayores, menores o iguales y para saber cuál es mayor o menos tenemos algunos símbolos que tiene unjas reglas.`,
            video: "https://www.youtube.com/embed/hRJRsov4nAo",
            subtopic: [
              {
                subtitle: "Los diferentes signos para asignarle a cada",
                description: `
                            <p style="text-align: center"> > MAYOR QUE</p>
                            <p style="text-align: center"> = IGUAL QUE</p>
                            <p style="text-align: center"> < MENOR QUE</p>
                            Para nosotros saber cuándo un número es mayor o menos lo podemos observar con la recta numérica si este número está a  la derecha  de la recta numérica o si este número es menor está a la izquierda de la recta numérica.
                        `,
              },
            ],
          };
        } else if (lesson == "relacion-de-pertenencia") {
          this.lesson = {
            title: "Relación de pertenencia",
            description: `Cada elemento que pertenece al conjunto pertenece también al conjunto Cuando se da esta situación decimos que un conjunto está contenido en el otro, o que es un subconjunto del cada elemento que pertenece al conjunto pertenece también al conjunto Cuando se da esta situación decimos que un conjunto está contenido en el otro, o que es un subconjunto del otro.
            <p style="text-align: center;">
                Para indicar que un objeto es un elemento de un conjunto se utiliza el símbolo ∈. Por ejemplo, para el conjunto A = {1,2,3,4,5,6}, podemos escribir 1 ϵ A, 2 ϵ A, …, 6 ϵ A. Si un objeto no es un elemento del conjunto, lo indicaremos con el símbolo ∉.    
            </p>
            `,
            video: "https://www.youtube.com/embed/oSMi4Re9Jlg",
          };
        } else if (lesson == "sistema-decimal") {
          this.lesson = {
            title: "Sistema decimal",
            description: `Es una técnica muy utilizada en la numeración en que las cantidades utilizan como bases al numero diez y sus potencias.
            <p style="text-align: center;">
                El cero no tiene valor por sí mismo, pero este si maneja un valor posicional, por el lugar que este ocupa.
            </p>
            `,
            video: "https://www.youtube.com/embed/EDR7WT099nQ",
          };
        } else if (lesson == "sumas") {
          this.lesson = {
            title: "Sumas",
            description: `Llamamos suma a la acción de añadir, juntar o agregar elementos, cuando realizamos esta acción estamos uniendo cantidades o conjuntos y para ello siempre debe haber un mínimo de dos elementos.
            La humanidad ya hacía sumas antes de aprender a escribir o de tener un lenguaje. Se cree que muchas especies de animales también saben sumar cantidades pequeñas.
            `,
            video: "https://www.youtube.com/embed/br4Z-HZtIQQ",
          };
        } else if (lesson == "multiplos-numero") {
          this.lesson = {
            title: "Múltiplos de un número",
            description: `Son los números naturales que se logran obtener al momento de multiplicar un numero por todos los reales (se multiplican los números que están en la tabla hasta el infinito)
            Para que sirven
            Por ejemplo: Los múltiples de 2 son 
            <p style="text-align: center;">
            (2x1) ,2 (2x2) 4, (2x3) 6.,8,10 ,12,14,16,18,20……
            </p>
            `,
            video: "https://www.youtube.com/embed/j3IIM6yfMik",
          };
        } else if (lesson == "criterios-divisibilidad") {
          this.lesson = {
            title: "Criterios de divisibilidad",
            description: `Son aquellas reglas que nos dicen que un número es divisible Por otro sin hacer una división 
                Divisibilidad por 2: es cuando el número termina en cero o par 
                Divisibilidad por 3: es cuando las cifras de los números se suman y es múltiplo de 3 
                Divisibilidad por 5: es cuando el numero termina en 5 o en 0
                Divisibilidad por 9: es cuando la suma de las cifras es múltiplo de 9
                Divisibilidad por 10: es cuando termina en 0, si sin dos 0 es divisible por 100 y son tres 0 es divisible por 1000
            `,
            video: "https://www.youtube.com/embed/JO_SRpmojdM",
          };
        } else if (lesson == "numeros-primos-compuestos") {
          this.lesson = {
            title: "Numeros primos y compuestos",
            description: ``,
            video: "https://www.youtube.com/embed/vULSPSaVGy8",
            subtopic: [
              {
                subtitle: "Nùmeros primos",
                description: `Los números primos son aquellos que SOLO son divisibles entre 1 y ellos mismos, es decir que al intentar dividirlos por cualquier otro número el resultado será un número no entero
                Ejemplo:
                El numero 7, que solo lo podemos dividir por 1 y por 7, de lo contrario no obtendremos un numero entero como resultado`,
              },
              {
                subtitle: "Nùmeros compuesto",
                description: `
                Los números compuestos son aquellos que son divisibles por uno, ellos mismos y también por otros números, es decir, todos los números no primos
                Ejemplo: 
                El numero 4, que es divisible por 1, 2 y 4

                EJEMPLO:
                En los números del 1 al 100 los siguientes números son primos
                2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97
                Por lo tanto, el resto de números son compuestos`,
              },
            ],
          };
        } else if (lesson == "multiplicacion") {
          this.lesson = {
            title: "Multiplicación",
            description: `la multiplicación es una operación matemática que pertenece a las cuatro operaciones básicas o elementales de la matemática
consiste en hallar el resultado o producto de la 
sumatoria de un producto tantas veces como indique otro número.
por ejemplo: (5x3) resolver esta operación solo consiste en sumar (3) veces el primer número (5) así,
(5+5+5+5+5)=15 que es el resultado de la operación.
            `,
            video: "https://www.youtube.com/embed/YFtEaVw5k1A",
            subtopic: [
              {
                subtitle: "¿Cuáles son los términos de una multiplicación?",
                description: `
                <ul class="ml-15">
                    <li><strong>Factores:</strong> Los factores son los números que se multiplican. </p>
                    <li><strong>Producto:</strong> El producto es el resultado de la multiplicación. </p>
                    <li><strong>Multiplicando:</strong>El multiplicando es el factor que se debe sumar y que se puede encontrar arriba a la hora de realizar la operación. </p>
                    <li><strong>Multiplicador:</strong> El multiplicador es el número de veces que se debe sumar el multiplicando, este se encuentra abajo. </p>
                </ul>`,
              },
              {
                subtitle: "¿Cuáles son las propiedades de una multiplicación?",
                description: `
                Existen tres propiedades para la multiplicación.
                <ul class="ml-15">
                    <li><strong>Propiedad conmutativa:</strong> En la multiplicación también aplica la regla de los factores que, sin importar el orden, el producto siempre será el mismo 
Ejemplo:
<p style="text-align: center"> (3x7) = 21    (7x3) = 21    </p>
El resultado de 3 x 7 será igual que 7 x 3. Cambiar el orden de los factores no cambiara el producto.     
 </p>
                    <li><strong>Propiedad asociativa:</strong> Esta propiedad nos dice que el modo de agrupar los factores no cambiara el resultado de la operación.
Ejemplo:
<p style="text-align: center"> (4x5)x6 = 4x(5x6)</p>
<p style="text-align: center"> 20 x 6    =   4 x 30        </p>
    <p style="text-align: center">  120       =       120</p>
Como se ve en el ejemplo será el mismo resultado si multiplicamos 4 x 5 y después lo multiplicamos por 6, que si multiplicamos 5 x 6 y luego lo multiplicamos por 4.
 </p>
                    <li><strong>Propiedad distributiva:</strong>En esta propiedad la multiplicación de un numero por una suma es igual que la suma de las multiplicaciones de dicho número por cada uno de los sumandos.
 Ejemplo:
 <p style="text-align: center"> 2x(4+2) = 2x4+2x2 </p>
Según la propiedad distributiva 2x(4+2) será igual a 2x4 + 2x2
Veamos:
<p style="text-align: center"> 2x(4+2)= 2x6=12 </p>
    <p style="text-align: center"> 2x4 + 2x2= 8+4=12 </p>
 </p>
                </ul>`,
              },
              {
                subtitle: "Elemento neutro",
                description: `
                En la multiplicación existe un elemento neutro el cual es el numero 1 porque todo numero multiplicado por 1 dará el mismo número al igual que el 0 que cada número multiplicado por 0 dará como resultado 0.
Ejemplo:
<p style="text-align: center">1x3=3                 1x6=6</p>
    <p style="text-align: center">0x3=0                 0x7=0</p>

`,
              },
              {
                subtitle: "Multiplicar por 2 o 3 cifras",
                description: `Para multiplicar un número de dos cifras o tres cifras por otro número de dos cifras, primero, se multiplica por las unidades del segundo factor; después, por las decenas y el producto se escribe debajo del anterior, desplazándolo un lugar a la izquierda. Finalmente, se adicionan los productos. 
                Ejemplo
                <img src="https://i.ibb.co/q588FhC/multiplica.png" alt="multiplica" border="0">
                `,
              },
            ],
          };
        } else if (lesson == "restas") {
          this.lesson = {
            title: "Restas",
            description: `Es una operación que tiene como función quitar, reducir, Separar, etc.
            Ejemplo 
            <img src="https://i.ibb.co/JxJ1gW8/restas.png" alt="restas" border="0">
            Al número que se le sustrae o quita es llamado minuendo.
            El número que sustrae o quita es llamado sustraendo.
            El resultado es llamado resta o diferencia.
            `,
            video: "https://www.youtube.com/embed/42vjqtleG9E",
          };
        } else if (lesson == "fracciones") {
          this.lesson = {
            title: "Fracciones",
            description: `La fracción es aquella que representa el número de partes que cogemos o utilizamos de algo que está dividido en partes iguales
            `,
            video: "https://www.youtube.com/embed/c9cTIjBqFTw",
            subtopic: [
              {
                subtitle: "Fracciones equivalentes",
                description: `
                    Dos fracciones son equivalentes cuando estas representan la misma cantidad <br>
                    <img class="mt-5 mx-auto" width="300px" src="https://i.ibb.co/QM6JYr1/fraccionesequivalentes.jpg" alt="fraccionesequivalentes" border="0">
                `,
              },
              {
                subtitle: "Fracciones como parte de una unidad o un conjunto",
                description: `
                Las fracciones son expresiones de la forma , donde  y  son números enteros y  debe ser diferente a cero.  La expresión  es otra forma de representar la división , en la cual la cantidad  está dividiendo a la cantidad . 
                `,
              },
            ]
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
  