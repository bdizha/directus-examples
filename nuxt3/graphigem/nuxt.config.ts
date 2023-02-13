import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["nuxt-directus"],
  directus: {
    token: process.env.DIRECTUS_STATIC_TOKEN,
    url: process.env.DIRECTUS_URL,
  },
  css: [
    "~/assets/less/app.scss",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },
});
