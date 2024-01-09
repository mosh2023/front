<template>
    <div class="d-flex justify-center ma-8">
        <v-card class="mx-auto px-6 py-8" width="500">

            <a href="/createfield">
            <v-btn
              block
              size="large"
              type="submit"
              variant="elevated"
            >
            new field
            </v-btn>
            </a>
            <br>
            <a href="/choosefield">
            <v-btn
            block
            size="large"
            type="submit"
            variant="elevated"
          >
            choose from saved
          </v-btn>
        </a>
        </v-card>
      </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>