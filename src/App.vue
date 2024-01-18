<template>
  <v-app>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary" align-tabs="center">
        <v-tab value="about">
          <span class="font-weight-light">Sea</span>
          <span>Battle</span>
        </v-tab>

        <v-spacer></v-spacer>

        <v-tab value="two">Item Two</v-tab>
        <v-tab value="three">Item Three</v-tab>

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

          <v-window-item value="three">
            <Placeholder></Placeholder>
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
import Placeholder from "./components/Placeholder.vue";

export default {
  name: "App",
  components: { About, Authorization, Placeholder },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
