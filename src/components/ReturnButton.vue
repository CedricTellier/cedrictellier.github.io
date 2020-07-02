<template>
  <v-container>
    <router-link to="/home" v-slot="{ href, route, navigate}">
      <v-btn :href="href" @click="navigate" class="warning">Return To Home</v-btn>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "ReturnButton",

  data: () => ({})
};
</script>
