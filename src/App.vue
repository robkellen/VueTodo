<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>VueFire Todo</h2>
      </div>

      <v-spacer></v-spacer>

      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-main>
      <ToDoList />
    </v-main>
  </v-app>
</template>

<script>
import ToDoList from "./components/ToDoList";
export default {
  name: "App",

  components: {
    ToDoList,
  },

  data: () => ({
    //
  }),
};
</script>
