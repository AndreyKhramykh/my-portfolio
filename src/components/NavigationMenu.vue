<template>
  <MobileMenu v-if="isMobileDevice" />
  <div v-else class="text-green flex flex-row justify-between p-8">
    <router-link to="/">Main</router-link>
    <div class="flex flex-row justify-between w-1/2 max-1200:w-3/4">
      <NavBar />
    </div>
  </div>
</template>

<script setup>
import MobileMenu from '@/components/MobileMenu.vue'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'

const isMobileDevice = ref(false)

if (window.innerWidth < 768) {
  isMobileDevice.value = true
}
</script>

<style></style>
