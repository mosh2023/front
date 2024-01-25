<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-card class="mx-auto" width="70%" variant="flat">
        <div class="d-flex justify-center">
          <v-card variant="" color="grey" width="100%">
            <v-row align="start" class="ma-3">
              <v-col>
                <div class="d-flex justify-center">
                  <v-card variant="tonal" width="90%">
                    <div class="d-flex justify-center">
                      <v-card-text>
                        <v-text-field
                          label="Prize Name"
                          variant="solo"
                          v-model="name"
                          clearable
                        ></v-text-field>
                        <v-text-field
                          label="Description"
                          variant="solo"
                          v-model="description"
                          clearable
                        ></v-text-field>
                        <v-file-input
                          accept="image/png, image/jpeg, image/bmp"
                          show-size
                          placeholder="Add a prize picture"
                          prepend-icon="mdi-camera"
                          label="Prize picture"
                          variant="solo-filled"
                        ></v-file-input>
                        <br />
                        <v-btn
                          block
                          color="success"
                          size="large"
                          type="submit"
                          variant="elevated"
                          @click="null"
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
import Award from "./sub-component-award.vue";

export default {
  components: { Award },
  data() {
    return {
      name: "",
      description: "",
      img: "../../public/trophy.jpg.avif",
    };
  },
};
</script>
