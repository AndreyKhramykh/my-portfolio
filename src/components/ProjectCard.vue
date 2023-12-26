<template>
  <div class="flex flex-col justify-between items-center bg-grey h-[400px] rounded-md">
    <img :src="getImageUrl(props.image)" class="rounded-t-md h-1/2 w-full" alt="" />
    <div class="flex flex-col justify-between p-4 h-1/2 w-full">
      <div class="flex flex-col items-center">
        <h1 class="text-2xl text-green">{{ props.title }}</h1>
        <h3 class="">{{ props.description }}</h3>
      </div>
      <div class="flex flex-col items-start text-sm text-green">
        <a target="_blank" :href="props.webLink">Site link</a>
        <a target="_blank" :href="props.gitHubLink">GitHub link</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

function getImageUrl(prop) {
  return `/projects_images/${prop}`
}

const props = defineProps({
  title: {
    required: true,
    default: 'title'
  },
  description: {
    required: true,
    default: 'description'
  },
  webLink: {
    required: true,
    default: 'webLink'
  },
  gitHubLink: {
    required: true,
    default: 'gitHubLink'
  },
  image: {
    required: true,
    default: 'image'
  }
})
</script>

<style></style>
