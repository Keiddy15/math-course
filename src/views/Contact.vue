<template>
  <div class="mt-15">
    <v-container>
      <v-row>
        <v-col
          v-for="person in persons"
          :key="person.id"
          cols="12"
          md="12"
          lg="4"
        >
          <v-card
            outlined
            class="mb-6 d-flex flex-column mx-auto user"
            style="max-width: 400px; border-radius: 2rem"
            elevation="20"
          >
            <v-avatar size="200" class="mx-auto" image>
              <img :src="person.avatar" alt="Avatar" style="width: 100%;"/>
            </v-avatar>
            <v-card-title style="text-align: center">{{
              person.name
            }}</v-card-title>
            <v-card-text style="text-align: center">
              <p>
                <v-icon
                  size="large"
                  color="teal-darken-2"
                  icon="mdi-email"
                  class="mr-2"
                ></v-icon
                >{{ person.email }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    persons: [
      {
        id: 1,
        name: "Rubén segundo García López",
        email: "rubengarcialopez123@gmail.com",
        phone: "3007069477",
        avatar: "https://i.ibb.co/p0hvfxx/ruben.jpg",
      },
      {
        id: 2,
        name: "Santiago Andrés Olmos Gómez",
        email: "santiagoolmos236@gmail.com",
        avatar: "https://i.ibb.co/Gx93Vzh/Whats-App-Image-2023-09-25-at-8-17-01-AM.jpg",
      },
      {
        id: 3,
        name: "Esteban Andrés Ramírez Yepes",
        email: "estebanandresramirezyepes@gmail.com",
        avatar: "https://i.ibb.co/dmKP4GK/esteban.jpg",
      },
      {
        id: 4,
        name: "Junior Fernando Romero matiu",
        email: "juniormatiu1215@gmail.com",
        avatar: "https://i.ibb.co/NsbQGdy/junior.jpg",
      },
      {
        id: 5,
        name: "Deriam Smith Jiménez Padilla",
        email: "deriam15@gmail.com",
        avatar: "https://i.ibb.co/WPVp9pJ/Whats-App-Image-2023-09-25-at-8-23-59-AM.jpg",
      },
      {
        id: 6,
        name: "Julián Osorio Arrieta",
        email: "julianosorioarrieta@gmail.com",
        avatar: "https://i.ibb.co/k2dvhFs/julian.jpg",
      }
    ],
  }),
};
</script>

<style>
.user:hover {
  border-bottom: 4px solid #ff564f;
  margin-top: -5px;
  box-shadow: 0 11px 18px 0 rgba(0, 0, 0, 0.22);
}

</style>