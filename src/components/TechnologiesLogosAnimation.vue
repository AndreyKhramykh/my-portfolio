<template>
  <div class="flex justify-center">
    <img class="w-[100px] h-[120px]" :src="getImageUrl(props.image)" alt="" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  image: {
    required: true,
    default: 'title'
  }
})

function getImageUrl(prop) {
  return `/my-portfolio/technologies_images/${prop}`
}
</script>

<style></style>
