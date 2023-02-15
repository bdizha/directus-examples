<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-card rounded="0" theme="accent" class="p12 dark-purple">
        <v-row align="center" justify="center" minHeight="600">
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-row align="center" justify="start" minHeight="600">
              <v-col lg="6" cols="12">
                <v-row align="center" justify="start">
                  <v-col cols="12">
                    <v-card-title>
                      <h2 class="text-h2">Join our team</h2>
                    </v-card-title>
                  </v-col>
                  <v-col lg="12" cols="12">
                    <v-card-subtitle>
                      Graphigem Digital is on the lookout for talented, market
                      leading individuals, who thrive in agile and innovative
                      environments. We helps brands create value in the virtual
                      world.
                    </v-card-subtitle>
                  </v-col>
                  <v-col lg="12" cols="12">
                    <v-card-text>
                      Join us on our incredible journey as we grow the
                      organisation and our client offering. We are a strategic
                      and creative consultancy guiding businesses through
                      crypto, NFTs, blockchain and the Metaverse.
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="6" cols="12">
                <v-row align="center" justify="start">
                  <v-col cols="12">
                    <v-card theme="theme" class="dark-purple p3">
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
                <v-card theme="theme" :class="`p3 dark-${step.theme}`">
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
      <v-card rounded="0" theme="theme" class="p12 text-center dark-purple">
        <v-row justify="center" no-gutters>
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card-title
                  ><h2 class="text-h2">
                    Work alongside market leading talent.
                  </h2>
                </v-card-title>
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
                    <v-card theme="accent" class="p12 text-center dark-purple">
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
      <v-card rounded="0" theme="accent" class="p12 dark-purple">
        <v-row align="center" justify="center">
          <v-col sm="12" md="12" lg="4" xl="4" class="text-center">
            <v-row align="center" justify="center">
              <v-col lg="6" xl="6" class="p6 text-left">
                <Image height="100" src="/logos/icon-004.png" />
              </v-col>
              <v-col cols="12" class="text-center">
                <v-card-subtitle>
                  We are a world renowned talent agency for marketing, PR &
                  communications, digital, creative, investor relations and web3
                  specialists.
                </v-card-subtitle>
              </v-col>
              <v-col cols="12">
                <v-card-text>
                  We support you with end to end recruitment. We attract, source
                  and assess candidates to meet your requirements, by leveraging
                  our community to tap into those harder to find roles to make
                  sure you have access, first.
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
const steps = [];
const takes = [
  {
    src: "/icons/icons-008.png",
    theme: "purple",
    text: "On emerging technologies and disruptive brands.",
  },
  {
    src: "/icons/icons-005.png",
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
