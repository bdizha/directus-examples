<template>
  <v-card theme="accent" class="p12 dark-purple">
    <v-row align="center" justify="center">
      <v-col  lg="6"  xl="6" cols="12" class="text-center">
        <v-card-subtitle>
          <h2 class="text-h2">Your career</h2>
        </v-card-subtitle>
      </v-col>
      <v-col lg="9" md="6" sm="12" cols="12">
        <v-row align="top" justify="end">
          <v-col  lg="6"  xl="6" cols="12" v-for="(value, index) in values" :key="index">
            <v-card
              theme="theme"
              :class="`p2 dark-${value.theme}`"
              min-height="75"
            >
              <v-row align="center" justify="start">
                <v-col sm="12" md="12" lg="4"  xl="4">
                  <v-img height="100%" :src="value.src" />
                </v-col>
                <v-col sm="12" md="12" lg="8" cols="12">
                  <v-row align="center" justify="center">
                    <v-col cols="12">
                      <v-card-title>
                        <h4 class="text-h4" v-html="value.title"></h4>
                      </v-card-title>
                    </v-col>
                    <v-col cols="12">
                      <v-sheet color="transpare" min-height="120">
                        <v-card-text v-html="value.text"></v-card-text>
                      </v-sheet>
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
    src: "/icons/icons-008.png",
    theme: "purple",
    title: "<span class='text-purple'>Purposefully</span> driven",
    text: "<span class='text-purple'>We</span> hold our work and each other to the highest of standards and believe that team work is dream work. We believe in sweating the small stuff and attention to detail is key.",
  },
  {
    src: "/icons/icons-010.png",
    theme: "pink",
    title: "<span class='text-pink'>Relentlessly</span> caring",
    text: "<span class='text-pink'>For</span> us, it's incredibly important that we work in a supportive and caring space. We value character over all else. We respect each other, are also compassionate and we deeply care about our work and colleagues.",
  },
  {
    src: "/icons/icons-009.png",
    theme: "green",
    title: "<span class='text-green'>Unapolagetically</span> ambitious",
    text: "<span class='text-green'>We</span> want to achieve great things and we want everyone to join us on this mission. We believe in rewarding consistent effort, hard work and great results.",
  },
  {
    src: "/icons/icons-013.png",
    theme: "yellow",
    title: "<span class='text-yellow'>Deliberately</span> curious",
    text: "<span class='text-yellow'>We</span> encourage everyone, no matter what team or role, to bring their ideas to the table. The outcome of an experiment or an idea does not matter, it is the learning from it that counts.",
  },
];
</script>
