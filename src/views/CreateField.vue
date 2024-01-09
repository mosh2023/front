<template>
  <div class="d-flex justify-center ma-8">
    <v-card class="mx-auto px-6 py-8" width="500">
    <v-form>
      <v-text-field
      type="number"
        clearable
        label="number of rows/columns"
        placeholder="please enter a number from 2 to 12"
      ></v-text-field>
      <br>
      <v-btn
        block
        color="indigo"
        size="large"
        type="submit"
        variant="elevated"
      >
        Sign In
      </v-btn>
      <br>
      <v-btn block
        size="large"
        type="submit"
        variant="elevated"
      >
        register
      </v-btn>
    </v-form>
  </v-card>
  </div>
  <v-card class="mx-auto px-6 py-8" width="500"></v-card>
</template>