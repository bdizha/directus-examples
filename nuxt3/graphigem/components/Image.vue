<script setup lang="ts">
const props = defineProps({
  height: { type: [Number, String], default: 600 },
  src: {
    type: String,
    default: "/logos/icon-006.png",
  },
});
const $img = useImage();
const _srcset = computed(() => {
  return $img.getSizes(props.src, {
    sizes: "xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",
    modifiers: {
      format: "webp",
      quality: 90,
      height: props.height,
    },
  });
});
</script>
<template>
  <v-img :src="$img(src, { height, quality: 70 })"></v-img>
</template>