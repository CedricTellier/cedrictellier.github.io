<template id="project">
  <div class="projects">
    <h1>This is a Project page</h1>
    <ReturnButton></ReturnButton>
    <v-list rounded>
      <v-list-item-group v-for="repository in repos" :key="repository.id" color="dark">
        <v-list-item v-bind:href="repository.url" target="_blank">
          <v-list-item-content>
            <v-list-item-title v-text="repository.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  import ReturnButton from '@/components/ReturnButton.vue'
  import Axios from 'axios'
    export default {
    name: 'Project',
    components: {
      ReturnButton
    },
    data: () => {
      return {
        repos: [],
        github_request:  "https://api.github.com/users/CedricTellier/repos"
      }
    },
    mounted () {
      Axios
      .get(this.github_request)
      .then(response => {
        response.data.forEach((item) => {
          this.repos.push({id:item.id, url:item.html_url, langage: item.language, name:item.name, description:item.description});
        });
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }
  }
</script>
test