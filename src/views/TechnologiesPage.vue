<template>
  <NavigationMenu />
  <LoaderLocal class="loader-local" v-if="loaderStatus" />
  <div class="p-8" :class="{ 'content-overflow-hidden': loaderStatus }">
    <div>
      <div class="text-white">
        <h1 class="mb-8">My technologies stack:</h1>
        <TechnologiesBlock />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationMenu from '@/components/NavigationMenu.vue'
import TechnologiesBlock from '@/components/TechnologiesBlock.vue'
import LoaderLocal from '@/components/LoaderLocal.vue'
import { ref, onMounted } from 'vue'
const loaderStatus = ref(true)
function changeLoaderStatus() {
  setTimeout(() => {
    loaderStatus.value = false
  }, 2000)
}
onMounted(() => {
  changeLoaderStatus()
})
</script>

<style></style>
