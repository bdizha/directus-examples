<template>
  <v-footer padless class="text-center-sm-and-down">
    <v-card theme="accent" rounded="xl" class="p12" width="100%">
      <v-row justify="center">
        <v-col cols="auto">
          <v-row justify="center">
            <v-col lg="auto" cols="12">
              <v-card theme="theme" rounded="xl" class="p3">
                <Image
                  class="hidden-md-and-down"
                  width="36"
                  height="36"
                  src="/logos/footer.png"
                />
                <Image
                  class="hidden-lg-and-up"
                  width="300"
                  height="300"
                  src="/logos/footer.png"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="1" cols="12" class="hidden-lg-and-up text-center">
          <v-card theme="theme" rounded="xl" class="p3">
            <v-card-subtitle> Delight your customer </v-card-subtitle>
          </v-card>
        </v-col>
        <v-spacer class="hidden-md-and-down"></v-spacer>
        <v-col class="hidden-md-and-down" md="auto" cols="12">
          <v-row justify="end">
            <v-col md="auto" cols="12" v-for="link in links" :key="link">
              <NuxtLink :to="link.route">
                <v-btn
                  :color="link.theme"
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
              <v-card theme="theme" rounded="xl" class="p3">
                <v-card-text> Delight your customer </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" class="hidden-lg-and-up text-center">
              <v-row justify="end">
                <v-col md="auto" cols="12" v-for="link in links" :key="link">
                  <NuxtLink :to="link.route">
                    <v-card theme="theme" rounded="xl" class="p3">
                      <v-btn
                        :color="link.theme"
                        :variant="link.variant"
                        class="mx-1"
                        rounded="xl"
                      >
                        {{ link.title }}
                      </v-btn>
                    </v-card>
                  </NuxtLink>
                </v-col>
              </v-row>
            </v-col>
            <v-col lg="6" cols="12" class="text-center">
              <v-card theme="theme" rounded="xl" class="p3">
                <v-card-text
                  >Graphigem Digital &copy; {{ currentYear }}</v-card-text
                >
              </v-card>
            </v-col>
            <v-col md="3" cols="12" class="text-right text-center-sm-and-down">
              <v-card theme="theme" rounded="xl" class="p3">
                <NuxtLink to="/privacy">
                  <v-btn size="x-large" color="white" variant="text" class="mx-1" rounded="xl">
                    Privacy
                  </v-btn>
                </NuxtLink>
              </v-card>
            </v-col>
          </v-row>
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
