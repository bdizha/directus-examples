<template>
  <v-card rounded="0" theme="theme" class="p12 dark-yellow">
    <v-row align="center" justify="center">
      <v-col lg="6" cols="12" class="text-center">
        <v-card-subtitle>
          <h2 class="text-h2"><span class="text-yellow">Our</span> valussses</h2>
        </v-card-subtitle>
      </v-col>
      <v-col lg="9" md="6" sm="12" cols="12">
        <v-row align="top" justify="end">
          <v-col lg="6" cols="12" v-for="(value, index) in values" :key="index">
            <v-card
              theme="accent"
              rounded="xl"
              :class="`p2 dark-${value.theme}`"
              min-height="75"
            >
              <v-row align="center" justify="start">
                <v-col sm="4" cols="4">
                  <Image :width="600"   :height="600" :src="value.src" />
                </v-col>
                <v-col sm="12" md="12" lg="8" cols="12">
                  <v-row align="center" justify="center">
                    <v-col cols="12">
                      <v-card-title>
                        <h4 class="text-light" v-html="value.title"></h4>
                      </v-card-title>
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
const values = [
  {
    src: "/gems/gems-011.png",
    theme: "purple",
    title: "<span class='text-purple'>Courage</span>",
    text: "<span class='text-purple'>We</span> always seek ways to challenge the status quo as we routinely build, apply, evaluate and repeat at every turn of the clock. ",
  },
  {
    src: "/gems/gems-007.png",
    theme: "pink",
    title: "<span class='text-pink'>Trust</span>",
    text: "<span class='text-pink'>We</span> encourage transparence within a context of a self-regulating network of member nodes with respective diversity of uniqueness.",
  },
  {
    src: "/gems/gems-006.png",
    theme: "yellow",
    title: "<span class='text-yellow'>Autonomy</span>",
    text: "<span class='text-yellow'>It's</span> about dreaming big and changing the game. We are proud to create an exciting brand DeFi solution for everyone who dreams bold.",
  },
  {
    src: "/gems/gems-005.png",
    theme: "green",
    title: "<span class='text-green'>Adventure</span>",
    text: "<span class='text-green'>We</span> serve brands and entertainment communities of all sizes and are fanatical about their success. We explore the impossible of dreams.",
  },
];
</script>
