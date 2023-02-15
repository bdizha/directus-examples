<template>
  <v-card rounded="0" theme="accent" class="p12 dark-purple">
    <v-row align="center" justify="center">
      <v-col lg="9" md="6" sm="12" cols="12">
        <v-row align="center" justify="start">
          <v-col lg="6" cols="12">
            <v-card-title
              ><h2 class="text-h2">
                <span class="text-purple">Our</span> approach
              </h2>
            </v-card-title>
            <v-card-subtitle
              >If you were to ask us, what's it like to launch a successful
              campaign? Our answer is simple: It's always a delight working with
              upcoming brands making their dreams a reality.
            </v-card-subtitle>
            <v-card-text>
              <span class="text-purple">Catalyze</span> your brands' branding
              efforts with the support you need to succeed in a variety of
              today's specialized and mostly virtual marketplaces around the
              world.
            </v-card-text>
            <v-card-text>
              <span class="text-purple">Compliment</span>
              your customer engagement efforts with your potential and existing
              customers in bolder ways and unleash a common ground with them for
              mutual gain.
            </v-card-text>
            <v-card-text>
              <span class="text-purple">Delight</span> your audience who always
              expect to be a part of a story line that's bolder than their
              wildest expectations and Graphigem is your digital campaign
              partner of choice.
            </v-card-text>
          </v-col>
          <v-col lg="6" cols="12">
            <v-card theme="theme" class="dark-purple p3">
              <Image :width="600" :height="600" src="/icons/icons-005.png" />
            </v-card>
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
            cols="12"
            v-for="(step, index) in steps"
            :key="index"
          >
            <v-card theme="theme" :class="`p3 dark-${step.theme}`">
              <v-row align="center" justify="start">
                <v-col lg="3" cols="6">
                  <Image :src="step.src" />
                </v-col>
                <v-col lg="9" cols="12">
                  <v-card-title
                    v-html="step.title"
                    :class="`text-${step.theme}`"
                  ></v-card-title>
                  <v-card-text
                    v-html="`${step.subtitle} ${step.text}`"
                  ></v-card-text>
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
const steps = [
  {
    title: "Build <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-yellow'>Launch</span> a bold campaign and shoot for the stars by capturing the imagination of your audience's and leveraging AI customer learning models.",
    text: "",
    src: "/icons/icons-007.png",
    theme: "yellow",
  },
  {
    title: "Apply <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-green'>Discover</span> and highlight incentives for brand loyalty and target specific demographics of your potential customers on social & web3 platforms.",
    text: "",
    src: "/icons/icons-009.png",
    theme: "green",
  },
  {
    title: "Evaluate <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-pink'>Unleash</span> new insights and repeat building again while adding adjustments to the buy-in effects of your campaign on real and potential customers.",
    text: "",
    src: "/icons/icons-006.png",
    theme: "pink",
  },
];

//  and get to target specific demographics of your potential customers of your brand on social & web3 platforms.
</script>
