<template>
  <div class="about">
    <h1>This is a About page</h1>
    <ReturnButton></ReturnButton>
  </div>
</template>

<script>
  import ReturnButton from '@/components/ReturnButton.vue'
    export default {
    name: 'About',
    components: {
      ReturnButton
    }
  }
</script>