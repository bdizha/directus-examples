<script setup lang="ts">
const props = defineProps({
  rounded: { type: [String], default: "16px" },
  height: { type: [Number, String], default: 600 },
  src: {
    type: String,
    default: "/logos/icon-006.png",
  },
});
const $img = useImage();
</script>
<template>
  <v-img
    :style="{ borderRadius: rounded }"
    :src="$img(src, { height, quality: 90 })"
  ></v-img>
</template>