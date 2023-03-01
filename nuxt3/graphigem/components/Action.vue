<template>
  <v-card rounded="0" :theme="theme" class="p12 text-center">
    <v-row justify="center">
      <v-col lg="6" cols="12">
        <v-row justify="center">
          <v-col lg="12" md="12" cols="12">
            <h2 class="text-h2" v-html="title"></h2>
          </v-col>
          <v-col lg="12" cols="12">
            <v-card-subtitle v-html="subtitle"></v-card-subtitle>
          </v-col>
          <v-col lg="3" md="4" cols="12">
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
<script setup lang="ts">
const props = defineProps({
  theme: { type: [String], default: "green" },
  title: { type: [String], default: "Delight your customer" },
  subtitle: {
    type: [String],
    default: `If you were to ask us, what's it like to launch a successful campaign? Our answer is simple: It's always a delight working with upcoming brands making their dreams a reality.`,
  },
});
</script>
