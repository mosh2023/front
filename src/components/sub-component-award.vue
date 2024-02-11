<template>
  <v-card variant="tonal" color="grey" width="150px" :title="title">
    <div class="ma-1">
      <v-img :src="url"> </v-img>
      <v-card-text>
        {{ description }}
      </v-card-text>
      <br />
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      title: this.data.name,
      url: this.data.icon_link,
      description: this.data.description,
      id: this.data.id,
      admin_id: this.data.admin_id,
      user_id: this.data.user_id,
      dt_won: this.data.dt_won,
    };
  },
};
</script>
