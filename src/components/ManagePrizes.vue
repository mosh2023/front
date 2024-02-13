<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-card class="mx-auto" width="90%" variant="flat">
        <div class="d-flex justify-center">
          <v-card variant="null" color="grey" width="100%">
            <v-row align="start" class="ma-3">
              <v-col>
                <div class="d-flex justify-center">
                  <v-card variant="tonal" width="90%">
                    <div class="d-flex justify-center">
                      <v-card-text>
                        <v-text-field
                          label="Prize Name"
                          variant="solo"
                          v-model="prize_name"
                          clearable
                        ></v-text-field>
                        <v-text-field
                          label="Description"
                          variant="solo"
                          v-model="prize_description"
                          clearable
                        ></v-text-field>
                        <v-file-input
                          accept="image/png, image/jpeg, image/bmp"
                          show-size
                          placeholder="Add a prize picture"
                          prepend-icon="mdi-camera"
                          label="Prize picture"
                          variant="solo-filled"
                          v-model="prize_img"
                          clearable
                        ></v-file-input>
                        <br />
                        <v-btn
                          block
                          color="success"
                          size="large"
                          type="submit"
                          variant="elevated"
                          @click="addPrize"
                        >
                          Add new prize
                        </v-btn>
                      </v-card-text>
                    </div>
                    <br />
                    <div v-if="visible">
                      <v-alert
                        :color="color"
                        :icon="icon"
                        :title="msg"
                      ></v-alert>
                    </div>
                  </v-card>
                </div>
              </v-col>
              <v-col>
                <!--Сортировка-->
                <v-row align="start">
                  <div
                    class="d-flex justify-center"
                    v-for="(item, index) in prizes"
                    v-bind:key="index"
                  >
                    <v-col>
                      <div class="d-flex justify-center">
                        <v-card>
                          <div class="ma-4">
                            <Award :data="item"></Award>
                            <v-btn
                              block
                              size="large"
                              class="d-flex justify-center"
                              color="red"
                              @click="DeletePrize(index)"
                              ><v-icon start icon="mdi-delete"></v-icon>
                              Delete
                            </v-btn>
                            <br />
                            <v-btn
                              block
                              size="large"
                              class="d-flex justify-center"
                              color="grey"
                              @click="null"
                            >
                              <v-icon start icon="mdi-cog"></v-icon>
                              Settings
                            </v-btn>
                          </div>
                        </v-card>
                      </div>
                    </v-col>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Award from "./sub-component-award.vue";

export default {
  components: { Award },
  props: ["tab"],
  data() {
    return {
      // add prize
      prize_name: null,
      prize_description: null,
      prize_img: null,
      //info
      visible: false,
      color: "success",
      icon: "$success",
      msg: "New prize is created",
      // api
      error: null,
      response: null,
      //prizes
      prizes: [],
    };
  },
  mounted() {
    this.prizes.splice(0, this.prizes.length);
    this.getPrizes();
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

      if (this.error == null && this.response.status == 200) {
        this.prizes = this.response.data;
      } else {
        console.log("An error has occured on getPrizes");
      }
    },
    async addPrize() {
      this.response = null;
      this.error = null;

      let token = localStorage.token;
      let admin_id = this.parseJwt(token).sub.id;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await axios
        .post("http://localhost:5002/v1/prize", {
          name: this.prize_name,
          description: this.prize_description,
          admin_id: admin_id,
        })
        .then((response) => (this.response = response))
        .catch((error) => (this.error = error));

      let id = this.response.data.id;

      this.visible = true;
      if (this.error == null && this.response.status == 200) {
        const form = new FormData();
        form.append("prize_id", id);
        form.append("file", this.prize_img[0]);

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios
          .post("http://localhost:5002/v1/prize/upload", form)
          .then((response) => (this.response = response))
          .catch((error) => (this.error = error));

        if (this.error == null && this.response.status == 200) {
          this.color = "success";
          this.icon = "$success";
          this.msg = "New prize is created";

          this.prizes.splice(0, this.prizes.length);
          this.getPrizes();
        } else {
          this.color = "warning";
          this.icon = "$warning";
          this.msg = "An error has occured";
        }
      } else {
        this.color = "warning";
        this.icon = "$warning";
        this.msg = "An error has occured";
      }
    },
    async DeletePrize(index) {
      this.response = null;
      this.error = null;

      let token = localStorage.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      let link = "http://localhost:5002/v1/prize/" + this.prizes[index].id;

      await axios
        .delete(link)
        .then((response) => (this.response = response))
        .catch((error) => (this.error = error));

      if (this.error == null && this.response.status == 200) {
        this.prizes.splice(0, this.prizes.length);
        this.getPrizes();
      } else {
        this.visible = true;
        this.color = "warning";
        this.icon = "$warning";
        this.msg = "An error has occured";
      }
    },
  },
};
</script>
