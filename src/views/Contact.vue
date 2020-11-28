<template>
  <div class="contact">
    <h1>This is a Contact page</h1>
    <ReturnButton></ReturnButton>
    <v-btn
      href="curriculum.pdf"
      class="primary"
      download="cv_cedric_tellier"
    >Download CV!</v-btn>
    <v-btn v-bind:href="linkedInUrl" target="_blank" class="primary">
      LinkedIn
    </v-btn>
    <v-btn v-bind:href="github" target="_blank" class="primary">
      Github
      <a href="linkedin.jpg"></a>
    </v-btn>

    <ContactForm></ContactForm>
  </div>
</template>
<script>
import ReturnButton from "@/components/ReturnButton.vue";
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: "Contact",
  components: {
    ReturnButton,
    ContactForm
  },
  data () {
    return {
       linkedInUrl: "https://www.linkedin.com/in/c%C3%A9dric-tellier-913224101/",
      github: "https://github.com/CedricTellier"
    }
  }
};
</script>
