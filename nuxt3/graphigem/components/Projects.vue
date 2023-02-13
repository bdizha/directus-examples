<template>
  <v-card rounded="0" theme="theme" class="p12 dark-yellow">
    <v-row align="center" justify="center">
      <v-col lg="9" md="6" sm="12" cols="12">
        <v-row align="center" justify="start">
          <v-col lg="6" cols="12">
            <v-card-title>
              <h2 class="text-h2">Our Work</h2>
            </v-card-title>
            <v-card-text>
              If it doesn't sell, it isn't creative. 
              Brands have to decide what image they want for their brand.
              Image means personality. Products, like people, have
              personalities, and they can make or break them in the marketplace.
            </v-card-text>
            <v-card-text>
              "You will never win fame and fortune unless you invent big ideas.
              It takes a big idea to attract the attention of consumers and get
              them to buy your product. Unless your advertising contains a big
              idea, it will pass like a ship in the night" - David Ogilvy
            </v-card-text>
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
    title: "<span class='text-yellow'>Digital</span> Original",
    subtitle:
      "<span class='text-yellow'>Build</span> and launch bold campaign stories.",
    text: "Great companies have great stories, and it's those great stories - when told correctly - that connect with culture and create community. Those that can't communicate their story will fail. Those that can, will thrive. We've assembled the world's greatest creative talent to help you connect your story and contextual customer demands.",
    action: "Get started",
  },
  {
    src: "/gees/gees-006.png",
    theme: "green",
    title: "<span class='text-green'>On-demand</span> Branding",
    subtitle:
      "<span class='text-green'>Automate</span> your brand's loyal audience and grow.",
    text: "We understand the challenges that entrepreneurs come across because we are entrepreneurs, allowing us to provide you with advice based on our first-hand experience. We uniquely combine international experience with a deep understanding of culture dominated marketplace and the magic that showcase your products.",
    action: "Get started",
  },
  {
    src: "/gees/gees-009.png",
    theme: "pink",
    title: "<span class='text-pink'>Virtual</span> Branding",
    subtitle:
      "<span class='text-pink'>Adjust</span> to creative input and connect with audience.",
    text: "Internet culture is now culture. Virtual word is now media. We help distribute your story in the most cost effective way through virtual story telling, digital media, blockchain partners and our network of influential pioneers. Switch on the lights and become the pilot of your brand's rocket flight to the skies. Let's do it.",
    action: "Get started",
  },
  {
    src: "/gees/gees-003.png",
    theme: "purple",
    title: "<span class='text-purple'>Agent</span> Branding",
    subtitle:
      "<span class='text-pink'>Adopt</span> and train an AI powered campaign agent model.",
    text: "Welcome a new world of automated customer engagement. Imagine the role that's played by a popular branding mascot like Mickey Mouse. Great brands often overcome failure, derison, and sheer hardship to reach their goals. Many great brands are forging a unique way of life for the world of this generation and continue to shape it.",
    action: "Get started",
  },
];
</script>
