<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-card theme="theme" class="p6 dark-purple">
        <v-row align="center" justify="center">
          <v-col  lg="6"  xl="6" cols="12">
            <v-row align="center" justify="end" minHeight="600">
              <v-col lg="9" md="6" sm="12" cols="12">
                <v-card theme="accent" class="p3 dark-purple">
                  <v-card-title>
                    <h2 class="text-h2">
                      <span class="text-purple">Our</span> story
                    </h2>
                  </v-card-title>
                  <v-card-subtitle>
                    Ask us, what it's like? And the answer is simple: It's
                    always a dream as it were.
                  </v-card-subtitle>
                  <v-card-text>
                    Behind each great product there's an equally great story and
                    often a fascinating team of individual experts. The same
                    virtues: toughness, creativity, and engenuity - define many
                    of the product originators.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col  lg="6"  xl="6" cols="12">
            <v-card theme="theme" class="p3 dark-purple">
              <v-img width="100%" src="/assets/assets-001.png" />
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card theme="accent" class="p12 dark-pink">
        <v-row align="center" justify="center" minHeight="600">
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-row align="center" justify="start" minHeight="600">
              <v-col  lg="6"  xl="6" cols="12">
                <v-card theme="accent" class="dark-pink p4">
                  <v-img width="100%" src="/gems/globe.svg" />
                </v-card>
              </v-col>
              <v-col  lg="6"  xl="6" cols="12">
                <v-card theme="accent" class="p3 dark-pink">
                  <v-card-title>
                    <h2 class="text-h2">Our vision</h2>
                  </v-card-title>
                  <v-card-subtitle>
                    To <span class="text-pink">inspire</span> innovative brands
                    in Africa
                  </v-card-subtitle>
                  <v-card-text>
                    We are doing this by taking a revolutionary approach, that
                    understands the impact branding campaigns can bring to the
                    growing customer demands and plan to maximize value for
                    creative brands.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row justify="start">
              <v-col sm="12" md="12" lg="4"  xl="4" v-for="(step, index) in steps" :key="index">
                <v-card theme="theme" :class="`p3 dark-${step.theme}`">
                  <v-row align="center" justify="start">
                    <v-col  lg="6"  xl="6" cols="12">
                      <v-card-title
                        v-html="step.title"
                        :class="`text-${step.theme}`"
                      ></v-card-title>
                      <v-card-text
                        v-html="`${step.subtitle} ${step.text}`"
                      ></v-card-text>
                    </v-col>
                    <v-col  lg="6"  xl="6" cols="12">
                      <v-card
                        theme="theme"
                        :class="`px-2 py-2 dark-${step.theme}`"
                      >
                        <v-img :src="step.src" />
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
