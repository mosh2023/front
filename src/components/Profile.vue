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
                          v-model="username"
                          readonly
                        ></v-text-field>
                        <v-text-field
                          label="Password"
                          variant="solo"
                          v-model="password"
                          readonly
                          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show ? 'text' : 'password'"
                          @click:append-inner="show = !show"
                        ></v-text-field>
                        <v-text-field
                          label="Account type"
                          variant="solo"
                          v-model="account"
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
        <div class="d-flex justify-center">
          <v-card variant="tonal" width="100%" title="Awards">
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
      username: "DefaultName",
      password: "123454321",
      account: "admin",
      img: "/public/default-avatar.png.webp",
      show: false,
    };
  },
};
</script>
