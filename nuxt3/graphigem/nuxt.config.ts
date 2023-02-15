import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["nuxt-directus", "@nuxt/image-edge"],
  css: ["~/assets/less/app.scss", "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },
  app: {
    head: {
      charset: "utf-16",
      viewport:
        "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover",
      title: "Graphigem Digital",
      meta: [
        {
          name: "description",
          content:
            "Delight your customers. Build bold campaigns. Unleash brand loyalty. Incraese market share. Graphigem provides all the branding tools companies need to succeed today.",
        },
        {
          name: "robots",
          content:
            "max-snippet:-1,max-image-preview:large,max-video-preview:-1",
        },
        {
          name: "og:url",
          content: "https://graphige.com",
        },
        {
          name: "og:site_name",
          content: "Graphigem Digital",
        },
        {
          name: "og:type",
          content: "website",
        },
      ],
      link: [
        { rel: "icon", href: "/logos/icon-003.png" },
        { rel: "icon", sizes: "16x16", href: "/logos/icon-003.png" },
      ],
    },
  },
});
