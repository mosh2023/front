<template>
    <div class="d-flex justify-center ma-8">
      <v-card class="mx-auto px-6 py-8 w-25" >
        <v-form>
          <v-text-field
            v-model="gridSize"
            type="number"
            clearable
            label="number of rows/columns"
            placeholder="number from 1 to 10">
        </v-text-field>
        </v-form>
        <v-card class="mx-auto px-6 py-8">
          <v-form>
            <v-text-field
            v-model="prize"
            type="text"
            clearable
            label="prize"
            placeholder="prize / prize label">  
            </v-text-field>
            <v-text-field
                v-model="description"
                clearable
                label="prize description"
                placeholder="description">  
            </v-text-field>
          </v-form>
        </v-card>
        <v-btn class="d-flex justify-center" color="primary" @click="generateGrid">create field</v-btn>
      </v-card>
      <div v-if="grid">
      <v-card class="mx-auto px-6 py-8">
          <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="d-flex">
            <div v-for="(cell, colIndex) in row" :key="colIndex">
              <v-btn class="mx-auto px-6 py-8"
               @click="handleButtonClick(rowIndex, colIndex, cell)"
               :class="{ 'red-button': cell.prizename != null }"></v-btn>
            </div>
          </div>
      </v-card>
        </div>
    </div>
  </template>
  <style>
  .red-button {
    background-color: red;
  }
  </style>
  <script>
  export default {
    data() {
      return {
        gridSize: 0,
        grid: null,
        prize: "",
        description: "",
        shouldHighlight: false,
      };
    },
    methods: {
      generateGrid() {
        if (this.gridSize >= 1 && this.gridSize <= 10) {
          this.grid = Array.from({ length: this.gridSize }, (_, rowIndex) =>
            Array.from({ length: this.gridSize }, (_, colIndex) => ({ value: null, rowIndex, colIndex }))
          );
        }
      },
      handleButtonClick(rowIndex, colIndex, cell,) {
        cell.prizename = this.prize
        cell.przedescription = this.description
        console.log(`поле: (${rowIndex}, ${colIndex}) 
                     приз: ${cell.prizename}
                     описание приза: ${cell.przedescription}`);
        // Вы можете выполнять дополнительные действия с переданными значениями и индексами
      },
    },
  };
  </script>