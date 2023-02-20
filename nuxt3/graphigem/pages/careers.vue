<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-card rounded="0" theme="accent" class="p12 dark-green">
        <v-row align="center" justify="center" minHeight="600">
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-row align="center" justify="start" minHeight="600">
              <v-col lg="6" cols="12">
                <v-card-title>
                  <h2 class="text-h2">
                    <span class="text-green">Join</span> our team
                  </h2>
                </v-card-title>
                <v-card-text
                  >Join our mostly creative team, needless to mention, coupled
                  with branding, blockchain and gaming experts that are also
                  part of our digital services packages that we offer our
                  clients. Jump in and take part in our journey as we grow the
                  organisation and our client centric services. We are a
                  strategic and creative consultancy guiding businesses through
                  virtual apparel, branded collections, blockchain and the
                  Metaverse.
                </v-card-text>
              </v-col>
              <v-col lg="6" cols="12">
                <v-row align="center" justify="start">
                  <v-col cols="12">
                    <v-card theme="theme" rounded="xl" class="dark-green p3">
                      <Image width="100%" src="/icons/icons-011.png" />
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row justify="start">
              <v-col
                lg="4"
                md="6"
                sm="12"
                cols="12"
                v-for="(step, index) in steps"
                :key="index"
              >
                <v-card
                  theme="theme"
                  rounded="xl"
                  :class="`p3 dark-${step.theme}`"
                >
                  <v-row align="center" justify="start">
                    <v-col lg="6" cols="12">
                      <v-card
                        theme="theme"
                        :class="`px-2 py-2 dark-${step.theme}`"
                      >
                        <Image :src="step.src" />
                      </v-card>
                    </v-col>
                    <v-col lg="6" cols="12">
                      <v-card-title
                        v-html="step.title"
                        :class="`text-${step.theme}`"
                      ></v-card-title>
                      <v-card-text
                        v-html="`${step.subtitle} ${step.text}`"
                      ></v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card rounded="0" theme="theme" class="p12 dark-green">
        <v-row justify="center" no-gutters>
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-row align="center" justify="start">
              <v-col cols="6">
                <v-card-title
                  ><h2 class="text-h2"><span class="text-green">Your</span> schedule</h2>
                </v-card-title>
                <v-card-text
                  >Graphigem Digital is on the lookout for talented, recent
                  graduates, market leading individuals, who enjoy taking a
                  creative role in an unconventional digital agency set up. So
                  to mention, we all work remotely. Anyone can suggest the time
                  shifts that work best for them for better effects and we take
                  it from there with reschuduling on our end.
                </v-card-text>
              </v-col>
              <v-col cols="12">
                <v-row align="top" justify="start">
                  <v-col
                    lg="4"
                    md="6"
                    sm="12"
                    v-for="(take, index) in takes"
                    :key="index"
                  >
                    <v-card
                      theme="accent"
                      rounded="xl"
                      class="p12 text-center dark-green"
                    >
                      <v-row align="center" justify="center">
                        <v-col lg="6" cols="12">
                          <Image :width="600" :height="600" :src="take.src" />
                        </v-col>
                        <v-col cols="12">
                          <v-row align="center" justify="center">
                            <v-col cols="12">
                              <v-sheet theme="transparent" min-height="75">
                                <h4
                                  class="text-subtitle"
                                  v-html="take.text"
                                ></h4>
                              </v-sheet>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <Values></Values>
    </v-col>
    <v-col cols="12">
      <Gem></Gem>
    </v-col>
  </v-row>
</template>
<script setup>
const steps = [];
const takes = [
  {
    src: "/icons/icons-008.png",
    theme: "green",
    text: "On emerging technologies and disruptive brands.",
  },
  {
    src: "/icons/icons-011.png",
    theme: "green",
    text: "Where development and collaboration is core to our culture.",
  },
  {
    src: "/icons/icons-015.png",
    theme: "green",
    text: "In a high trust, autonomous environment that delivers at pace.",
  },
];
</script>
