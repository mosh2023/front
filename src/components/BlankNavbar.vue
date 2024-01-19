<template>

  <BB @Pbut="Pclicked"/>
  <BB @Abut="Aclicked"/>
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
      <a href="/join" v-if="ShowJoin">
        <v-btn value="Join a game">
          <span>Join a game</span>
        </v-btn>
      </a>
      <a href="/creategame" v-if="ShowCreateGame">
        <v-btn value="Create a game">
          <span>Create a game</span>
        </v-btn>
      </a>
      <a href="/authorization" v-if="ShowLogin">
        <v-btn>
          <span>Sign In</span>
        </v-btn>
      </a>
    </v-navigation>
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
      ShowJoin:false,
      ShowCreateGame:false,
      ShowLogin:true
      //
    };
  },
  methods: { Aclicked(check) {
  console.log('Админка');
    this.ShowJoin =true;
      this.ShowCreateGame =false;
      this.ShowLogin =false; 
},
  Pclicked() {
  console.log('Игрок');
    this.ShowJoin =false;
      this.ShowCreateGame =true;
      this.ShowLogin =false;
}
}
};
</script>
