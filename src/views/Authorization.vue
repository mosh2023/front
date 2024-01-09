<template>
    <div class="d-flex justify-center ma-8">
      <v-card class="mx-auto px-6 py-8" width="500">
      <v-form>
        <v-text-field
          class="mb-2"
          clearable
          label="Username"
        ></v-text-field>

        <v-text-field
          clearable
          label="Password"
          placeholder="Enter your password"
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
</template>