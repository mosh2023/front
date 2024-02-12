<template>
  <v-card
    variant="outlined"
    :color="this.data.selected ? 'success' : 'grey'"
    width="150px"
    title="Boat"
  >
    <div class="ma-1">
      <v-img :src="this.data.icon_link"> </v-img>
      <v-card-text>
        <strong>{{ this.data.name }}</strong>
        <br />
        {{ this.data.description }}
      </v-card-text>
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
