<template>
  <div class="d-flex justify-center ma-8">
    <v-card class="mx-auto px-6 py-8" width="500" variant="tonal">
      <v-form>
        <v-text-field
          clearable
          label="Code"
          v-model="code"
          :rules="[() => !!code || 'This field is required']"
          placeholder="Enter the invitation code"
        ></v-text-field>

        <br />

        <div v-if="invalidData">
          <v-alert
            color="warning"
            icon="$warning"
            title="Incorrect Data"
            text="You need to fill in all fields"
          ></v-alert>
          <br />
        </div>

        <v-btn
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          @click="redirect"
        >
          Enter
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: null,
      invalidData: false,
    };
  },
  methods: {
    redirect() {
      if (this.code != null) {
        this.invalidData = false;
        console.log(code);
        /*
        this.$emit("redirect", {
          tab: "game",
          visible: true,
        });*/
      } else {
        this.invalidData = true;
      }
    },
  },
};
</script>
