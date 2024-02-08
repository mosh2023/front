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
                  </v-card>
                </div>
              </v-col>
              <v-col>
                <div class="d-flex justify-center">
                  <!--Сортировка-->
                  <v-row class="mb-1">
                    <v-col>
                      <div class="d-flex justify-center">
                        <Award></Award>
                      </div>
                    </v-col>

                    <v-col>
                      <div class="d-flex justify-center">
                        <Award></Award>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="d-flex justify-center">
                        <Award></Award>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="d-flex justify-center">
                        <Award></Award>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="d-flex justify-center">
                        <Award></Award>
                      </div>
                    </v-col>
                  </v-row>
                </div>
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
  props: ["data"],
  data() {
    return {
      localData: this.data,
      // add prize
      prize_name: "",
      prize_description: "",
      prize_img: null,
      // api
      error: null,
      response: null,
    };
  },
  methods: {
    async addPrize() {
      this.response = null;

      await axios
        .post("http://localhost:5002/v1/prize", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`, // Устанавливаем заголовок Authorization
          },
          data: {
            name: this.prize_name,
            description: this.prize_description,
            icon_link: "",
            admin_id: this.localData.id,
          },
        })
        .then((response) => (this.response = response))
        .catch((error) => (this.error = error));

      if (this.error == null) {
        console.log(this.response);
      } else {
        console.log(this.error);
      }
    },
  },
};
</script>
