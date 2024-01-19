<template>
  <v-app>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary" align-tabs="center">
        <v-tab value="about">
          <span class="font-weight-light">Sea</span>
          <span>Battle</span>
        </v-tab>

        <v-spacer></v-spacer>

        <v-tab value="two">Prizes</v-tab>
        <v-tab value="three">Create Game</v-tab>
        <v-tab value="five">Join Game</v-tab>

        <v-spacer></v-spacer>

        <v-tab value="four">Registration</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="about">
            <About></About>
          </v-window-item>

          <v-window-item value="two">
            <Placeholder></Placeholder>
          </v-window-item>

        <v-window-item value="five">
          <JoinGame></JoinGame>
        </v-window-item>

          <v-window-item value="three">
            <CreateGame></CreateGame>
          </v-window-item>

          <v-window-item value="four">
            <Authorization></Authorization>
          </v-window-item>
        </v-window>
      </v-card-text>

      <v-footer color="primary">
        <v-row justify="center">
          <strong>©mosh2023-2024</strong>
        </v-row>
      </v-footer>
    </v-card>
  </v-app>
</template>

<style></style>

<script>
import About from "./components/About.vue";
import Authorization from "./components/Authorization.vue";
import JoinGame from "./components/JoinGame.vue";
import Placeholder from "./components/Placeholder.vue";
import CreateGame from "./components/CreateGame.vue";

export default {
  name: "App",
  components: { About, Authorization, Placeholder, JoinGame, CreateGame },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
