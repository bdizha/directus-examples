<template>
  <v-card rounded="0" theme="theme" class="p6 dark-purple">
    <v-row align="center" justify="center">
      <v-col lg="6" xl="6" cols="12">
        <v-card theme="theme" rounded="xl" class="p3 dark-purple">
          <Image width="100%" src="/assets/assets-001.png" />
        </v-card>
      </v-col>
      <v-col lg="6" xl="6" cols="12">
        <v-row align="center" justify="start" minHeight="600">
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-card-title>
              <h2 class="text-h2">
                <span class="text-purple">Our</span> story
              </h2>
            </v-card-title>
            <v-card-subtitle
              >To <span class="text-purple">inspire</span> innovative brands in
              Africa. Many great brands are forging a unique way of life for the
              world of this generation and continue to shape it. With a unique
              philosophy of customer service, the single thing that all of these
              African icons have in common is success of one kind or another.
            </v-card-subtitle>
            <v-card-text v-if="false"
              >In many cases, this will continue beyond this day. In some way or
              other, they have all helped to stoke the engine of the fast
              growing economy in the world. We are doing this by taking a
              revolutionary approach, that understands the impact branding
              campaigns can bring to the growing customer demands and plan to
              maximize value for creative brands.
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => {},
};
</script>
