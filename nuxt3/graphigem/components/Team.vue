<template>
  <v-card rounded="0" theme="accent" class="p12 dark-green">
    <v-row align="center" justify="center">
      <v-col lg="6" cols="12" class="text-center">
        <v-card-subtitle>
          <h2 class="text-h2"><span class="text-green">Our</span> team</h2>
        </v-card-subtitle>
      </v-col>
      <v-col lg="9" md="6" sm="12" cols="12">
        <v-row align="top" justify="start">
          <v-col
            lg="3"
            md="6"
            cols="12"
            v-for="(value, index) in players"
            :key="index"
          >
            <v-card
              theme="theme"
              :class="`p2 dark-${value.theme}`"
              min-height="75"
            >
              <v-row align="center" justify="start">
                <v-col cols="12">
                  <Image :width="600" :height="600" :src="value.src" />
                </v-col>
                <v-col cols="12">
                  <v-row dense align="center" justify="center">
                    <v-col cols="12">
                      <v-card-title v-html="value.title"></v-card-title>
                      <v-card-subtitle
                        :class="`text-${value.theme}`"
                        v-html="value.subtitle"
                      ></v-card-subtitle>
                      <v-card-text v-html="value.text"></v-card-text>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
const players = [
  {
    theme: "purple",
    src: "/team/01007.png",
    title: `Creative Art`,
    subtitle: `Drijke Wessels`,
    text: "Always and expanding my knowledge scope while spreading magic in the world through a futuristic lense of imagination.",
  },
  {
    theme: "pink",
    src: "/team/00638.png",
    title: "3D Modeling",
    subtitle: `Kagiso Silindane`,
    text: "I am a diligent animator who is dedicated to introducing new and unique skills into the field of animation and art.",
  },
  {
    theme: "yellow",
    src: "/team/00051.png",
    title: "Web3 Enthusiast",
    subtitle: `Batanayi Matuku`,
    text: "Obsessed with ideating and architecting branding strategies and building bold things for innovative brands in Africa.",
  },
  {
    theme: "green",
    src: "/team/00468.png",
    title: "2D artist",
    subtitle: `Sibusiso Nkosi`,
    text: "Everday we dream it, we'll make it the best we can. If you just think of the job, the credit will automatically follow.",
  },
  {
    theme: "pink",
    src: "/team/00963.png",
    title: "3D Artist",
    subtitle: `Jason Grobler`,
    text: `All creative people want to do the unexpected and the crazy stuff too. I find myself happy with little things like drawing.`,
  },
];
</script>
