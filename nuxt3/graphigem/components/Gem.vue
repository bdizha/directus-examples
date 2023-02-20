<template>
  <v-card rounded="0" theme="purple" class="p12">
    <v-row align="center" justify="center">
      <v-col sm="12" md="12" lg="4" xl="4" class="text-center">
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <v-card-subtitle>
              <span class="text-purple">Graphigem</span> helps brands create
              value in the virtual world. We are a strategic and creative
              consultancy guiding businesses through digital branding,
              collectibles, blockchain and the Virtual World.
            </v-card-subtitle>
          </v-col>
          <v-col cols="12" v-if="false">
            <v-card-text>
              We support you with end to end recruitment. We attract, source and
              assess candidates to meet your requirements, by leveraging our
              community to tap into those harder to find roles to make sure you
              have access, first.
            </v-card-text>
          </v-col>
          <v-col lg="4" cols="12">
            <NuxtLink to="/#contact-us">
              <v-btn
                block
                size="x-large"
                color="secondary"
                class="mx-1 p3"
                rounded="xl"
              >
                Get started
              </v-btn>
            </NuxtLink>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
