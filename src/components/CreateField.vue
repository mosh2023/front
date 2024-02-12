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
                    v-model="gameName"
                    label="Name of the game"
                    variant="outlined"
                    clearable
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="gameDescription"
                    label="Description of the game"
                    variant="outlined"
                    clearable
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="gridSize"
                    type="number"
                    label="number of rows/columns"
                    hint="number from 1 to 10"
                    clearable
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
                    :items="prize_names"
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
                      <v-col class="mb-1" v-if="!item.used">
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
                      ><v-img :src="cell.url" v-if="cell.url != null"> </v-img>
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
  props: ["tab"],
  data() {
    return {
      //field
      gameName: null,
      gameDescription: null,
      gridSize: 4,
      grid: null,
      ceil_list: new Set(),
      width_height: "100px",
      //prizes
      prize_names: [],
      prizes: [],
      prize: null,
      idx: null,
      boats: [],
      //save
      sended: false,
      code: null,
    };
  },
  mounted() {
    this.getPrizes();
  },
  watch: {
    tab() {
      if (this.tab == "creategame") {
        this.getPrizes();
      }
    },
  },
  methods: {
    parseJwt(token) {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    },
    async getPrizes() {
      this.response = null;
      this.error = null;

      let token = localStorage.token;
      let admin_id = this.parseJwt(token).sub.id;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      let link = "http://localhost:5002/v1/prize/admin/" + admin_id;

      await axios
        .get(link)
        .then((response) => (this.response = response))
        .catch((error) => (this.error = error));

      if (this.error != null) {
        console.log("An error has occured on getPrizes");
      } else {
        //this.prizes = this.response.data;
        this.prize_names.splice(0, this.prize_names.length);
        this.prizes.splice(0, this.prizes.length);

        for (let i of this.response.data) {
          this.prize_names[this.prize_names.length] = i.name;

          if (i.icon_link != null)
            i.icon_link = "http://localhost:" + i.icon_link.slice(10);
          else {
            i.icon_link = "../../public/cruiser.png";
          }
          this.prizes[this.prizes.length] = i;
        }
      }
    },
    generateGrid() {
      if (this.gridSize >= 1 && this.gridSize <= 10) {
        this.grid = Array.from({ length: this.gridSize }, (_, rowIndex) =>
          Array.from({ length: this.gridSize }, (_, colIndex) => ({
            rowIndex,
            colIndex,
            url: null,
            boat_idx: null,
          }))
        );
      }
    },
    handleButtonClick(rowIndex, colIndex, cell) {
      if (cell.boat_idx == null && this.idx != null) {
        cell.url = this.boats[this.idx].icon_link;
        cell.boat_idx = this.idx;

        this.boats[this.idx].used = true;
        this.idx = null;
        this.ceil_list.add(cell);
      } else {
        if (cell.boat_idx != null) {
          this.boats[cell.boat_idx].used = false;

          for (let i = 0; i < this.boats.length; i++)
            this.boats[i].selected = false;
        }
        cell.url = null;
        cell.boat_idx = null;

        this.ceil_list.delete(cell);
      }
    },
    equalName(item) {
      return item.name === this.prize;
    },
    async CreateBoat() {
      if (this.prize != null) {
        this.error = null;
        this.response = null;

        let selectedPrize = this.prizes.find(this.equalName);

        let token = localStorage.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        await axios
          .post("http://localhost:5002/v1/game/boat", {
            prize_id: selectedPrize.id,
          })
          .then((response) => (this.response = response))
          .catch((error) => (this.error = error));

        if (this.error != null) {
          console.log(this.error);
        } else {
          this.boats[this.boats.length] = {
            name: selectedPrize.name,
            description: selectedPrize.description,
            icon_link: selectedPrize.icon_link,
            selected: false,
            used: false,
            prize_id: selectedPrize.id,
            id: this.response.data.id,
          };
        }
      }
    },
    select(index) {
      this.boats[index].selected = !this.boats[index].selected;
      if (this.boats[index].selected && this.boats[index].used == false) {
        this.idx = index;
      } else {
        this.idx = null;
      }

      for (let i = 0; i < this.boats.length; i++)
        if (i != index) this.boats[i].selected = false;
    },
    async Save() {
      this.error = null;
      this.response = null;

      let token = localStorage.token;
      let admin_id = this.parseJwt(token).sub.id;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await axios
        .post("http://localhost:5002/v1/game", {
          name: this.gameName,
          description: this.gameDescription,
          board_size: this.gridSize,
          admin_id: admin_id,
        })
        .then((response) => (this.response = response))
        .catch((error) => (this.error = error));

      if (this.error != null) {
        console.log("An errror has occured");
      } else {
        let code = this.response.data.key;
        let id = this.response.data.id;

        for (let cell of this.ceil_list) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          await axios
            .put("http://localhost:5002/v1/game/boat/place", {
              boat_id: this.boats[cell.boat_idx].id,
              game_id: id,
              x: cell.colIndex,
              y: cell.rowIndex,
            })
            .then((response) => (this.response = response))
            .catch((error) => (this.error = error));
        }

        if (this.error != null) {
          console.log("An errror has occured");
        } else {
          this.sended = true;
          this.code = code;
        }
      }
    },
  },
};
</script>
