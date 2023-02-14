<template>
  <v-card rounded="0" theme="white" class="p12">
    <v-row align="center" justify="start">
      <v-col lg="6" cols="12">
        <v-row align="center" min-height="600" justify="center">
          <v-col lg="6" cols="12">
            <v-card-title>
              <h2 class="text-h2">Our expertise</h2>
            </v-card-title>
          </v-col>
          <v-col lg="6" cols="12">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card-text>
                  Envisioning a desirable future and accelerating change affords
                  futuristic brands a dynamic branding strategy and competive
                  edge on the marketplace. Telling branding stories and customer
                  journeys, when told correctly, have the possibilities that can
                  connect with culture and create community within a highly
                  dynamic market environment in totally unpredictable ways.
                </v-card-text>
                <v-card-text>
                  The ones, that do, will thrive. Below is a list of the
                  industries that we currently serve with the support of media
                  and veteran creatives in our digital arsenal, and it's only in
                  the nascent stage of what can be unleashed when a new kind of
                  branding is unveiled to the marketplace.
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            lg="3"
            md="6"
            cols="12"
            v-for="(industry, index) in industries"
            :key="index"
          >
            <v-card
              theme="theme"
              :class="`p2 dark-${industry.theme}`"
              min-height="90"
            >
              <v-row align="start" justify="start">
                <v-col cols="12">
                  <v-row align="center" justify="start">
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-row align="center" justify="start">
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col lg="9" md="6" sm="9" cols="9">
                      <v-card-title :class="`text-${industry.theme}`">
                        <h4 class="text-h4">
                          {{ industry.line1 }}
                        </h4>
                      </v-card-title>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-row align="center" justify="start">
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col cols="3">
                      <v-card-title :class="`text-${industry.theme}`">
                        <h4 class="text-h4">
                          {{ industry.line2 }}
                        </h4>
                      </v-card-title>
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-row align="center" justify="start">
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col lg="6" cols="6">
                      <v-card-title :class="`text-${industry.theme}`">
                        <h4 class="text-h4">
                          {{ industry.line3 }}
                        </h4>
                      </v-card-title>
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-row align="center" justify="start">
                    <v-col cols="3">
                      <Image :width="300" :height="300" :src="industry.src" />
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
                    </v-col>
                    <v-col cols="3">
                       <Image :width="300" :src="industry.src" />
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
const industries = [
  {
    src: "/gees/gees-013.png",
    theme: "yellow",
    line1: "Fashion",
    line2: "&",
    line3: "Beauty",
  },
  {
    src: "/gees/gees-006.png",
    theme: "green",
    line1: "Film",
    line2: "&",
    line3: "Media",
  },
  {
    src: "/gees/gees-009.png",
    theme: "pink",
    line1: "Content",
    line2: "&",
    line3: "AI",
  },
  {
    src: "/gees/gees-003.png",
    theme: "purple",
    line1: "Web3",
    line2: "&",
    line3: "IP",
  },
];
</script>
