<template>
  <NavigationMenu />
  <div class="text-green p-8">
    <div class="text" :class="{ typingAnimation: isTyping }">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import NavigationMenu from '@/components/NavigationMenu.vue'
import { ref, onMounted } from 'vue'

const isTyping = ref(true)
onMounted(() => {
  const sessionStorageResult = sessionStorage.getItem('isLoaded')
  if (sessionStorageResult == null) {
    isTyping.value = true
    sessionStorage.setItem('isLoaded', 'true')
  } else {
    isTyping.value = false
  }
})

const text = 'Hi, my name is Andriy Khramykh! I am a front-end web developer from Kyiv, Ukraine.'
</script>

<style scoped>
.text {
  max-width: fit-content;
  overflow: hidden;
  border-right: 4px solid #009900;
  height: fit-content;
  white-space: nowrap;
  animation: blink 1s infinite;
}
.typingAnimation {
  width: 0;
  animation:
    typing 8s 2s steps(82) forwards,
    blink 1s infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  0%,
  45% {
    border-color: transparent;
  }
  50%,
  100% {
    border-color: #009900;
  }
}
@media screen and (max-width: 1024px) {
  .text {
    white-space: normal;
    animation: none;
    border-right: none;
  }
  .typingAnimation {
    width: fit-content;
    animation: none;
  }
}
</style>
