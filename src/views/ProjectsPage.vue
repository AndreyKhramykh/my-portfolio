<template>
  <NavigationMenu />
  <LoaderLocal class="loader-local" v-if="loaderStatus" />
  <div class="p-8" :class="{ 'content-overflow-hidden': loaderStatus }">
    <div>
      <div class="text-white mb-8">My projects:</div>
      <div class="grid grid-cols-3 gap-8 max-1200:grid-cols-2 max-768:grid-cols-1 max-425:text-sm">
        <ProjectsBlock />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationMenu from '@/components/NavigationMenu.vue'
import ProjectsBlock from '@/components/ProjectsBlock.vue'
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

<style scoped>
body {
  overflow: hidden;
}
</style>
