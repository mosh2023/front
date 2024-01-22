<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-card width="100%" variant="flat">
        <v-row align="center" justify="center" class="ma-3">
          <v-col>
            <div class="d-flex justify-center">
              <v-card class="mx-auto px-6 py-8" width="90%" variant="elevated">
                <v-form>
                  <v-text-field
                    v-model="gridSize"
                    type="number"
                    clearable
                    label="number of rows/columns"
                    placeholder="number from 1 to 10"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="prize"
                    type="text"
                    clearable
                    label="prize"
                    placeholder="prize / prize label"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="description"
                    clearable
                    label="prize description"
                    placeholder="description"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    size="large"
                    class="d-flex justify-center"
                    color="primary"
                    @click="generateGrid"
                    >create field</v-btn
                  >
                </v-form>
              </v-card>
            </div>
          </v-col>

          <v-col>
            <div class="d-flex justify-center" v-if="grid">
              <v-card class="mx-auto" color="grey" variant="outlined">
                <div
                  v-for="(row, rowIndex) in grid"
                  :key="rowIndex"
                  class="d-flex"
                >
                  <div v-for="(cell, colIndex) in row" :key="colIndex">
                    <v-btn
                      class="mx-auto px-6 py-8"
                      @click="handleButtonClick(rowIndex, colIndex, cell)"
                      :class="{ 'red-button': cell.prizename != null }"
                    ></v-btn>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-layout>
  </v-container>
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
    };
  },
  watch() {},
  methods: {
    generateGrid() {
      if (this.gridSize >= 1 && this.gridSize <= 10) {
        this.grid = Array.from({ length: this.gridSize }, (_, rowIndex) =>
          Array.from({ length: this.gridSize }, (_, colIndex) => ({
            value: null,
            rowIndex,
            colIndex,
          }))
        );
      }
    },
    handleButtonClick(rowIndex, colIndex, cell) {
      cell.prizename = this.prize;
      cell.przedescription = this.description;
      console.log(`поле: (${rowIndex}, ${colIndex}) 
                     приз: ${cell.prizename}
                     описание приза: ${cell.przedescription}`);
      // Вы можете выполнять дополнительные действия с переданными значениями и индексами
    },
  },
};
</script>
