<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-card rounded="0" theme="theme" class="p6 dark-pink">
        <v-row align="center" justify="center">
          <v-col lg="6" xl="6" cols="12">
            <v-row align="center" justify="end" minHeight="600">
              <v-col lg="9" md="6" sm="12" cols="12">
                <v-card-title>
                  <h2 class="text-h2">
                    <span class="text-pink">Our</span> story
                  </h2>
                </v-card-title>
                <v-card-subtitle
                  >It's a dream, as it were. Those that dream and effect the
                  desired and mutual goals, with deliberate actions, will
                  thrive. Great brands often overcome failure, derison, and
                  sheer hardship to reach their goals.
                </v-card-subtitle>
                <v-card-text>
                  Behind each great product there's an equally great story and
                  often a fascinating team of individual experts. The same
                  virtues: toughness, creativity, and engenuity - define many of
                  the product originators. We uniquely combine international
                  experience with a deep appreation of aesthetic ideas of
                  culture dominated marketplace and the creativity that's imbued
                  in all the showcases we make for the amazing brands in Africa.
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-col lg="6" xl="6" cols="12">
            <v-card theme="theme" class="p3 dark-pink">
              <Image width="100%" src="/assets/assets-005.png" />
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card rounded="0" theme="accent" class="p12 dark-purple">
        <v-row align="center" justify="center" minHeight="600">
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-row align="center" justify="start" minHeight="600">
              <v-col lg="6" xl="6" cols="12">
                <v-card theme="accent" class="dark-purple p3">
                  <Image width="100%" src="/gems/globe-003.png" />
                </v-card>
              </v-col>
              <v-col lg="6" xl="6" cols="12">
                <v-card-title>
                  <h2 class="text-h2">
                    <span class="text-purple">Our</span> vision
                  </h2>
                </v-card-title>
                <v-card-subtitle
                  >To <span class="text-purple">inspire</span> innovative brands
                  in Africa. Many great brands are forging a unique way of life
                  for the world of this generation and continue to shape it.
                  With a unique philosophy of customer service, the single thing
                  that all of these African icons have in common is success of
                  one kind or another.
                </v-card-subtitle>
                <v-card-text
                  >In many cases, this will continue beyond this day. In some
                  way or other, they have all helped to stoke the engine of the
                  fast growing economy in the worlld. We are doing this by
                  taking a revolutionary approach, that understands the impact
                  branding campaigns can bring to the growing customer demands
                  and plan to maximize value for creative brands.
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row justify="start">
              <v-col
                sm="12"
                md="12"
                lg="4"
                xl="4"
                v-for="(step, index) in steps"
                :key="index"
              >
                <v-card theme="theme" :class="`p3 dark-${step.theme}`">
                  <v-row align="center" justify="start">
                    <v-col lg="6" xl="6" cols="12">
                      <v-card-title
                        v-html="step.title"
                        :class="`text-${step.theme}`"
                      ></v-card-title>
                      <v-card-text
                        v-html="`${step.subtitle} ${step.text}`"
                      ></v-card-text>
                    </v-col>
                    <v-col lg="6" xl="6" cols="12">
                      <v-card
                        theme="theme"
                        :class="`px-2 py-2 dark-${step.theme}`"
                      >
                        <Image :src="step.src" />
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <Values></Values>
    </v-col>
    <v-col cols="12">
      <Team></Team>
    </v-col>
  </v-row>
</template>
<script setup>
const steps = [];
</script>
