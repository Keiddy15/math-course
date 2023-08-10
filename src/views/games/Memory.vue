<template>
  <main>
    <section class="section1">
      <h1
        style="
          text-align: center;
          font-weight: 900;
          color: #1d5d9b;
          font-size: 4rem;
        "
        class="mt-4"
      >
        MEMORIA
      </h1>
      <table>
        <tr>
          <td><button id="0" onclick="destapar(0)"></button></td>
          <td><button id="1" onclick="destapar(1)"></button></td>
          <td><button id="2" onclick="destapar(2)"></button></td>
          <td><button id="3" onclick="destapar(3)"></button></td>
        </tr>
        <tr>
          <td><button id="4" onclick="destapar(4)"></button></td>
          <td><button id="5" onclick="destapar(5)"></button></td>
          <td><button id="6" onclick="destapar(6)"></button></td>
          <td><button id="7" onclick="destapar(7)"></button></td>
        </tr>
        <tr>
          <td><button id="8" onclick="destapar(8)"></button></td>
          <td><button id="9" onclick="destapar(9)"></button></td>
          <td><button id="10" onclick="destapar(10)"></button></td>
          <td><button id="11" onclick="destapar(11)"></button></td>
        </tr>
        <tr>
          <td><button id="12" onclick="destapar(12)"></button></td>
          <td><button id="13" onclick="destapar(13)"></button></td>
          <td><button id="14" onclick="destapar(14)"></button></td>
          <td><button id="15" onclick="destapar(15)"></button></td>
        </tr>
      </table>
    </section>
    <section class="section2">
      <h2 id="aciertos" class="estadisticas">aciertos: 0</h2>
      <h2 id="t-restante" class="estadisticas">tiempo: 60 segundos</h2>
      <h2 id="movimientos" class="estadisticas">movimientos: 0</h2>
    </section>
  </main>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", () => {
  let tarjetasDestapadas = 0;
  let tarjeta1 = null;
  let tarjeta2 = null;
  let primerResultado = null;
  let segundoResultado = null;
  let movimientos = 0;
  let aciertos = 0;
  let temporizador = false;
  let timer = 60;
  let tiempoRegresivoId = null;

  let mostrarMovimientos = document.getElementById("movimientos");
  let mostrarAciertos = document.getElementById("aciertos");
  let mostrarTiempo = document.getElementById("t-restante");

  let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  numeros = numeros.sort(() => {
    return Math.random() - 0.5;
  });
  console.log(numeros);

  function contarTiempo() {
    tiempoRegresivoId = setInterval(() => {
      timer--;
      mostrarTiempo.innerHTML = `Tiempo ${timer} segundos`;
      if (timer == 0) {
        clearInterval(tiempoRegresivoId);
        bloquearTarjetas();
      }
    }, 1000);
  }

  function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++) {
      let tarjetaBloqueada = numeros[i];
      tarjetaBloqueada.disabled = true;
    }
  }

  function destapar(id) {
    if (temporizador == false) {
      contarTiempo();
      temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if (tarjetasDestapadas == 1) {
      tarjeta1 = document.getElementById(id);
      primerResultado = numeros[id];
      tarjeta1.innerHTML = primerResultado;

      tarjeta1.disabled = true;
    } else if (tarjetasDestapadas == 2) {
      tarjeta2 = document.getElementById(id);
      segundoResultado = numeros[id];
      tarjeta2.innerHTML = segundoResultado;

      tarjeta2.disabled = true;

      movimientos++;
      mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

      if (primerResultado == segundoResultado) {
        tarjetasDestapadas = 0;

        aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertoss}`;

        if (aciertos == 8) {
          mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤩`;
          mostrarTiempo.innerHTML = `Fantastico! Solo demoraste ${timerInicial} ${timer} segundos 🎉🏅`;
          mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} ✌️😎`;
        }
      } else {
        setTimeout(() => {
          tarjeta1.innerHTML = " ";
          tarjeta2.innerHTML = " ";
          tarjeta1.disabled = false;
          tarjeta2.disabled = false;
          tarjetasDestapadas = 0;
        }, 800);
      }
    }
  }
});
</script>

<style scoped>
body {
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  font-family: sans-serif;
  color: white;
}
main {
  width: 730px;
  margin: 100px auto;
  display: flex;
  align-items: center;
}
.section1 {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0 10px 10px 10px;
  border-radius: 8px;
}
h1 {
  text-align: center;
}
button {
  height: 100px;
  width: 100px;
  font-size: 40px;
  color: black;
  font-weight: bold;
}
button:hover {
  cursor: pointer;
}
.section2 {
  background-color: rgba(255, 255, 255, 0.2);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 250px;
  height: 400px;
  padding: 0 20px;
}
.estadisticas {
  border: 1px solid white;
  height: 105px;
  border-radius: 8px;
  padding: 8px 20px;
  box-sizing: border-box;
}
</style>