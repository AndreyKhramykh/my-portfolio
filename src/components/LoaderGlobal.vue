<template>
  <div class="loader text-2xl h-full w-full absolute bg-black text-green">
    Loading <LoaderLocal />
  </div>
</template>

<script setup>
import LoaderLocal from '@/components/LoaderLocal.vue'
</script>

<style scoped>
.loader {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-family: 'Pixelify Sans', sans-serif;
}
</style>
