<template>
  <v-app>
    <v-card min-height="80vh">
      <v-tabs v-model="tab" bg-color="primary" align-tabs="center">
        <v-tab value="about">
          <span class="font-weight-light">Sea</span>
          <span>Battle</span>
        </v-tab>

        <v-spacer></v-spacer>

        <div v-if="registered">
          <v-tab value="joingame" v-if="account == 'user'">
            <v-icon start icon="mdi-controller"></v-icon>Join Game</v-tab
          >
          <v-tab value="gamehistory" v-if="account == 'admin' && false">
            Game History
          </v-tab>
          <v-tab value="manageprizes" v-if="account == 'admin'">
            <v-icon start icon="mdi-trophy-variant"></v-icon>Manage Prizes
          </v-tab>
          <v-tab value="creategame" v-if="account == 'admin'">
            <v-icon start icon="mdi-controller"></v-icon>Create Game
          </v-tab>
        </div>

        <v-spacer></v-spacer>

        <v-tab value="profile" v-if="registered"
          ><v-icon start icon="mdi-account"></v-icon>Profile</v-tab
        >
        <v-tab value="registration" v-if="!registered">
          <v-icon start icon="mdi-login"></v-icon>Log In</v-tab
        >
        <v-btn
          v-if="registered"
          color="primary"
          variant="flat"
          @click="logout"
          class="ma-1"
        >
          <v-icon start icon="mdi-logout"></v-icon>Log out</v-btn
        >
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="about">
            <About></About>
          </v-window-item>

          <v-window-item value="joingame" v-if="account == 'user'">
            <JoinGame></JoinGame>
          </v-window-item>

          <v-window-item value="gamehistory" v-if="account == 'admin'">
            <GameHistory @redirect="onRedirect"></GameHistory>
          </v-window-item>

          <v-window-item value="manageprizes" v-if="account == 'admin'">
            <ManagePrizes @redirect="onRedirect"></ManagePrizes>
          </v-window-item>

          <v-window-item value="creategame" v-if="account == 'admin'">
            <CreateField></CreateField>
          </v-window-item>

          <v-window-item value="profile" v-if="registered">
            <Profile></Profile>
          </v-window-item>

          <v-window-item value="registration">
            <Authorization @signup="onSignup"></Authorization>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <v-footer color="primary">
      <v-row justify="center">
        <div class="d-flex justify-center ma-5">
          <strong>©mosh2023-2024</strong>
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style></style>

<script>
import About from "./components/About.vue";
import Authorization from "./components/Authorization.vue";
import JoinGame from "./components/JoinGame.vue";
import Placeholder from "./components/Placeholder.vue";
import Profile from "./components/Profile.vue";
import GameHistory from "./components/GameHistory.vue";
import CreateField from "./components/CreateField.vue";
import ManagePrizes from "./components/ManagePrizes.vue";

export default {
  name: "App",
  components: {
    About,
    Authorization,
    Placeholder,
    Profile,
    JoinGame,
    GameHistory,
    CreateField,
    ManagePrizes,
  },
  data() {
    return {
      tab: null,
      registered: false,
      account: "none",
    };
  },
  mounted() {},
  methods: {
    onSignup(data) {
      this.registered = true;
      this.account = data.account;
      this.tab = data.tab;
    },
    logout() {
      this.registered = false;
      this.account = "none";
      this.tab = "about";
    },
    onRedirect(data) {
      this.tab = data.tab;
    },
  },
};
</script>
