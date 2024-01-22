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
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="password"
          :rules="[() => !!password || 'This field is required']"
          :type="show1 ? 'text' : 'password'"
          required
          @click:append-inner="show1 = !show1"
        ></v-text-field>
        <br />

        <div v-if="invalidData">
          <v-alert
            color="warning"
            icon="$warning"
            title="Incorrect Data"
            text="You need to fill in all fields"
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
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          required
          @click:append-inner="show1 = !show1"
        ></v-text-field>

        <v-text-field
          clearable
          label="Verify your password"
          placeholder="Verify your password"
          v-model="verifypassword"
          :rules="[() => !!verifypassword || 'This field is required']"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          required
          @click:append-inner="show1 = !show1"
        ></v-text-field>
        <br />

        <div v-if="invalidData">
          <v-alert
            color="warning"
            icon="$warning"
            title="Incorrect Data"
            text="You need to fill in all fields"
          ></v-alert>
          <br />
        </div>

        <div v-if="PasswordDismatch">
          <v-alert
            color="warning"
            icon="$warning"
            title="Warning"
            text="Passwords are different"
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
export default {
  data() {
    return {
      username: "defaultName",
      password: "12345",
      verifypassword: "12345",
      account: "admin",
      mode: "Sign Up",
      invalidData: false,
      PasswordDismatch: false,
      show1: false,
    };
  },
  methods: {
    signup() {
      if (this.password != null && this.username != null) {
        this.invalidData = false;

        //отправка запроса на сервер для проверки пользователя и определения его типа аккаунта
        //localStorage.clear();
        //localStorage.token = "";

        this.$emit("signup", {
          username: this.username,
          password: this.password,
          account: this.account,
          tab: "about",
        });
      } else {
        this.invalidData = true;
      }
    },
    register() {
      if (
        this.password != null &&
        this.username != null &&
        this.verifypassword != null
      ) {
        this.invalidData = false;
        if (this.password == this.verifypassword) {
          this.PasswordDismatch = false;

          //отправка запроса на сервер для проверки пользователя и определения его типа аккаунта
          //localStorage.clear();
          //localStorage.token = "";

          this.$emit("signup", {
            username: this.username,
            password: this.password,
            account: this.account,
            tab: "about",
          });
        } else {
          this.PasswordDismatch = true;
        }
      } else {
        this.invalidData = true;
      }
    },
  },
};
</script>
