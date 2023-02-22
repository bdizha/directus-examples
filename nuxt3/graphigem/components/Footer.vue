<template>
  <v-footer padless class="text-center-sm-and-down">
    <v-card theme="accent" rounded="xl" class="p12" width="100%">
      <v-row justify="center">
        <v-col cols="auto">
          <v-row justify="center">
            <v-col lg="auto" cols="12">
              <NuxtLink to="/">
                <Image
                  :width="mobile ? 72 : 102"
                  :height="mobile ? 72 : 36"
                  :src="`/logos/${mobile ? 'icon' : 'icon-text-010'}.png`"
                  rounded="0"
                />
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="1" cols="12" class="hidden-lg-and-up text-center">
          <h4 class="text-light">Delight your customer</h4>
        </v-col>
        <v-spacer class="hidden-md-and-down"></v-spacer>
        <v-col class="hidden-md-and-down" md="auto" cols="12">
          <v-row justify="end" no-gutters="true">
            <v-col md="auto" cols="12" v-for="link in links" :key="link">
              <NuxtLink :to="link.route">
                <v-btn
                  color="white"
                  :variant="link.variant"
                  class="mx-1"
                  rounded="xl"
                >
                  {{ link.title }}
                </v-btn>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="12" cols="12" class="text-center">
          <v-row justify="space-between">
            <v-col lg="3" cols="12" class="hidden-sm-and-down text-left">
              <v-card-text> Delight your customer </v-card-text>
            </v-col>
            <v-col cols="12" class="hidden-lg-and-up text-center">
              <v-row justify="end" no-gutters>
                <v-col md="auto" cols="12" v-for="link in links" :key="link">
                  <NuxtLink :to="link.route">
                    <v-btn
                      size="x-large"
                      color="white"
                      variant="text"
                      class="mx-1"
                      rounded="xl"
                    >
                      {{ link.title }}
                    </v-btn>
                  </NuxtLink>
                </v-col>
              </v-row>
            </v-col>
            <v-col lg="6" cols="12" class="text-center">
              <v-card-text
                >Graphigem Digital &copy; {{ currentYear }}</v-card-text
              >
            </v-col>
            <v-col md="3" cols="12" class="text-right text-center-sm-and-down">
              <NuxtLink to="/privacy">
                <v-btn
                  size="x-large"
                  color="white"
                  variant="text"
                  class="mx-1"
                  rounded="xl"
                >
                  Privacy Policy
                </v-btn>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mobile } = useDisplay();
const currentYear = new Date().getFullYear();
const links = [
  { title: "Home", variant: "text", route: "/", theme: "purple" },
  { title: "Services", variant: "text", route: "/services", theme: "pink" },
  { title: "Careers", variant: "text", route: "/careers", theme: "green" },
  {
    title: "About Us",
    variant: "text",
    route: "/about-us",
    theme: "yellow",
  },
  {
    title: "Get in touch",
    variant: "outlined",
    route: "/#contact-us",
    theme: "white",
  },
];
</script>
