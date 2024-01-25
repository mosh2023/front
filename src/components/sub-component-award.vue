<template>
  <v-card variant="tonal" color="grey" width="200px">
    <div class="ma-5">
      <v-img :src="url"> </v-img>
      <v-card-text>
        {{ description }}
      </v-card-text>
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
