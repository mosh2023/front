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
                  <!--доп настройки-->
                  <br />
                  <v-select
                    v-model="prize"
                    :items="prizes"
                    label="prizes"
                    required
                  ></v-select>
                  <br />
                  <v-btn
                    block
                    size="large"
                    class="d-flex justify-center"
                    color="primary"
                    @click="generateGrid"
                    >create field</v-btn
                  >
                  <br />
                  <v-btn
                    block
                    size="large"
                    class="d-flex justify-center"
                    color="success"
                    @click="Save"
                    >Save</v-btn
                  >
                  <br />
                  <div v-if="sended">
                    <v-alert
                      color="success"
                      icon="$success"
                      title="The field is saved"
                      >Your invitation code is {{ code }}
                    </v-alert>
                    <br />
                  </div>
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
      ceil_list: new Set(),
      prize: "",
      description: "",
      sended: false,
      code: null,
      prizes: ["Default Prize"],
      prize: "",
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
            prizename: null,
            prizedescription: null,
          }))
        );
      }
    },
    handleButtonClick(rowIndex, colIndex, cell) {
      if (cell.prizename == null) {
        cell.prizename = this.prize;
        cell.prizedescription = this.description;
        this.ceil_list.add(cell);
      } else {
        cell.prizename = null;
        cell.prizedescription = null;
        this.ceil_list.delete(cell);
      }

      console.log(`поле: (${rowIndex}, ${colIndex}) 
                     приз: ${cell.prizename}
                     описание приза: ${cell.prizedescription}`);

      // Вы можете выполнять дополнительные действия с переданными значениями и индексами
      // мы будем из них формировать список и отсылать на сервер
    },
    Save() {
      // формирование и отправка данных на сервер
      console.clear();
      console.log("grid is saved: ");
      for (let cell of this.ceil_list) console.log(cell);
      this.code = 123;
      this.sended = true;
    },
  },
};
</script>
