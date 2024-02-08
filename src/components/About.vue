<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-card
        class="mx-auto"
        width="80%"
        variant="flat"
        title="Project Developers"
      >
        <div
          class="d-flex justify-center ma-5"
          v-for="(item, index) in developers"
          v-bind:key="index"
        >
          <v-card variant="tonal" color="grey" width="100%">
            <v-row align="start" class="ma-3">
              <v-col>
                <div class="d-flex justify-center">
                  <v-avatar
                    v-model="img"
                    :image="item.img"
                    size="400"
                  ></v-avatar>
                </div>
              </v-col>
              <v-col>
                <div class="d-flex justify-center">
                  <v-card variant="elevated" width="90%" :title="item.title">
                    <div class="d-flex justify-center">
                      <v-card-text>
                        {{ item.text }}
                      </v-card-text>
                    </div>
                  </v-card>
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
export default {
  data() {
    return {
      developers: [
        {
          title: "teamlead",
          img: "/public/default-avatar.png.webp",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quam neque maxime odio delectus qui laboriosam, molestiae molestias sed alias hic aspernatur quisquam consequuntur maiores velit distinctio! Autem, rem?",
        },
        {
          title: "backend",
          img: "/public/default-avatar.png.webp",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quam neque maxime odio delectus qui laboriosam, molestiae molestias sed alias hic aspernatur quisquam consequuntur maiores velit distinctio! Autem, rem?",
        },
        {
          title: "frontend",
          img: "/public/default-avatar.png.webp",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quam neque maxime odio delectus qui laboriosam, molestiae molestias sed alias hic aspernatur quisquam consequuntur maiores velit distinctio! Autem, rem?",
        },
        {
          title: "frontend",
          img: "/public/default-avatar.png.webp",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quam neque maxime odio delectus qui laboriosam, molestiae molestias sed alias hic aspernatur quisquam consequuntur maiores velit distinctio! Autem, rem?",
        },
      ],
    };
  },
};
</script>
