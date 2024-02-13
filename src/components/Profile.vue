<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-card class="mx-auto" width="70%" variant="flat">
        <div class="d-flex justify-center">
          <v-card variant="tonal" color="grey" width="100%">
            <v-row align="start" class="ma-3">
              <v-col>
                <div class="d-flex justify-center">
                  <v-avatar v-model="img" :image="img" size="400"></v-avatar>
                </div>
              </v-col>
              <v-col>
                <div class="d-flex justify-center">
                  <v-card variant="tonal" width="90%">
                    <div class="d-flex justify-center">
                      <v-card-text>
                        <v-text-field
                          label="Username"
                          variant="solo"
                          v-model="data.login"
                          readonly
                        ></v-text-field>
                        <v-text-field
                          label="Password"
                          variant="solo"
                          v-model="data.password"
                          readonly
                          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show ? 'text' : 'password'"
                          @click:append-inner="null"
                        ></v-text-field>
                        <v-text-field
                          label="Account type"
                          variant="solo"
                          v-model="data.role"
                          readonly
                        ></v-text-field>
                      </v-card-text>
                    </div>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <br />
        <div class="d-flex justify-center" v-if="data.role == 'user'">
          <v-card variant="outlined" color="grey" width="100%" title="Awards">
            <div class="d-flex justify-center">
              <v-row align="start" class="ma-3">
                <div
                  class="d-flex justify-center"
                  v-for="(item, index) in prizes"
                  v-bind:key="index"
                >
                  <v-col>
                    <div class="d-flex justify-center">
                      <v-card>
                        <Award :data="item"></Award>
                      </v-card>
                    </div>
                  </v-col>
                </div>
              </v-row>
            </div>
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
  props: ["data", "tab"],
  data() {
    return {
      img: "/public/default-avatar.png.webp",
      show: false,
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
      let response = null;
      let error = null;

      let token = localStorage.token;
      let user_id = this.parseJwt(token).sub.id;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      let link = "http://localhost:5002/v1/prize/" + user_id;

      await axios
        .get(link)
        .then((response) => (response = response))
        .catch((error) => (error = error));

      console.log(response);
      if (error == null && response != null && response.status == 200) {
        this.prizes = this.response.data;
      } else {
        console.log("An error has occured on getPrizes");
      }
    },
  },
};
</script>
