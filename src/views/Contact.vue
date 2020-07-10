<template>
  <div class="contact">
    <h1>This is a Contact page</h1>
    <ReturnButton></ReturnButton>
    <v-btn href="curriculum.pdf" @click="navigate" class="primary" download="cv_cedric_tellier">Download CV!</v-btn>
  </div>
</template>

<script>
import ReturnButton from "@/components/ReturnButton.vue";
export default {
  name: "Contact",
  components: {
    ReturnButton
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
};
</script>
