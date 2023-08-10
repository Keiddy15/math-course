<template>
  <main>
    <h1
      style="
        text-align: center;
        font-weight: 900;
        color: #1d5d9b;
        font-size: 4rem;
      "
      class="mt-4"
    >
      SUMA
    </h1>
    <div class="container">
      <div class="izquierdo">
        <div class="container-operacion">
          <span id="suma">9 + 9 =</span>
          <span class="resultado" id="resultado"> 18</span>
        </div>
        <span class="msj" id="msj"> </span>
      </div>
      <div class="derecha">
        <span id="op1" class="opcion">18</span>
        <span id="op2" class="opcion">17</span>
        <span id="op3" class="opcion">8</span>
      </div>
    </div>
  </main>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", () => {
  var num1, num2, respuesta;
  let txt_suma = document.getElementById("suma");
  let op1 = document.getElementById("op1");
  let op2 = document.getElementById("op2");
  let op3 = document.getElementById("op3");
  let txt_msj = document.getElementById("msj");
  let txt_resultado = document.getElementById("resultado");
  function comenzar() {
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    //genera la suma - Numeros aleatorios entre 0 1 9
    num1 = Math.round(Math.random() * 9);
    num2 = Math.round(Math.random() * 9);
    respuesta = num1 + num2;
    //asignamos lo números para que se muestren
    suma.innerHTML = num1 + " + " + num2 + " = ";

    //genero un número entre 0 y 2 para colocar la opcion correcta
    let indiceOpCorrecta = Math.round(Math.random() * 2);
    console.log(indiceOpCorrecta);

    //si indiceCorrrecta es igual 0
    if (indiceOpCorrecta == 0) {
      op1.innerHTML = respuesta;
      op2.innerHTML = respuesta + 1;
      op3.innerHTML = respuesta - 1;
    }
    if (indiceOpCorrecta == 1) {
      op1.innerHTML = respuesta - 1;
      op2.innerHTML = respuesta;
      op3.innerHTML = respuesta - 2;
    }
    if (indiceOpCorrecta == 2) {
      op1.innerHTML = respuesta + 2;
      op2.innerHTML = respuesta + 3;
      op3.innerHTML = respuesta;
    }
  }

  op1.onclick = () => {
    console.log(op1.innerHTML)
    controlarRespuesta(parseInt(op1.innerHTML));
  };
  op2.onclick = () => {
    controlarRespuesta(parseInt(op2.innerHTML));
  };
  op3.onclick = () => {
    controlarRespuesta(parseInt(op3.innerHTML));
  };
  function controlarRespuesta(opcionElegida) {
    console.log(opcionElegida)
    console.log(respuesta)
    txt_resultado.innerHTML = opcionElegida;
    if (respuesta == opcionElegida) {
      txt_msj.innerHTML = "EXCELENTE!!";
      txt_msj.style.color = "green";
      setTimeout(comenzar, 2000);
    } else {
      txt_msj.innerHTML = "INTENTA DE NUEVO!!";
      txt_msj.style.color = "red";
      setTimeout(limpiar, 2000);
    }
  }
  function limpiar() {
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
  }

  comenzar();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Nunito";
}
body {
  text-align: center;
  color: #262626;
  background-size: cover;
}
h1 {
  color: white;
  padding: 50px;
}
.container {
  background-color: #ffc562;
  max-width: 700px;
  margin: auto;
  border: 2px solid #000;
  border-radius: 20px;
  display: flex;
  padding: 50px 0;
}
.izquierdo {
  width: 70%;
  font-size: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.derecha {
  width: 30%;
}
.msj {
  font-size: 40px;
  height: 50px;
}
.derecha {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.opcion {
  width: 80px;
  height: 80px;
  border: 1px solid #000;
  font-size: 50px;
  margin-bottom: 20px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #000;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.opcion:hover {
  background-color: #262626;
}
</style>