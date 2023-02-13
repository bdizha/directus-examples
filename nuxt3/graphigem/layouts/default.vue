<template>
  <v-card>
    <v-layout>
      <Header></Header>
      <v-main style="min-height: 300px">
        <slot />
        <Footer></Footer>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    currentYear: new Date().getFullYear(),
    links: [
      { title: "Home", route: "/", theme: "purple" },
      { title: "Services", route: "/services", theme: "pink" },
      { title: "Careers", route: "/careers", theme: "green" },
      { title: "About Us", route: "/about-us", theme: "yellow" },
    ],
  }),
};
</script>
