<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <Story></Story>
    </v-col>
    <v-col cols="12">
      <Vision></Vision>
    </v-col>
    <v-col cols="12">
      <Values></Values>
    </v-col>
    <v-col cols="12">
      <Team></Team>
    </v-col>
    <v-col cols="12">
      <Action :title="title" :subtitle="subtitle"></Action>
    </v-col>
  </v-row>
</template>
<script setup>
const title = `Launch your brand`;
const subtitle = `<span class="text-purple">Graphigem</span> helps brands create value in the virtual world. We are a strategic and creativeconsultancy guiding businesses through digital branding, collectibles, blockchain and the Virtual World.`;
</script>
