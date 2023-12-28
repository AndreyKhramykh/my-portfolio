<template>
  <div class="text-green p-8 flex justify-between">
    <BurgerButton @click="toogleMenu" :class="{ active: isButtonActive }" />
    <router-link to="/">Main</router-link>
  </div>
  <div>
    <div
      @click="closeMenu"
      class="absolute transition duration-750 translate-x-[-100%] flex flex-col bg-black w-full h-full p-4 gap-20 z-10 border-t-2 border-t-green text-2xl"
      :class="{ 'translate-x-[0]': isMenuOpen }"
    >
      <NavBar />
    </div>
  </div>
</template>

<script setup>
import BurgerButton from '@/components/BurgerButton.vue'
import NavBar from '@/components/NavBar.vue'
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)
const isButtonActive = ref(false)

const body = document.body

function toogleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  isButtonActive.value = !isButtonActive.value
  if (isMenuOpen.value) {
    body.style.overflow = 'hidden'
  }
}
function closeMenu() {
  console.log(`output->close`, 'close')
  body.style.overflow = ''
  isMenuOpen.value = false
  isButtonActive.value = false
}

watch(isMenuOpen, () => {
  if (!isMenuOpen.value) {
    body.style.overflow = ''
  }
  console.log(`output->watcher`, 'watching')
})
</script>

<style></style>
