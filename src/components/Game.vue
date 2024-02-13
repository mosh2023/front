<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-card width="100%" variant="flat">
        <div class="d-flex justify-center" v-if="grid">
          <v-card class="mx-auto" color="grey" variant="outlined">
            <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="d-flex">
              <div v-for="(cell, colIndex) in row" :key="colIndex">
                <v-card
                  variant="outlined"
                  :width="width_height"
                  :height="width_height"
                  :color="cell.used ? 'red' : 'grey'"
                  @click="handleButtonClick(rowIndex, colIndex, cell)"
                  ><v-img :src="cell.url" v-if="cell.url != null"> </v-img>
                </v-card>
              </div>
            </div>
          </v-card>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  props: ["tab"],
  data() {
    return {
      //settings
      grid: this.generateGrid(),
      width_height: "100px",
      changes: true,
      //api
      response: null,
      error: null,
      //game
      id: null,
      name: null,
      description: null,
      board_size: null,
      player: null,
      //data
      localData: null,
    };
  },
  mounted() {
    let token = localStorage.token;
    this.localData = this.parseJwt(token).sub;
    this.Join(localStorage.key);

    setTimeout(() => {
      this.generateGrid();
    }, 1000);
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
      this.grid = Array.from({ length: this.board_size }, (_, rowIndex) =>
        Array.from({ length: this.board_size }, (_, colIndex) => ({
          rowIndex,
          colIndex,
          url: null,
          used: false,
        }))
      );
    },
    handleButtonClick(rowIndex, colIndex, cell) {
      if (this.cell.used == false) {
        cell.used = true;
      }
    },
    async Join(key) {
      this.response = null;
      this.error = null;

      let token = localStorage.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await axios
        .put("http://localhost:5002/v1/player/join", {
          key: key,
        })
        .then((response) => (this.response = response))
        .catch((error) => (this.error = error));

      if (this.error == null) {
        console.log(this.response);
        console.log(this.response.data);
        this.id = this.response.data.id;
        this.name = this.response.data.name;
        this.description = this.response.data.description;
        this.board_size = this.response.data.board_size;

        if (this.localData.user_id == this.response.data.player1.user_id) {
          this.player = this.response.data.player1;
        } else if (
          this.localData.user_id == this.response.data.player2.user_id
        ) {
          this.player = this.response.data.player2;
        } else {
          console.log("third player");
        }
      } else {
        console.log("error");
      }
    },
    async getFields() {
      this.response = null;
      this.error = null;

      let token = localStorage.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await axios
        .post("http://localhost:5002/v1/fullfields/" + this.id)
        .then((response) => (this.response = response))
        .catch((error) => (this.error = error));

      if (this.error == null) {
      }
    },
  },
};
</script>
