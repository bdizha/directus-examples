<template>
  <v-card rounded="0" theme="theme" class="p12">
    <v-row align="center" justify="center">
      <v-col lg="12" md="12" sm="12" cols="12">
        <v-row align="center" justify="end">
          <v-col lg="6" cols="12">
            <v-card-title>
              <h2 class="text-h2">
                <span class="text-green">Our</span> services
              </h2>
            </v-card-title>
            <v-card-subtitle
              >Get to know your customers enough and offer them tailored
              products that resonate with their distinct lifestyles and
              expectations. Switch on the lights and become the pilot of your
              brand's rocket flight to the skies. Those that can't tell their
              story will fail.
            </v-card-subtitle>
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
              rounded="xl"
              :class="`p3 dark-${service.theme}`"
              min-height="450"
            >
              <v-row align="start" justify="start">
                <v-col lg="4" cols="12">
                  <Image :width="600" :height="600" :src="service.src" />
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
                        rounded="xl"
                        class="px-5"
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
    src: "/gems/full-001.png",
    theme: "green",
    title: "<span class='text-green'>Original</span> Branding",
    subtitle:
      "<span class='text-green'>Build</span> and launch bold campaign story lines.",
    text: "Great companies have great dreams, and it's those great stories - when narrated creatively - that connect with culture and create demand.",
    action: "Get started",
  },
  {
    src: "/gems/full-004.png",
    theme: "yellow",
    title: "<span class='text-yellow'>On-demand</span> Branding",
    subtitle:
      "<span class='text-yellow'>Automate</span> your brand's loyal audience and grow.",
    text: "We understand the challenges that brands come across allowing us to provide your brand with advice based on our first-hand campaign experiences. ",
    action: "Get started",
  },
  {
    src: "/gems/full-003.png",
    theme: "purple",
    title: "<span class='text-purple'>Virtual</span> Branding",
    subtitle:
      "<span class='text-purple'>Adjust</span> to creative input and connect with audience.",
    text: "Internet culture is now culture. We help broadcast your brand story through various ways that resonate well with your product's appeal capabilities. ",
    action: "Get started",
  },
  {
    src: "/gems/full-002.png",
    theme: "pink",
    title: "<span class='text-pink'>Agent</span> Branding",
    subtitle:
      "<span class='text-pink'>Adopt</span> and train AI powered campaign agent models.",
    text: "Welcome a new world of imagination. Imagine the special role that a branded virtual campaign can achieve for your brand's market share and beyond.",
    action: "Get started",
  },
];
</script>
