<template>
    <div class="d-flex justify-center ma-8">
      <v-card class="mx-auto px-6 py-8" width="500">
      <v-form>
        <v-text-field
        type="number"
          clearable
          label="у игрока 1 столько то ходов"
        ></v-text-field>
        <br>
        <v-btn
          block
          color="indigo"
          size="large"
          type="submit"
          variant="elevated"
        >
          добавить ход
        </v-btn>
        <br>
        <v-btn block
          size="large"
          type="submit"
          variant="elevated"
        >
          удалить
        </v-btn>
      </v-form>
    </v-card>
    <v-card class="mx-auto px-6 py-8" width="500">
        <v-form>
          <v-text-field
          type="number"
            clearable
            label="у игрока 2 столько то ходов"
          ></v-text-field>
          <br>
          <v-btn
            block
            color="indigo"
            size="large"
            type="submit"
            variant="elevated"
          >
            добавить ход
          </v-btn>
          <br>
          <v-btn block
            size="large"
            type="submit"
            variant="elevated"
          >
            удалить
          </v-btn>
        </v-form>
      </v-card>
      </div>
      <v-card class="mx-auto px-6 py-8" width="500"></v-card>
  </template>