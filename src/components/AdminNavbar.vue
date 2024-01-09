<template>
  <v-toolbar app color="indigo">
    <v-toolbar-title class="text">
      <a href="/">
          <v-btn>
      <span class="font-weight-light">Sea</span>
      <span>Battle</span>
          </v-btn>
    </a>
    </v-toolbar-title>

    <v-navigation>
      <a href="/creategame">
        <v-btn value="Create a game">
          <span>Create a game</span>
        </v-btn>
      </a>
    </v-navigation>

    <a href="/authorization">
      <v-btn>
        <span>Sign In</span>
      </v-btn>
    </a>
  </v-toolbar>
</template>

<style>
a {
  color: white;
}
</style>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>
