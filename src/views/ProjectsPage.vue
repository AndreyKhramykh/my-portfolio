<template>
  <NavigationMenu />
  <div class="p-8">
    <div class="text-white mb-8">My projects:</div>
    <div class="grid grid-cols-3 gap-8">
      <ProjectsBlock />
    </div>
  </div>
</template>

<script setup>
import NavigationMenu from '@/components/NavigationMenu.vue'
import ProjectsBlock from '@/components/ProjectsBlock.vue'
</script>

<style></style>
