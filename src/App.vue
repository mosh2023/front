<template>
  <v-app>
    <Navbar></Navbar>

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
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Navbar, Footer },
  data() {
    return {
      //
    }
  }
}
</script>
