import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
	directus: {
		token: process.env.DIRECTUS_STATIC_TOKEN,
		url: process.env.DIRECTUS_URL
	},
	css: ['vuetify/lib/styles/main.sass'],
	build: {
	  transpile: ['vuetify'],
	},
});
