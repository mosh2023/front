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
              @click="redirect"
            >
              Create new game
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
    return {};
  },
  methods: {
    redirect() {
      this.$emit("redirect", {
        tab: "createfield",
        visible: true,
      });
    },
  },
};
</script>
