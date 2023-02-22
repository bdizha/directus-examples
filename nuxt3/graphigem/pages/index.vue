<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-card class="mx-auto text-center v-card-video" rounded="0">
        <video autoplay muted loop>
          <source src="/videos/GD_Infinity_WithTitles.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </v-card>
    </v-col>
    <v-col cols="12">
      <Action></Action>
    </v-col>
    <v-col cols="12">
      <Approach></Approach>
    </v-col>
    <v-col cols="12">
      <Projects></Projects>
    </v-col>
    <v-col cols="12">
      <Expertise></Expertise>
    </v-col>
    <v-col cols="12" id="contact-us">
      <EnquiryForm></EnquiryForm>
    </v-col>
  </v-row>
</template>
<script setup>

const { getItems, getItemById } = useDirectusItems();

// const post = await getItemById({
//   collection: "pages",
//   id: "ada13447-fd8c-4e58-afff-2b379ce98555",
//   params: {
//     fields: fields,
//   },
// });
// if (!post) throwError("No article found, 404");

// try {
//   const posts = await getItems({ collection: "articles" });
// } catch (error) {
//   const posts = [];
//   console.log("error", error);
// }
</script>
<style lang="css">
.v-card {
  position: relative;
}
.text-h1,
.text-h2,
.text-h4,
.text-h4,
.text-subtitle {
  white-space: normal;
}
.text-cursor--active {
  display: inline-block;
}
.text-cursor {
  color: transtitle;
  display: lock;
}

.text-cursor-0 {
  opacity: 1;
}
@keyframes move-cursor-0 {
  0% {
    color: transtitle;
  }
  100% {
    color: yellow;
  }
}
.text-cursor-0-0 {
  animation-duration: 1s;
  animation: move-cursor-0-0 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: initial;
}
@keyframes move-cursor-0-0 {
  0% {
    color: transtitle;
  }
  100% {
    color: yellow;
  }
}
.text-cursor-0-1 {
  animation: move-cursor-0-1;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
@keyframes move-cursor-0-1 {
  0% {
    color: transtitle;
  }
  100% {
    color: yellow;
  }
}
.text-cursor-0-2 {
  animation: move-cursor-0-2;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: initial;
}
@keyframes move-cursor-0-2 {
  0% {
    color: transtitle;
  }
  100% {
    color: yellow;
  }
}
.text-cursor-0-3 {
  animation: move-cursor-0-3;
  animation-duration: 1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: initial;
}
@keyframes move-cursor-0-3 {
  0% {
    color: transtitle;
  }
  100% {
    color: yellow;
  }
}
.text-cursor-0-4 {
  animation: move-cursor-0-4;
  animation-duration: 1s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: initial;
}
@keyframes move-cursor-0-4 {
  0% {
    color: transtitle;
  }
  100% {
    color: yellow;
  }
}
.text-cursor-0-5 {
  animation: move-cursor-0-5;
  animation-duration: 1s;
  animation-delay: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: initial;
}
@keyframes move-cursor-0-5 {
  0% {
    color: transtitle;
  }
  100% {
    color: yellow;
  }
}
</style>
