<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <Services></Services>
    </v-col>
    <v-col cols="12">
      <Action theme="pink" :title="title" :subtitle="subtitle"></Action>
    </v-col>
    <v-col cols="12">
      <Approach></Approach>
    </v-col>
    <v-col cols="12">
      <Projects></Projects>
    </v-col>
    <v-col cols="12" id="contact-us">
      <EnquiryForm></EnquiryForm>
    </v-col>
  </v-row>
</template>
<script setup>
const title = `Believe in possible`;
const subtitle = `You will never sell a single product and expand your brand unless you invent big ideas about your product. It takes a big idea to attract the attention of consumers and get them to buy your product.`;
</script>
