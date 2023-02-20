<template>
  <v-card rounded="0" theme="theme" class="p12">
    <v-row align="center" justify="center">
      <v-col lg="12" md="6" sm="12" cols="12">
        <v-row align="center" justify="start">
          <v-col lg="6" cols="12">
            <v-card theme="accent" rounded="xl" :class="`p3 dark-pink`">
              <v-card-title
                ><h2 class="text-h2">
                  <span class="text-pink">Our</span> approach
                </h2>
              </v-card-title>
              <v-card-subtitle
                >If you were to ask us, what's it like to launch a successful
                campaign? Our answer is simple: It's always a delight working
                with upcoming brands making their dreams a reality.
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col lg="12" cols="12">
            <v-row justify="start">
              <v-col
                lg="3"
                cols="12"
                v-for="(step, index) in steps"
                :key="index"
              >
                <v-card
                  theme="accent"
                  rounded="xl"
                  :class="`p3 dark-${step.theme}`"
                >
                  <v-row align="center" justify="start">
                    <v-col lg="12" cols="12">
                      <Image :src="step.src" />
                    </v-col>
                    <v-col lg="12" cols="12">
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
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
const steps = [
  {
    title: "Build <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-pink'>Launch</span> a bold campaign and shoot for the stars by capturing the imagination of your audience and leveraging AI customer learning models.",
    text: "",
    src: "/banners/GDBanner_16.png",
    theme: "pink",
  },
  {
    title: "Apply <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-yellow'>Discover</span> and highlight incentives for brand loyalty and target specific demographics of your potential customers on social & web3 platforms.",
    text: "",
    src: "/banners/GDBanner_17.png",
    theme: "yellow",
  },
  {
    title: "Evaluate <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-green'>Unleash</span> new insights and repeat building again while adding adjustments to the buy-in effects of your campaign on real and potential customers.",
    text: "",
    src: "/banners/GDBanner_18.png",
    theme: "green",
  },
  {
    title: "Repeat <span class='text-white'> it</span>",
    subtitle:
      "<span class='text-purple'>Catalyze</span> your branding efforts alongside our branding experts at Graphige Dital. Take control of the outcome of your marketing investment today.",
    text: "",
    src: "/banners/GDBanner_19.png",
    theme: "purple",
  },
];
</script>
