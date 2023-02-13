<template>
  <v-footer padless class="text-center-sm-and-down">
    <v-card theme="accent" class="p3" rounded="0" width="100%">
      <v-row justify="center">
        <v-col cols="auto">
          <v-img width="102" height="36" src="/logos/icon-text-010.png" />
        </v-col>
        <v-spacer class="hidden-md-and-down"></v-spacer>
        <v-col md="auto" cols="12">
          <v-row justify="end" no-gutters="">
            <v-col md="auto" cols="12" v-for="link in links" :key="link">
              <NuxtLink :to="link.route">
                <v-btn
                  :color="link.theme"
                  :variant="link.variant"
                  class="mx-2"
                  rounded="xl"
                >
                  {{ link.title }}
                </v-btn>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="12" cols="12" class="text-center">
          <v-card-text>Graphigem Digital &copy; {{ currentYear }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
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
        theme: "white",
      },
    ],
  }),
};
</script>
