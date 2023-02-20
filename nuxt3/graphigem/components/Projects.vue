<template>
  <v-card rounded="0" theme="accent" class="p12">
    <v-row align="center" justify="center">
      <v-col lg="12" md="12" sm="12" cols="12">
        <v-row align="center" justify="center">
          <v-col lg="4" md="6" cols="12" class="text-center">
            <v-card-title>
              <h2 class="text-h2">
                <span class="text-yellow">Our</span> productions
              </h2>
            </v-card-title>
            <v-card-text
              >If it doesntext it isn't informative and creative enough to
              the consumer in target. Attend to the minute details of your
              product details and formulate a story that sells.
            </v-card-text>
          </v-col>
          <v-col lg="12" cols="12">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-tabs
                  v-model="tab"
                  color="deep-purple-accent-4"
                  align-tabs="center"
                  class="mb-6"
                >
                  <v-tab
                    v-for="project in projects"
                    :color="project.theme"
                    :value="project"
                    >{{ project.title }}</v-tab
                  >
                </v-tabs>
              </v-col>
              <v-col cols="12">
                <v-window v-model="tab">
                  <v-window-item
                    v-for="project in projects"
                    :key="project"
                    :value="project"
                  >
                    <v-slide-group
                      v-model="cast"
                      selected-class="bg-success"
                      show-arrows
                    >
                      <v-slide-group-item
                        v-for="item in project.items"
                        :key="item"
                        v-slot="{ isSelected, toggle, selectedClass }"
                      >
                        <div class="p2">
                          <v-card
                            theme="accent"
                            width="450px"
                            rounded="xl"
                            :class="`p3 dark-${project.theme}`"
                          >
                            <Image width="600" height="600" :src="item.src" />
                          </v-card>
                        </div>
                      </v-slide-group-item>
                    </v-slide-group>
                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    tab: null,
    projects: [
      {
        src: "/gees/gees-013.png",
        theme: "yellow",
        title: "Films",
        items: [
          {
            src: "/cast/royal-bride/Welcome.png",
            title: "Royal Bride",
            subtitle: "",
            text: "",
          },
          {
            src: "/cast/bold-girls/Welcome.png",
            title: "Bold Girls",
            subtitle: "",
            text: "",
          },
          {
            src: "/cast/tribal-combat/Welcome.png",
            title: "Trubal Combat",
            subtitle: "",
            text: "",
          },
          {
            src: "/cast/bold-man/Welcome.png",
            title: "Bold Man",
            subtitle: "",
            text: "",
          },
          {
            src: "/cast/bold-and-famous/Welcome.png",
            title: "Bold & Famous",
            subtitle: "",
            text: "",
          },
        ],
      },
      {
        src: "/gees/gees-013.png",
        theme: "purple",
        title: "Sneakers",
        items: [
          {
            src: "/items/bold-sneaker-001.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-sneaker-002.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-sneaker-003.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-sneaker-004.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-sneaker-005.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: "",
          },
        ],
      },
      {
        src: "/gees/gees-013.png",
        theme: "pink",
        title: "Handbags",
        items: [
          {
            src: "/items/bold-handbags-001.png",
            title: "Bold Handbag",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-handbags-002.png",
            title: "Bold Handbag",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-handbags-003.png",
            title: "Bold Handbag",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-handbags-004.png",
            title: "Bold Handbag",
            subtitle: "",
            text: "",
          },
        ],
      },
      {
        src: "/gees/gees-013.png",
        theme: "yellow",
        title: "Watches",
        items: [
          {
            src: "/items/bold-watch-001.png",
            title: "Bold Watch",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-watch-002.png",
            title: "Bold Watch",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-watch-003.png",
            title: "Bold Watch",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-watch-004.png",
            title: "Bold Watch",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-watch-005.png",
            title: "Bold Watch",
            subtitle: "",
            text: "",
          },
        ],
      },
      {
        src: "/gees/gees-013.png",
        theme: "green",
        title: "Hoodies",
        items: [
          {
            src: "/items/bold-hoodie-001.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-hoodie-002.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-hoodie-003.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-hoodie-004.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-hoodie-005.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-hoodie-006.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-hoodie-007.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-hoodie-008.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/bold-hoodie-009.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: "",
          },
        ],
      },
      {
        src: "/gees/gees-013.png",
        theme: "pink",
        title: "Commercials",
        items: [
          {
            src: "/items/watch-hands-001.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/watch-hands-002.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/watch-hands-003.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/watch-hands-004.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: "",
          },
          {
            src: "/items/watch-hands-005.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: "",
          },
        ],
      },
    ],
  }),
};
</script>
