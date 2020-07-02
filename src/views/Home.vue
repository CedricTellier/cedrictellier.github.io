<template>
  <div class="home">
    <h1>This is a Home page</h1>
    <div>
      <router-link to="/about" v-slot="{ href, route, navigate}">
        <v-btn  :href="href" @click="navigate" class="primary">Go to About</v-btn >
      </router-link>
       <router-link to="/projects" v-slot="{ href, route, navigate}">
        <v-btn  :href="href" @click="navigate" class="success">Go to Projects</v-btn >
      </router-link>
       <router-link to="/contact" v-slot="{ href, route, navigate}">
        <v-btn :href="href" @click="navigate" class="error">Go to COntact</v-btn >
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({})
};
</script>