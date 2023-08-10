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
            ],
          };
        }
        break;
      case "fourth":
        if (lesson == "lectura-escritura-numeros") {
          this.lesson = {
            title: "Lectura y escritura de nùmeros",
            description: `Lo primero que realizamos es separar las cifras de tres en tres empezando por la derecha.
            Leemos de izquierda a derecha como si fueran número de tres cifras  y la vamos añadiendo millón mil etc.
            `,
            video: "https://www.youtube.com/embed/YiEoNX3MIsc",
          };
        } else if (lesson == "operaciones-combinadas") {
          this.lesson = {
            title: "Operaciones combinadas",
            description: `Son expresiones numéricas que pueden contener suma, resta , multiplicación, división. Ejemplo
            <p style="text-align: center;">
                    12/4*5-8+2
            </p>
            <p style="text-align: center;">
                    2-1+5
            </p>
            `,
            video: "https://www.youtube.com/embed/w016sdtyv1wc",
          };
        } else if (lesson == "numeros-naturales") {
          this.lesson = {
            title: "Nùmeros naturales",
            description: `Para negociar y ordenar cosas, el hombre tuvo la necesidad de representar las cantidades de lo que tenía para saber con qué contaba exactamente. De ahí surgió la necesidad de crear símbolos que representaran esas cantidades.
            Por ejemplo, si alguien sabía cuántas gallinas tenía, podría establecer del mismo modo la cantidad de días que podría alimentar a su familia.
            A partir de esta necesidad el hombre crea lo que hoy conocemos como números naturales. Estos son los primeros que surgen en las distintas civilizaciones debido a que contar y ordenar elementos son las tareas más elementales en el tratamiento de las cantidades.
            `,
            video: "https://www.youtube.com/embed/uqCO15pKGKo",
            subtopic: [
              {
                subtitle: "Sustracción de número naturales",
                description: `Es aquella operación que quita la cantidad del número menor al número mayor está operación su resultado puede ser un número que no sea natural.`,
              },
              {
                subtitle: "Adicción de número naturales",
                description: `La adición de los números naturales nos da de resultados un mismo número natural está operación trata en reunir varias cantidades y convertirla en una sola.`,
              },
              {
                subtitle: "Orden de número naturales",
                description: `Para el orden de los número naturales utilizamos unos símbolo que estos nos indican en la recta  que número es mayor o menor.
                            <p style="text-align: center"> > MAYOR QUE</p>
                            <p style="text-align: center"> = IGUAL QUE</p>
                            <p style="text-align: center"> < MENOR QUE</p>
                `,
              },
              {
                subtitle: "Multiplicación de números naturales",
                description: `Está operación lógica se trata en sumar  uno de los factores consigo mismo antes veces que indique el otro factor.`,
              },
              {
                subtitle: "División de números naturales",
                description: `Es una operación de descomposición que consiste en averiguar cuántas veces un número (el divisor) está contenido en otro número (el dividendo).`,
              },
            ],
          };
        } else if (lesson == "sistema-decimal") {
          this.lesson = {
            title: "Sistema decimal",
            description: `El sistema decimal es un sistema numérico que se basa en la utilización de diez símbolos distintos para representar cantidades. Estos símbolos son los dígitos del 0 al 9 este Sistema cada posición es una potencia de 10
            `,
            video: "https://www.youtube.com/embed/EDR7WT099nQ",
          };
        } else if (lesson == "conjuntos") {
          this.lesson = {
            title: "Conjuntos",
            description: `Antes de que el hombre entendiera el concepto de número, debió comprender de dónde salían y qué representaban.  Por lo tanto, la idea de número sigue a la comprensión de los conjuntos.  ¿Has coleccionado fichas, juguetes o láminas para un álbum?  Imagina que los conjuntos son exactamente eso, una colección de objetos que pueden clasificarse gracias a las características que tienen común (fichas, láminas, etc).`,
            video: "https://www.youtube.com/embed/KmcRMlv9_T4",
            subtopic: [
              {
                subtitle: "La unión o intersección de Conjuntos",
                description: `Es una operación matemática que combina todos los elementos únicos de dos o más conjuntos en un nuevo conjunto.`,
              },
              {
                subtitle: "Pertenencia de Conjuntos",
                description: `La pertenencia de un elemento a un conjunto es una relación fundamental que se utiliza para describir cómo los elementos están agrupados en conjuntos. Los símbolo para  expresar esta relación es el símbolo “∈” (perteneciente a) o “∉” (no perteneciente a).`,
              },
              {
                subtitle: "Contenencia de Conjuntos",
                description: `La contenencia de conjuntos se refiere a la relación de inclusión entre dos conjuntos. Se denota generalmente como ⊆ (subconjunto o igual a) o ⊂ (subconjunto estricto).`,
              },
              {
                subtitle: "Determinación de Conjuntos",
                description: `La determinación de conjunto se refiere a la especificación completa de los elementos que forman un conjunto. Un conjunto es una colección de objetos, números o elementos. 
                Un Conjunto se determina por compresión cuando  hay una propiedad que cumplan todos los elementos y por extensión es cuando no se repite ningún conjuntos por comprensión y extensión elemento.
                `,
              },
              {
                subtitle: "Representación de Conjuntos",
                description: `La representación de conjunto no es más q podemos mostrar las formas que se escriben o como se pueden  dibujar para nosotros poder representar los conjunto utilizamos el diagrama de Veen.`,
              },
            ],
          };
        } else if (lesson == "criterios-divisibilidad") {
          this.lesson = {
            title: "Criterios de divisibilidad",
            description: `Son reglas matemáticas que nos permiten determinar si un número es divisible por otro sin necesidad de realizar la división completa. Esto es muy útil en matemáticas y pueden facilitar cálculos.
                Divisibilidad por 2: es cuando el número termina en cero o par 
                Divisibilidad por 3: es cuando las cifras de los números se suman y es múltiplo de 3 
                Divisibilidad por 5: es cuando el numero termina en 5 o en 0
                Divisibilidad por 9: es cuando la suma de las cifras es múltiplo de 9
                Divisibilidad por 10: es cuando termina en 0, si sin dos 0 es divisible por 100 y son tres 0 es divisible por 1000
            `,
            video: "https://www.youtube.com/embed/JO_SRpmojdM",
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
                Las fracciones equivalentes son aquellas fracciones que representan la misma cantidad, aunque sus numeradores y denominadores sean diferentes. Para obtener fracciones equivalentes, se multiplican o dividen tanto el numerador como el denominador por el mismo número. <br>
                    <img class="mt-5 mx-auto" width="300px" src="https://i.ibb.co/QM6JYr1/fraccionesequivalentes.jpg" alt="fraccionesequivalentes" border="0">
                `,
              },
              {
                subtitle: "Comparación de fracciones ",
                description: `
                La comparación de fracciones es un proceso que se utiliza para determinar cuál de dos o más fracciones es mayor o menor en valor. 

Para comparar fracciones, se deben seguir algunos pasos:

<strong>Verificar si los denominadores son iguales: </strong>Si las fracciones tienen el mismo denominador, se puede comparar directamente el numerador. La fracción con el numerador más grande será mayor.

    <strong>Encontrar un denominador común: </strong>Si las fracciones tienen denominadores diferentes, es necesario encontrar un denominador común para ambas. Esto se puede hacer hallando el mínimo común múltiplo (MCM) de los denominadores.

        <strong>Convertir las fracciones a un denominador común: </strong>Una vez que se ha encontrado el denominador común, se deben convertir ambas fracciones a ese denominador común manteniendo su equivalencia. Esto se hace multiplicando el numerador y el denominador de cada fracción por el mismo número.

            <strong>Comparar los numeradores: </strong>Después de convertir las fracciones al denominador común, se comparan los numeradores. La fracción con el numerador más grande será mayor.

                `,
              },
              {
                subtitle: "Clasificación de fracciones",
                description: `
                    <ol class="ml-15">
                        <li><strong> Fracciones propias: </strong>Se llaman fracciones propias a aquellas que representan números menores que la unidad. Y ¿cómo son estas fracciones? Todas las fracciones que representan un número menor que la unidad se caracterizan por tener el numerador menor que el Fracciones impropias</strong></p></li>
                        <li><strong> Fracciones impropias: </strong>Se llaman fracciones impropias a las que representan números mayores que la unidad. Y ¿cómo son estas fracciones? Todas las fracciones que representan un número mayor que la unidad se caracterizan por tener el numerador mayor que el denominador.</strong></p></li>
                        <li><strong> Fracciones iguales a la unidad: </strong>Son las que representan números iguales a la unidad. Es decir, son las fracciones que representan el 1 y se caracterizan por tener el numerador y el denominador iguales.</strong></p></li>
                `,
              },
            ],
          };
        } else if (lesson == "maximo-comun-divisor") {
          this.lesson = {
            title: "El máximo común divisor ",
            description: `El máximo común divisor (MCD), también conocido como máximo común divisor (MCD) o mayor divisor común (MDC), de dos o más números enteros es el número más grande que divide exactamente a todos ellos. En otras palabras, es el mayor número que es un divisor común de esos números. `,
            video: "https://www.youtube.com/embed/WD4rGWCRBYY",
          };
        } else if (lesson == "numeros-compuestos") {
          this.lesson = {
            title: "Nùmeros compuestos ",
            description: `Un número compuesto es un número entero mayor que 1 que tiene más de dos divisores positivos este si tiene más divisores que los número primos que solo tiene dos .`,
            video: "https://www.youtube.com/embed/SJb8_Lad_PU",
          };
        } else if (lesson == "numeros-primos") {
          this.lesson = {
            title: "Nùmeros primos ",
            description: `Los números primos son aquellos números enteros mayores que 1 que solo tienen dos divisores: 1 y sí mismos esta regla es obligatorio ya que si esto no se cumple estos número no se pueden llamar número primos..`,
            video: "https://www.youtube.com/embed/e1XtzmR-4jk",
          };
        } else if (lesson == "minimo-comun-multiplo") {
          this.lesson = {
            title: "El mínimo común múltiplo ",
            description: `El mínimo común múltiplo (MCM) es un concepto matemático que se aplica principalmente en aritmética y álgebra. El MCM de dos o más números enteros positivos es el número más pequeño que es múltiplo de todos ellos. Para encontrar el MCM de dos números, hay varias formas de hacerlo. Una de las más comunes es mediante la descomposición en factores primos`,
            video: "https://www.youtube.com/embed/txLlA_fyL5g",
          };
        } else if (lesson == "multiplos") {
          this.lesson = {
            title: "Múltiplos",
            description: `Son aquellos números que obtenemos a multiplicarlos por el resto de los números naturales`,
            video: "https://www.youtube.com/embed/7XNeElmBk9I",
          };
        } else if (lesson == "divisores") {
          this.lesson = {
            title: "Divisores",
            description: `Son aquellos números naturales que se pueden dividir dando como el resto 0 ósea q se puedan dividir exactamente.`,
            video: "https://www.youtube.com/embed/0sjv7bR7jY0",
          };
        } else if (lesson == "decimales") {
          this.lesson = {
            title: "Decimales",
            description: `Los números decimales son una forma de representar números que incluyen una parte fraccionaria. Se componen de dos partes principales: la parte entera y la parte decimal. La parte entera representa la cantidad completa de unidades, mientras que la parte decimal representa una fracción de una unidad. El sistema decimal se basa en 0la base 1.`,
            video: "https://www.youtube.com/embed/fae6X1jg3nE",
            subtopic: [
              {
                subtitle: "Sustracción de número decimales",
                description: `La sustracción de números decimales es una operación aritmética que se realiza para restar dos o más números que tienen una parte fraccionaria (decimales). Al igual que con la sustracción de números enteros, se debe prestar especial atención a los lugares decimales y alineación adecuada antes de realizar la operación.`,
              },
              {
                subtitle: "Adicción de número decimales",
                description: `adición de números decimales es una operación matemática básica que se realiza de la misma manera que la adición de números enteros, pero teniendo en cuenta los lugares decimales`,
              },
              {
                subtitle: "Multiplicación de números decimales",
                description: `La multiplicación de números decimales es un procedimiento matemático en el cual se multiplican dos o más números que contienen una parte fraccionaria (decimal). El proceso es similar a la multiplicación de números enteros, pero debes tener en cuenta las posiciones decimales durante el cálculo.`,
              },
              {
                subtitle: "Decimales equivalentes",
                description: `Los números decimales equivalentes son aquellos que representan la misma cantidad, pero pueden tener diferentes formas debido a la cantidad de cifras decimales o la forma en que se escriben`,
              },
            ],
          };
        } else if (lesson == "fracciones3") {
          this.lesson = {
            title: "Fracciones",
            description: `Las fracciones son expresiones matemáticas que representan una parte de una cantidad o un número dividido en partes iguales. Se componen de un numerador (el número que está arriba) y un denominador (el número que está abajo), separados por una línea horizontal.`,
            video: "https://www.youtube.com/embed/c9cTIjBqFTw",
            subtopic: [
              {
                subtitle: "Multiplicación de fracciones",
                description: `En la  multiplicación de fracciones es más compleja ya que aquí se multiplica numerador por numerador y denominador por denominador .`,
              },
              {
                subtitle: "Sustracción de fracciones ",
                description: `Para las sustracción es lo mismo que en la adición si estás tiene el mismo denominador se restan los numeradores y si tiene diferente denominadores se le saca el máximo común múltiplo a los denominadores y se resta los numeradores .
                `,
              },
              {
                subtitle: "Adicción de fracciones ",
                description: `En las adiciones de fracciones cuando tenemos el mismo denominador se deja este denominador y sumamos los numeradores y si en alguna ocasión tenemos diferentes denominadores se Cogen los denominadores y se le saca el máximo común múltiplo (M.C.M) y se suma igual los numeradores.`,
              },
            ],
          };
        }
        break;
      case "fifth":
        if (lesson == "adicion") {
          this.lesson = {
            title: "Adición",
            description: `La suma (también conocida como adición) es una de las cuatro operaciones básicas de la aritmética de los números enteros, decimales, fraccionarios, reales y complejos, e igualmente en expresiones algebraicas o sobre estructuras asociadas a ellos, como espacios vectoriales.
            `,
            video: "https://www.youtube.com/embed/br4Z-HZtIQQ",
          };
        } else if (lesson == "numeros-naturales") {
          this.lesson = {
            title: "Números naturales",
            description: `Los números naturales son los que utilizamos en la vida cotidiana para contar u ordenar y pertenecen al conjunto de números enteros positivos.
El conjunto de los números naturales se representa por ℕ y está formado por: 
<p style="text-align: center"> N = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... </p>
Nosotros consideramos que   es un número natural, aunque no todos los autores están de acuerdo.
Los números naturales no tienen decimal, unidad imaginaria, o bien no son fracciones.
Los números naturales son ilimitados, si a un número natural le sumamos  , obtenemos otro número natural.
`,
            video: "https://www.youtube.com/embed/uqCO15pKGKo",
            subtopic: [
              {
                subtitle: "Multiplicación de números naturales",
                description: `Multiplicar dos números naturales consiste en sumar uno de los factores consigo mismo tantas veces como indica el otro factor.

Por ejemplo, la multiplicación 2x5 consiste en sumar el número 2 cinco veces:
2x5= 2+2+2+2+2=10
`,
              },
              {
                subtitle: "División de números naturales ",
                description: `La división es la operación Matemática que nos permite con mayor exactitud averiguar cuántas veces una cantidad está contenida en otra. es decir, si queremos repartir algo a varias personas, a través, de la división sabremos qué parte le corresponde a cada persona. 
imaginas, que tienes que repartir 24 manzanas a 6 niños.
cómo lo harás?
la división te puede ayudar.
primero debes saber que en una división encontrarás 4 partes. veamos.
`,
              },
            ],
          };
        } else if (lesson == "representacion-conjuntos") {
          this.lesson = {
            title: "Representación de conjuntos",
            description: `La representación de los conjuntos no es más que una forma de mostrar cómo se escriben o cómo se pueden dibujar.
`,
            video: "https://www.youtube.com/embed/zvIdUCn3GZg",
          };
        } else if (lesson == "multiplos-divisores") {
          this.lesson = {
            title: "Múltiplos y divisores",
            description: `- Los múltiplos son los números que se obtienen al multiplicar un número por otros números. Por ejemplo, los múltiplos de 3 son 3, 6, 9, 12, etc.
- Los divisores son los números que pueden dividir a otro número sin dejar residuo. Por ejemplo, los divisores de 12 son 1, 2, 3, 4, 6 y 12.
 
Ejemplo:
- Múltiplos: Los múltiplos de 5 son 5, 10, 15, 20, etc.
- Divisores: Los divisores de 20 son 1, 2, 4, 5, 10 y 20.
`,
            video: "https://www.youtube.com/embed/YW_04Esg4QQ",
          };
        } else if (lesson == "criterios-divisibilidad") {
          this.lesson = {
            title: "Criterios de divisibilidad",
            description: `Los criterios de divisibilidad son reglas que nos ayudan a saber si un número es divisible por otro sin necesidad de hacer la división completa. Por ejemplo, un número es divisible por 2 si termina en 0, 2, 4, 6 u 8. Un número es divisible por 3 si la suma de sus dígitos es divisible por 3.
            Ejemplo:
- Un número es divisible por 2 si termina en 0, 4, 8, 12, etc.
- Un número es divisible por 3 si la suma de sus dígitos es divisible por 3. Por ejemplo, 123 es divisible por 3 porque 1 + 2 + 3 = 6, que es divisible por 3.

            `,
            video: "https://www.youtube.com/embed/JO_SRpmojdM",
          };
        } else if (lesson == "minimo-comun-multiplo") {
          this.lesson = {
            title: "El mínimo común múltiplo ",
            description: `El mínimo común múltiplo es el número más pequeño que es múltiplo de dos o más números al mismo tiempo. Por ejemplo, si buscamos el mínimo común múltiplo de 3 y 4, sería 12, ya que es el número más pequeño que es divisible por ambos números.
            Ejemplo:
- El mínimo común múltiplo de 4 y 6 es 12, ya que es divisible por ambos números

            `,
            video: "https://www.youtube.com/embed/txLlA_fyL5g",
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
        } else if (lesson == "potenciacion") {
          this.lesson = {
            title:
              "Potenciación, radicación y logaritmación de números naturales",
            description: `- La potenciación es cuando multiplicamos un número por sí mismo varias veces. Por ejemplo, 2 elevado a la 3 es igual a 2 x 2 x 2 = 8.
- La radicación es encontrar la raíz cuadrada de un número. Por ejemplo, la raíz cuadrada de 25 es 5 porque 5 x 5 = 25.
- La logaritmación es la operación inversa de la potenciación. Nos ayuda a encontrar el exponente al que hay que elevar un número para obtener otro número.
 
Ejemplo:
- Potenciación: 3 elevado a la 4 es igual a 3 x 3 x 3 x 3 = 81.
- Radicación: La raíz cuadrada de 16 es 4 porque 4 x 4 = 16.
- Logaritmación: Logaritmo en base 2 de 8 es igual a 3 porque 2 elevado a la 3 es igual a 8.

            `,
            video: "https://www.youtube.com/embed/vwzZEB0SzCI",
          };
        } else if (lesson == "division-decimal-natural") {
          this.lesson = {
            title: "División de un decimal entre un natural",
            description: `Hacer la división normal, como si no estuviese la coma del número decimal. En el momento en el que bajemos la primera cifra de la derecha de la coma tenemos que poner una coma en el cociente. Ejemplo: Vamos a dividir 360,57 entre 51. Empezamos dividiendo 360 entre 51.7`,
            video: "https://www.youtube.com/embed/0V4HP-x1LAc",
          };
        } else if (lesson == "fracciones-expresion-decimal") {
          this.lesson = {
            title: "Fracciones y expresiones decimales",
            description: `
            Las fracciones en cuyo denominador hay un 10 o una potencia de 10 (es decir, un 1 seguido de ceros, como ocurre en 100, 1000, etc.) se denominan fracciones decimales.  Una fracción es una división en la que el dividendo es el numerador y el divisor es el denominador.  Si se realiza la división que indica la fracción, el cociente es un número decimal. Una fracción decimal equivale, por lo tanto, a un número decimal.  Y, al contrario, un número decimal se puede representar también como una fracción decimal.
Las fracciones sirven para escribir divisiones, y normalmente no hace falta calcular con decimales el resultado de esa división.

            `,
            video: "https://www.youtube.com/embed/3t7fQ2cPjxw",
          };
        } else if (lesson == "orden-numeros-decimales") {
          this.lesson = {
            title: "Orden de los números decimales",
            description: `
            Para ordenar dos o más números decimales, lo hacemos comparando los números en la misma posición del punto decimal. Por ejemplo, para encontrar el mayor de los siguientes números 12,48; 12,5 y 12,458 lo primero que hacemos es fijarnos en la parte entera del decimal.
            `,
            video: "https://www.youtube.com/embed/rCdiAOclPRU",
          };
        } else if (lesson == "polinomio-aritmetico") {
          this.lesson = {
            title: "Polinomio aritmético",
            description: `
            Los polinomios aritméticos son expresiones que combinan las cuatro operaciones básicas. Aritmética significa operaciones que involucran números únicamente. El propósito de un polinomio aritmético simplificado es obtener el resultado de la expresión cuando se realizan todas las operaciones especificadas.
Por ejemplo:
Por ejemplo: -4 + 32x 36/12-√25, este es un polinomio sin signos de agrupación.
Los polinomios nos sirven para simplificar un polinomio aritmético tiene como finalidad la obtención del resultado de la expresión, al efectuar todas las operaciones indicadas.

            `,
            video: "https://www.youtube.com/embed/81oS5QihAEU",
          };
        }

        break;
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
  