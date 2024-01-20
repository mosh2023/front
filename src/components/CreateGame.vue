<template>
  <div class="d-flex justify-center ma-8">
    <v-card class="mx-auto px-6 py-8">
      <v-tabs bg-color="primary" align-tabs="center">
        <v-tab value="two">Choose from saved</v-tab>
        <v-tab value="three">Create field</v-tab>
      </v-tabs>
      <v-form>
        <v-text-field
          v-model="gridSize"
          type="number"
          clearable
          label="number of rows/columns"
          placeholder="please enter a number from 2 to 12"
        ></v-text-field>
      </v-form>
      <v-card class="mx-auto px-6 py-8">
        <v-btn class="d-flex justify-center" color="primary" @click="generateGrid">create field</v-btn>
      </v-card>
    </v-card>
      <v-card class="mx-auto px-6 py-8" min-width="20">
        <div v-if="grid">
          <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="d-flex">
            <div v-for="(cell, colIndex) in row" :key="colIndex">
              <v-btn class="mx-auto px-6 py-8"  @click="handleButtonClick(rowIndex, colIndex)">{{ cell }}</v-btn>
            </div>
          </div>
        </div>
      </v-card>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridSize: 0,
      grid: null,
    };
  },
  methods: {
    generateGrid() {
      if (this.gridSize >= 1 && this.gridSize <= 10) {
        this.grid = Array.from({ length: this.gridSize }, () =>
          Array.from({ length: this.gridSize },)
        );
      }
    },
    handleButtonClick(rowIndex, colIndex) {
      console.log(`тыкнул кнопку (${rowIndex}, ${colIndex})`);
    },
  },
};
</script>
