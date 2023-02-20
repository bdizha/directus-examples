<template>
  <v-card rounded="0" theme="theme" class="p12 dark-green">
    <v-row align="center" justify="center">
      <v-col lg="9" cols="12" class="text-center">
        <v-card-subtitle>
          <h2 class="text-h2">
            <span class="text-purple">Making,</span>&nbsp;
            <span class="text-pink">Sense.</span>&nbsp;
            <span class="text-green">Making,</span>&nbsp;
            <span class="text-yellow">Value.</span>
          </h2>
        </v-card-subtitle>
      </v-col>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col lg="4" cols="12">
            <v-row align="center" justify="end">
              <v-col sm="12" v-for="(value, index) in values.left" :key="index">
                <v-row align="center" justify="center">
                  <v-col cols="6">
                    <v-card
                      theme="accent"
                      min-height="240px"
                      rounded="xl" :class="`p2 dark-${value.theme}`"
                    >
                      <v-card-title :class="`text-${value.theme}`">
                        {{ value.title }}
                      </v-card-title>
                      <v-card-text v-html="value.text"></v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card
                      theme="accent"
                      min-height="240px"
                      :class="`p3 dark-${value.theme}`"
                    >
                      <Image :width="192" :height="192" :src="value.src" />
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col lg="4" cols="12">
            <v-card theme="accent" rounded="xl" :class="`p2 dark-green`" min-height="120">
              <Image height="600" src="/icons/icons-004.png" />
            </v-card>
          </v-col>
          <v-col lg="4" cols="12">
            <v-row align="top" justify="start">
              <v-col
                sm="12"
                v-for="(value, index) in values.right"
                :key="value.src"
              >
                <v-row align="center" justify="center">
                  <v-col cols="6">
                    <v-card
                      theme="accent"
                      :class="`p3 dark-${value.theme}`"
                    >
                      <Image :width="192" :height="192" :src="value.src" />
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card
                      theme="accent"
                      min-height="240px"
                      rounded="xl" :class="`p2 dark-${value.theme}`"
                    >
                      <v-card-title :class="`text-${value.theme}`">
                        {{ value.title }}
                      </v-card-title>
                      <v-card-text v-html="value.text"></v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
const values = {
  left: [
    {
      src: "/icons/icons-008.png",
      theme: "purple",
      title: "Envision",
      text: "<span class='text-purple'>Build</span> on it. Play with it, then give it the perfect squeeze. Step in to unlock it.",
    },
    {
      src: "/icons/icons-007.png",
      theme: "yellow",
      title: "Launch",
      text: "<span class='text-yellow'>Craft</span> a bolder branding strategy and delight your target audience.",
    },
  ],
  right: [
    {
      src: "/icons/icons-009.png",
      theme: "green",
      title: "Evaluate",
      text: "<span class='text-green'>Reflect</span> on your previous campaigns and inform the next iteration.",
    },
    {
      src: "/icons/icons-006.png",
      theme: "pink",
      title: "Iterate",
      text: "<span class='text-pink'>Adjust</span> gears and iterate it. Scale it with demand and unleash it. ",
    },
  ],
};
</script>
