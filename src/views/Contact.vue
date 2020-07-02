<template>
  <div class="contact">
    <h1>This is a Contact page</h1>
    <ReturnButton></ReturnButton>
  </div>
</template>

<script>
  import ReturnButton from '@/components/ReturnButton.vue'
    export default {
    name: 'Contact',
    components: {
      ReturnButton
    }
  }
</script>