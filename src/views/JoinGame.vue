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
        <a href="/game">
        <v-btn
          block
          color="indigo"
          size="large"
          type="submit"
          variant="elevated"
        >
          Enter
        </v-btn>
        </a>
      </v-form>
    </v-card>
  </div>
</template>
