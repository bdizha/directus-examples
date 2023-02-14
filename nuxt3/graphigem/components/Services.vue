<template>
  <v-card rounded="0" theme="accent" class="p12 dark-green">
    <v-row align="center" justify="center">
      <v-col lg="9" md="6" sm="12" cols="12">
        <v-row align="center" justify="start">
          <v-col v-if="false" lg="6" cols="12">
            <v-card theme="theme" class="dark-green p3">
              <v-img width="100%" src="/gems/globe.svg" />
            </v-card>
          </v-col>
          <v-col lg="6" cols="12">
            <v-card-title>
              <h2 class="text-h2">
                <span class="text-green">Our</span> services
              </h2>
            </v-card-title>
            <v-card-subtitle>
              Get to know and offer your customers tailored products that
              resonate with their distinct lifestyles and expectations. Switch
              on the lights and become the pilot of your brand's rocket flight
              to the skies.
            </v-card-subtitle>
            <v-card-text>
              Said differently, we enable you to uniquely delight your customers
              in both systematic and more strategic ways with better returns
              alongside your auto-scale branding experts at Graphigem Digital.
              We've assembled the world's greatest creative talent to help you
              connect your story and contextual customer demands, seamlessly.
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row align="center" justify="start">
          <v-col
            lg="3"
            md="6"
            sm="12"
            v-for="(service, index) in services"
            :key="index"
          >
            <v-card
              theme="theme"
              :class="`p3 dark-${service.theme}`"
              min-height="450"
            >
              <v-row align="start" justify="start">
                <v-col lg="12" cols="12">
                  <v-img height="100%" :src="service.src" />
                </v-col>
                <v-col cols="12">
                  <v-card-title v-html="service.title"></v-card-title>
                  <v-card-text>
                    <b v-html="service.subtitle"></b>
                    {{ service.text }}
                  </v-card-text>
                  <v-card-actions v-if="service.action">
                    <NuxtLink to="/#contact-us">
                      <v-btn
                        block
                        :color="service.theme"
                        size="x-large"
                        variant="outlined"
                        >{{ service.action }}</v-btn
                      >
                    </NuxtLink>
                  </v-card-actions>
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
const services = [
  {
    src: "/gees/gees-013.png",
    theme: "yellow",
    title: "<span class='text-yellow'>Original</span> Branding",
    subtitle:
      "<span class='text-yellow'>Build</span> and launch bold campaign story lines.",
    text: "Great companies have great dreams, and it's those great stories - when narrated creatively - that connect with culture and create demand. Those that can't tell their story will fail.",
    action: "Get started",
  },
  {
    src: "/gees/gees-006.png",
    theme: "green",
    title: "<span class='text-green'>On-demand</span> Branding",
    subtitle:
      "<span class='text-green'>Automate</span> your brand's loyal audience and grow.",
    text: "We understand the challenges that brands come across allowing us to provide your brabd with advice based on our first-hand campaign experiences. ",
    action: "Get started",
  },
  {
    src: "/gees/gees-009.png",
    theme: "pink",
    title: "<span class='text-pink'>Virtual</span> Branding",
    subtitle:
      "<span class='text-pink'>Adjust</span> to creative input and connect with audience.",
    text: "Internet culture is now culture. We help broadcast your brand story through various ways that resonate well with your product's appeal capabilities. ",
    action: "Get started",
  },
  {
    src: "/gees/gees-003.png",
    theme: "purple",
    title: "<span class='text-purple'>Agent</span> Branding",
    subtitle:
      "<span class='text-pink'>Adopt</span> and train an AI powered campaign agent model.",
    text: "Welcome a new world of automated blochain solutions. Imagine the special role that a branded virtual campaign can achieve for your brand beyond any limits.",
    action: "Get started",
  },
];
</script>
