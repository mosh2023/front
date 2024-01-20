<template>
  <v-card variant="tonal" color="grey" width="200px">
    <div class="ma-5">
      <v-img :src="url"> </v-img>
      <v-text>
        {{ description }}
      </v-text>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      url: "/public/trophy.jpg.avif",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };
  },
};
</script>
