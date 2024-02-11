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
                    hint="number from 1 to 10"
                    required
                  >
                  </v-text-field>
                  <br />
                  <v-btn
                    block
                    size="large"
                    class="d-flex justify-center"
                    color="primary"
                    @click="generateGrid"
                    >create field
                  </v-btn>
                </v-form>

                <br />
                <br />

                <v-form>
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
                    @click="CreateBoat"
                    >Create boat</v-btn
                  >

                  <br />
                  <br />

                  <v-row align="start">
                    <div
                      class="d-flex justify-center"
                      v-for="(item, index) in boats"
                      v-bind:key="index"
                    >
                      <v-col class="mb-1">
                        <Boat @click="select(index)" :data="item"></Boat>
                      </v-col>
                    </div>
                  </v-row>
                </v-form>

                <br />
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
                    <v-card
                      variant="outlined"
                      :width="width_height"
                      :height="width_height"
                      @click="handleButtonClick(rowIndex, colIndex, cell)"
                      ><v-img :src="cell.url" v-if="cell.prizename != null">
                      </v-img>
                    </v-card>
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

<script>
import axios from "axios";
import Boat from "./sub-component-boat.vue";

export default {
  components: { Boat },
  data() {
    return {
      //field
      gridSize: 4,
      grid: null,
      ceil_list: new Set(),
      width_height: "100px",
      //prizes
      prizes: ["AWARD1", "Cruiser"],
      prize: null,
      boats: [
        {
          title: "AWARD1",
          description: "award1",
          url: "../../public/trophy.jpg.avif",
          selected: false,
          id: 0,
        },
        {
          title: "Cruiser",
          description: "cruiser",
          url: "../../public/cruiser.png",
          selected: false,
          id: 0,
        },
      ],
      idx: null,
      //save
      sended: false,
      code: null,
    };
  },
  watch() {},
  methods: {
    parseJwt(token) {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    },
    generateGrid() {
      if (this.gridSize >= 1 && this.gridSize <= 10) {
        this.grid = Array.from({ length: this.gridSize }, (_, rowIndex) =>
          Array.from({ length: this.gridSize }, (_, colIndex) => ({
            value: null,
            rowIndex,
            colIndex,
            prizename: null,
            prizedescription: null,
            url: null,
          }))
        );
      }
    },
    handleButtonClick(rowIndex, colIndex, cell) {
      if (cell.prizename == null && this.idx != null) {
        cell.prizename = this.boats[this.idx].title;
        cell.prizedescription = this.boats[this.idx].description;
        cell.url = this.boats[this.idx].url;
        this.ceil_list.add(cell);
      } else {
        cell.prizename = null;
        cell.prizedescription = null;
        cell.url = null;
        this.ceil_list.delete(cell);
      }
      /*
      console.log(`поле: (${rowIndex}, ${colIndex})
                     приз: ${cell.prizename}
                     описание приза: ${cell.prizedescription}`);*/
    },
    async CreateBoat() {
      if (this.prize != null) {
        this.error = null;

        await axios
          .post("http://localhost:5002/v1/game/boats", {
            prize_id: 0,
          })
          .then((response) => (this.response = response))
          .catch((error) => (this.error = error));

        if (this.error != null) {
          console.log(this.error);
        } else {
        }
      }
    },
    select(index) {
      this.boats[index].selected = !this.boats[index].selected;
      if (this.boats[index].selected) {
        this.idx = index;
      } else {
        this.idx = null;
      }

      for (let i = 0; i < this.boats.length; i++)
        if (i != index) this.boats[i].selected = false;
    },
    Save() {
      console.log("grid is saved: ");
      for (let cell of this.ceil_list) console.log(cell);

      this.sended = true;
    },
    onfocus() {
      console.log("focus");
    },
  },
};
</script>
