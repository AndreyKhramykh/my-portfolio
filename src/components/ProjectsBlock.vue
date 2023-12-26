<template>
  <div class="text-white" v-for="project in projects" :key="project.id">
    <ProjectCard
      :title="project.title"
      :description="project.description"
      :web-link="project.webLink"
      :git-hub-link="project.gitHubLink"
      :image="project.image"
    />
  </div>
</template>

<script setup>
import { useStore } from '@/stores/index.js'
import ProjectCard from '@/components/ProjectCard.vue'

const store = useStore()

const projects = store.projectsArray

// function findIndex(array, elem) {
//   return +array.indexOf(elem)
// }

// console.log(`output->import.meta.env`, import.meta.env)
</script>

<style></style>
