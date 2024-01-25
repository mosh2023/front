<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-card class="mx-auto" width="70%" variant="flat">
        <div class="d-flex justify-center ma-8">
          <v-card class="mx-auto px-6 py-8" width="500" variant="tonal">
            <v-btn
              block
              color="success"
              size="large"
              type="submit"
              variant="elevated"
              @click="redirect1"
            >
              Create new game
            </v-btn>
            <br />
            <v-btn
              block
              color="success"
              size="large"
              type="submit"
              variant="elevated"
              @click="redirect2"
            >
              Manage prize options
            </v-btn>
          </v-card>
        </div>
        <div class="d-flex justify-center ma-8">
          <v-card
            class="mx-auto px-6 py-8"
            width="100%"
            variant="tonal"
            title="History"
          >
            <v-card-text> Under development </v-card-text>
          </v-card>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      redirectTo: "",
    };
  },
  methods: {
    redirect1() {
      this.redirectTo = "createfield";
      this.redirect();
    },
    redirect2() {
      this.redirectTo = "manageprizes";
      this.redirect();
    },
    redirect() {
      this.$emit("redirect", {
        tab: this.redirectTo,
      });
    },
  },
};
</script>
