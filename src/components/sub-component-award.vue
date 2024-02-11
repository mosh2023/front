<template>
  <v-card variant="flat" color="white" width="150px" :title="this.data.name">
    <div class="ma-1">
      <v-img :src="this.data.icon_link"> </v-img>
      <v-card-text>
        {{ this.data.description }}
      </v-card-text>
      <br />
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
};
</script>
