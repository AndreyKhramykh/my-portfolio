<script setup>
import LoaderGlobal from '@/components/LoaderGlobal.vue'
import { ref } from 'vue'

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)
</script>

<template>
  <div>
    <LoaderGlobal v-if="isLoading" />
    <RouterView v-else />
  </div>
</template>

<style scoped></style>
