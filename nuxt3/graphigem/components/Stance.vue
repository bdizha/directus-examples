<template>
  <v-card theme="accent" class="p12 dark-green">
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
            <v-row align="top" justify="end">
              <v-col
                sm="6"
                v-for="(value, index) in values.left"
                :key="index"
              >
                <v-row align="center" justify="center">
                  <v-col cols="12">
                    <v-card theme="theme" :class="`p2 dark-${value.theme}`">
                      <v-img height="100%" :src="value.src" />
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card theme="theme" :class="`p2 dark-${value.theme}`">
                      <v-row dense align="center" justify="center">
                        <v-col cols="12">
                          <v-card-title :class="`text-${value.theme}`">
                            {{ value.title }}
                          </v-card-title>
                          <v-card-text v-html="value.text"></v-card-text>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col lg="4" cols="12">
            <v-card theme="theme" :class="`p2 dark-green`" min-height="120">
              <v-img height="600" src="/icons/icons-004.png" />
            </v-card>
          </v-col>
          <v-col lg="4" cols="12">
            <v-row align="top" justify="start">
              <v-col
                sm="6"
                v-for="(value, index) in values.right"
                :key="value.src"
              >
                <v-row align="center" justify="center">
                  <v-col cols="12">
                    <v-card theme="theme" :class="`p2 dark-${value.theme}`">
                      <v-img height="100%" :src="value.src" />
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card theme="theme" :class="`p2 dark-${value.theme}`">
                      <v-row dense align="center" justify="center">
                        <v-col cols="12">
                          <v-card-title :class="`text-${value.theme}`">
                            {{ value.title }}
                          </v-card-title>
                          <v-card-text v-html="value.text"></v-card-text>
                        </v-col>
                      </v-row>
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
      src: "/gems/full-003.png",
      theme: "purple",
      title: "Envision",
      text: "<span class='text-purple'>Build</span> on it. Play with it, then give it the perfect squeeze. Step in to unlock it.",
    },
    {
      src: "/gems/full-002.png",
      theme: "pink",
      title: "Launch",
      text: "<span class='text-pink'>Adjust</span> gears and iterate it. Scale it with us and unleash your brand. ",
    },
  ],
  right: [
    {
      src: "/gems/full-001.png",
      theme: "green",
      title: "Evaluate",
      text: "<span class='text-green'>Reflect</span> on your previous campaigns and seek insights that inform the next iteration.",
    },
    {
      src: "/gems/full-004.png",
      theme: "yellow",
      title: "Iterate",
      text: "<span class='text-yellow'>Craft</span> a full branding strategy to narrate your brand story for your target audience.",
    },
  ],
};
</script>
