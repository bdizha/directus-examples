<template>
  <v-card rounded="0" theme="yellow" class="p12">
    <v-row align="center" justify="center">
      <v-col lg="6" cols="12">
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-row justify="center">
            <v-col cols="12">
              <div class="text-h2">Launch your campaign with us.</div>
            </v-col>
            <v-col cols="12">
              <div class="text-subtitle">
                Let's connect your story to the world.
              </div>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                v-model="fields.firstName.value"
                :rules="fields.firstName.rules"
                label="First Name"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                v-model="fields.lastName.value"
                :rules="fields.lastName.rules"
                label="Last Name"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                v-model="fields.company.value"
                :rules="fields.company.rules"
                label="Company"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                v-model="fields.email.value"
                :rules="fields.email.rules"
                label="Email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="fields.message.value"
                :rules="fields.message.rules"
                label="Message"
                required
                auto-grow
              ></v-textarea>
            </v-col>
            <v-col md="3" cols="12">
              <v-btn
                block
                type="submit"
                size="x-large"
                color="secondary"
                variant="elevated"
                rounded="xl"
                class="mt-2 px-5"
                >Get in touch</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col v-if="isSubmitted" lg="6" cols="12">
        <v-card theme="theme" rounded="xl" :class="`p2 dark`">
          <v-card-subtitle>
            Thank you for your enquiry. It has been sent to us and will be touch
            soonest.
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    isSubmitted: false,
    valid: true,
    form: false,
    fields: {
      firstName: {
        value: "",
        rules: [
          (v) => !!v || "First Name is required",
          (v) =>
            (v && v.length <= 30) ||
            "First Name must be less than 30 characters",
        ],
      },
      lastName: {
        value: "",
        rules: [
          (v) => !!v || "Last Name is required",
          (v) =>
            (v && v.length <= 30) ||
            "Last Name must be less than 30 characters",
        ],
      },
      company: {
        value: "",
        rules: [
          (v) => !!v || "Company is required",
          (v) =>
            (v && v.length <= 30) || "Company must be less than 30 characters",
        ],
      },
      email: {
        value: "",
        rules: [
          (v) => !!v || "Email is required",
          (v) => /.+@.+\..+/.test(v) || "Email must be valid",
        ],
      },
      message: {
        value: "",
        rules: [
          (v) => !!v || "Message is required",
          (v) =>
            (v && v.length <= 500) || "Message must be less than 30 characters",
        ],
      },
    },
  }),

  methods: {
    async onSubmit(event) {
      if (!this.form) return;

      const results = await event;
      console.log("submitted form", JSON.stringify(results, null, 2));

      setTimeout(() => {
        this.isSubmitted = true;

        setTimeout(() => {
          this.isSubmitted = false;
        }, 6000);
      }, 3000);
    },
    async checkApi(userName) {
      return new Promise((resolve) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          if (!userName) return resolve("Please enter a user name.");
          if (userName === "johnleider")
            return resolve("User name already taken. Please try another one.");

          return resolve(true);
        }, 3000);
      });
    },
  },
};
</script>
