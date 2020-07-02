<template>
  <div class="home">
    <h1>This is a Home page</h1>
    <div v-for="link in links" :key="link.id">
      <router-link :to="link.route" v-slot="{ href, route, navigate}">
        <v-btn :href="href" @click="navigate" :class="link.class">{{ link.text }}</v-btn>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { id: 1, text: "Go to About", class: "primary", route: "/about" },
        { id: 2, text: "Go to Projects", class: "success", route: "/projects" },
        { id: 3, text: "Go to Contact", class: "error", route: "/contact" }
      ]
    };
  }
};
</script>

