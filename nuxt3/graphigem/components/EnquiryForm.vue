<template>
  <v-card rounded="0" theme="yellow" class="p12">
    <v-row align="center" justify="center">
      <v-col lg="8" cols="12">
        <v-form validate-on="submit" @submit.prevent="submit">
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
                v-model="form.firstName.value"
                :rules="form.firstName.rules"
                label="First Name"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                v-model="form.lastName.value"
                :rules="form.lastName.rules"
                label="Last Name"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                v-model="form.company.value"
                :rules="form.company.rules"
                label="Company"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                v-model="form.email.value"
                :rules="form.email.rules"
                label="Email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.message.value"
                :rules="form.message.rules"
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
                rounded="xl"
                class="mt-2 px-5"
                >Get in touch</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col v-if="isSubmitted" lg="6" cols="12">
        <v-card theme="theme" :class="`p2 dark`">
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
    form: {
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
    async submit(event) {
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
