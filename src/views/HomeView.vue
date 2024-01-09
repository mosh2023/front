<template>
  <div class="d-flex justify-center ma-8">
      <v-card class="mx-auto px-6 py-8" width="500">

          <a @click="CTANavbar">
          <v-btn
            block
            size="large"
            type="submit"
            variant="elevated"
          >
          AdminNavbar
          </v-btn>
          </a>
          <br>
          <a @click="CTPNavbar">
          <v-btn
          block
          size="large"
          type="submit"
          variant="elevated"
        >
          PlayerNavbar
        </v-btn>
      </a>
      </v-card>
    </div>
</template>

<script>
export default {
props: ["App"],  
data() { 
  return { emit: ["Pbut","Abut"]
 };
},
methods: {
    CTANavbar() {
      this.$emit("Abut","name");
    },
    CTPNavbar() {
      this.$emit("Pbut");
      
    },
  },

};
</script>