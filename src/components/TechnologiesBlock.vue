<template>
  <div class="flex flex-col mb-8">
    <div class="ml-4" v-for="(tech, index) in technologies" :key="index">
      <ul>
        <li>{{ tech }}</li>
      </ul>
    </div>
  </div>
  <div class="custom-grid">
    <TechnologiesLogosAnimation
      v-for="(techImg, index) in technologiesImg"
      :key="index"
      :image="techImg"
    />
  </div>
</template>

<script setup>
import TechnologiesLogosAnimation from '@/components/TechnologiesLogosAnimation.vue'
import { useStore } from '@/stores/index.js'

const store = useStore()

const technologies = store.technologies

const technologiesImg = store.technologiesImg
</script>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  align-self: center;
}
ul {
  list-style: none;
}
li::before {
  content: '';
  width: 8px;
  height: 8px;
  display: inline-block;
  background-color: #009900;
  margin-right: 10px;
}
</style>
