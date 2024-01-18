<template>
  <div class="d-flex justify-center ma-8">
    <v-card class="mx-auto px-6 py-8" width="500">
      <v-form>
        <v-text-field
          clearable
          label="Code"
          placeholder="Enter the invitation code"
        ></v-text-field>
        <br />
        <v-btn
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Enter
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
