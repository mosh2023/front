<template>
  <div class="d-flex justify-center ma-8">
    <v-card class="mx-auto px-6 py-8" width="500" variant="tonal">
      <div class="d-flex justify-center ma-1">
        <v-switch
          color="primary"
          v-model="mode"
          true-value="Register"
          false-value="Sign Up"
          :label="`${mode}`"
        ></v-switch>
      </div>
      <v-form @submit.prevent="signup" v-if="mode == 'Sign Up'">
        <v-text-field
          class="mb-2"
          clearable
          label="Username"
          v-model="username"
          :rules="[() => !!username || 'This field is required']"
          required
        ></v-text-field>

        <v-text-field
          clearable
          label="Password"
          placeholder="Enter your password"
          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="password"
          :rules="[() => !!password || 'This field is required']"
          :type="show ? 'text' : 'password'"
          required
          @click:append-inner="show = !show"
        ></v-text-field>
        <br />

        <div v-if="invalidData">
          <v-alert
            color="warning"
            icon="$warning"
            title="Incorrect Data"
            :text="errorMessage"
          ></v-alert>
          <br />
        </div>

        <v-btn
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign Up
        </v-btn>
      </v-form>

      <v-form @submit.prevent="register" v-if="mode == 'Register'">
        <v-text-field
          class="mb-2"
          clearable
          label="Username"
          :rules="[() => !!username || 'This field is required']"
          v-model="username"
        ></v-text-field>

        <v-select
          label="Account type"
          class="mb-2"
          :items="['user', 'admin']"
          v-model="account"
        ></v-select>

        <v-text-field
          clearable
          label="Password"
          placeholder="Enter your password"
          v-model="password"
          :rules="[() => !!password || 'This field is required']"
          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          required
          @click:append-inner="show = !show"
        ></v-text-field>

        <v-text-field
          clearable
          label="Verify your password"
          placeholder="Verify your password"
          v-model="verifypassword"
          :rules="[() => !!verifypassword || 'This field is required']"
          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          required
          @click:append-inner="show = !show"
        ></v-text-field>
        <br />

        <div v-if="invalidData">
          <v-alert
            color="warning"
            icon="$warning"
            title="Incorrect Data"
            :text="errorMessage"
          ></v-alert>
          <br />
        </div>

        <v-btn
          block
          color="primary"
          size="large"
          type="submit"
          variant="elevated"
        >
          Register
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      //data
      username: "testuser",
      password: "strongpassword",
      verifypassword: "strongpassword",
      account: "admin",
      //api
      response: null,
      error: null,
      //settings
      mode: "Sign Up",
      invalidData: false,
      errorMessage: "",
      show: false,
    };
  },
  methods: {
    async signup() {
      if (this.password != null && this.username != null) {
        this.invalidData = false;

        let data = new URLSearchParams();
        data.append("username", this.username);
        data.append("password", this.password);

        localStorage.clear();
        await axios
          .post("http://localhost:5002/v1/token", data)
          .then((response) => (this.response = response))
          .catch((error) => (this.error = error));

        if (this.error != null) {
          //console.log(this.error);
          this.invalidData = true;
          this.errorMessage = "Incorrect Username or Password";
        } else {
          //console.log("Successful");
          this.invalidData = false;
          localStorage.token = this.response.token;

          this.$emit("signup", {
            // вообще убрать потом, нужен только токен из localstorage
            tab: "about",
            account: this.account, // переписать на получения акка по токену
          });
        }
      } else {
        this.invalidData = true;
        this.errorMessage = "You need to fill in all fields";
      }
    },
    async register() {
      if (
        this.password != null &&
        this.username != null &&
        this.verifypassword != null
      ) {
        if (this.password == this.verifypassword) {
          this.invalidData = false;

          //registration
          localStorage.clear();
          await axios
            .post("http://localhost:5002/v1/register", {
              login: this.username,
              password: this.password,
              role: this.account,
            })
            .then((response) => (this.response = response))
            .catch((error) => (this.error = error));

          if (this.error != null) {
            //console.log(this.error);
            this.invalidData = true;
            this.errorMessage = "User already exists";
          } else {
            //console.log("Successful registration");
            this.invalidData = false;

            //token
            let data = new URLSearchParams();
            data.append("username", this.username);
            data.append("password", this.password);

            await axios
              .post("http://localhost:5002/v1/token", data)
              .then((response) => (this.response = response))
              .catch((error) => (this.error = error));

            if (this.error != null) {
              //console.log(this.error);
            } else {
              //onsole.log("Successful", this.response);
              localStorage.token = this.response.token;

              this.$emit("signup", {
                tab: "about",
                account: this.account,
              });
            }
          }
        } else {
          this.invalidData = true;
          this.errorMessage = "Passwords are different";
        }
      } else {
        this.invalidData = true;
        this.errorMessage = "You need to fill in all fields";
      }
    },
  },
};
</script>
