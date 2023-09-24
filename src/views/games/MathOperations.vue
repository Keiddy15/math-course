<template>
  <main style="height: 100%">
    <h1
      style="
        text-align: center;
        font-weight: 900;
        color: #1d5d9b;
        font-size: 4rem;
      "
      class="mt-4"
    >
      OPERACIONES MATEMÁTICAS
    </h1>
    <div style="text-align: center; height: 100%" class="containeriframe">
      <iframe
        allowfullscreen
        width="80%"
        height="690"
        frameborder="0"
        src="https://es.educaplay.com/juego/15644834-operaciones_matematicas_y_sus_resultados.html"
      ></iframe>
    </div>
  </main>
</template>
  
  <script>
export default {
  name: "BasicMath",
  data: () => ({
    game: "",
  }),
  created() {},
};
</script>
  
  <style>
.containeriframe {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

iframe {
  border: none; /* Para eliminar cualquier borde del iframe */
}
</style>