<template>
  <div class="header">
    <v-app-bar>
      <template v-slot:prepend align="start">
        <NuxtLink to="/">
          <Image
            width="102"
            height="36"
            src="/logos/icon-text-016.png"
            rounded="0"
          />
        </NuxtLink>
      </template>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-app-bar-nav-icon
          color="accent"
          class="hidden-lg-and-up text-right"
          @click="drawer = !drawer"
        >
        </v-app-bar-nav-icon>
        <v-sheet class="hidden-md-and-down text-right">
          <NuxtLink :to="link.route" v-for="link in links" :key="link">
            <v-btn
              color="white"
              :variant="link.variant"
              class="mx-1"
              rounded="xl"
            >
              {{ link.title }}
            </v-btn>
          </NuxtLink>
        </v-sheet>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" width="100%" temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link">
            <v-list-item-title>
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
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    currentYear: new Date().getFullYear(),
    links: [
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
        theme: "yellow",
      },
    ],
  }),
};
</script>
