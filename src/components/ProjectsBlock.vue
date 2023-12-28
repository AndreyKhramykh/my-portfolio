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
</script>

<style></style>
