<template>
  <div class="contact">
    <h1>This is a Contact page</h1>
    <ReturnButton></ReturnButton>
      <a href="test.png" download="logo">
        <img src="test.png" alt="test" />
      </a>
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
