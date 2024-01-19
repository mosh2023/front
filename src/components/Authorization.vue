<template>
  <div class="d-flex justify-center ma-8">
    <v-card class="mx-auto px-6 py-8" width="500">
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
        ></v-text-field>

        <v-text-field
          clearable
          label="Password"
          placeholder="Enter your password"
          v-model="password"
        ></v-text-field>
        <br />
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
        ></v-text-field>

        <v-text-field
          clearable
          label="Password"
          placeholder="Verify your password"
          v-model="verifypassword"
        ></v-text-field>
        <br />
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
    };
  },
  methods: {
    signup() {
      localStorage.clear();
      //отправка запроса на сервер для проверки пользователя и определения его типа аккаунта
      //localStorage.token = "";
      this.$emit("signup", {
        username: this.username,
        password: this.password,
        account: this.account,
        tab: "about",
      });
    },
    register() {
      if (this.password == this.verifypassword) {
        localStorage.clear();
        // отправка запроса на сервер для регистрации пользователя
        //localStorage.token = "";
        this.$emit("signup", {
          username: this.username,
          password: this.password,
          account: this.account,
          tab: "about",
        });
      } else {
        alert("the passwords are different");
      }
    },
  },
};
</script>
