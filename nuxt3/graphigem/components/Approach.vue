<template>
  <v-card theme="accent" class="p12 dark-pink">
    <v-row align="center" justify="center" minHeight="600">
      <v-col cols="9">
        <v-row align="center" justify="end" minHeight="600">
          <v-col lg="6" cols="12">
            <v-card-title>
              <h2 class="text-h2">
                <span class="text-pink">Our</span> appreach
              </h2>
            </v-card-title>
            <v-card-subtitle>
              If you ask us, what's it like? And the answer is simple: It's
              always a dream as it were.
            </v-card-subtitle>
            <v-card-text>
              Providing innovative brands the support they need to succeed in a
              variety of today's marketplaces. Engage your existing and new
              customers in hyper ways and unleash a common ground with your
              customers. Customers enjoy being part of a story line that's
              bolder than their wildest expectations and Graphigem is your
              digital campaign partner of your choice, anytime.
            </v-card-text>
          </v-col>
          <v-col lg="6" cols="12">
            <v-row align="center" justify="start">
              <v-col cols="12">
                <v-card theme="theme" class="dark-pink p4">
                  <v-img width="100%" src="/icons/icons-005.png" />
                </v-card>
              </v-col>
            </v-row>
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
                <v-col lg="6" xl="6" cols="6">
                  <v-img :src="step.src" />
                </v-col>
                <v-col lg="6" cols="12">
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
      "<span class='text-yellow'>Launch</span> a bold campaign and shoot for the stars by capturing the imagination of culture and get to target specific demographics of your potential customers of your brand on social & web3 platforms.",
    text: "",
    src: "/icons/icons-007.png",
    theme: "yellow",
  },
  {
    title: "Apply <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-green'>Discover</span> and highlight reasons for brand loyalty to your potential customers through the Graphigem's Gem Plan campaign strategy and never doubt the impact and effect of your campaigns again.",
    text: "",
    src: "/icons/icons-009.png",
    theme: "green",
  },
  {
    title: "Evaluate <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-pink'>Unleash</span> new insights and repeat building again with some adjustments to the buy-in effects of your campaign on simulated customer dsata sets we provide you to exxperiment with real contexts.",
    text: "",
    src: "/icons/icons-006.png",
    theme: "pink",
  },
];
</script>
