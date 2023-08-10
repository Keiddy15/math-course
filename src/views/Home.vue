<template>
      <v-main class="mt-10" style="height: 100%">
        <v-container class="text-center">
          <v-row justify="center">
            <v-col cols="6">
                  <div>
                    <h1 class="display-2 mb-2">¡Hola, amigos matemáticos!</h1>
                    <p class="subheading mb-4">¡Bienvenidos a Math Buddy, donde los números se convierten en tus superamigos! 🎉</p>
                  </div>
                  <p class="headline mb-6">Aquí, explorarás un mundo lleno de diversión matemática: desde sumas hasta restas y más allá.</p>
                  <p class="body-1 mb-6">¡Prepárate para jugar, aprender y ser un as de las matemáticas mientras nos divertimos juntos! 🚀🧮</p>
                  <p class="caption">Let's math!</p>
                  <v-btn href="/courses" width="200px" class="mt-5" color="primary">A ello</v-btn>
            </v-col>
            <v-col cols="6">
                <img :src="require('../assets/img/user.png')" style="width: 100%"/>
            </v-col>
  
          </v-row>
        </v-container>
      </v-main>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .subheading {
    color: #1976D2;
  }
  </style>
  