<template>
  <v-app>
    
    
    <BNavbar v-if="ShowBNavbar"/>

    <v-container fluid fill-height>
      <div class="d-flex justify-center ma-16">
        <router-view></router-view>
      </div>
    </v-container>
    
    
    <Footer></Footer>
  </v-app>
</template>

<style>
v-container {
  height: 800px;
}
</style>

<script>
import ANavbar from './components/AdminNavbar.vue'
import Footer from './components/Footer.vue'
import PNavbar from './components/PlayerNavbar.vue'
import BNavbar from './components/BlankNavbar.vue'
//import SANavbar from './views/HomeView.vue'
//import SBNavbar from './views/HomeView.vue'
export default { 
  name: 'App',
  components: { ANavbar, Footer, PNavbar, BNavbar},
  data() {
    return {
      ShowANavbar:false,
      ShowPNavbar:false,
      ShowBNavbar:true
    }
  },
methods: { Aclicked(check) {
  console.log('Админка');
  if (check==="name") {
    this.ShowANavbar =true;
      this.ShowPNavbar =false;
      this.ShowBNavbar =false; }
},
  Pclicked() {
  console.log('Игрок');
    this.ShowANavbar =false;
      this.ShowPNavbar =true;
      this.ShowBNavbar =false;
}
}
}
</script>
