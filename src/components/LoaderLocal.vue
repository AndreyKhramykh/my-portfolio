<template>
  <div class="text-2xl text-green"><span>.</span><span>.</span><span>.</span></div>
</template>

<script setup></script>

<style scoped>
div span {
  font-family: 'Pixelify Sans', sans-serif;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

span:nth-child(1) {
  opacity: 0;
  animation: fadeIn 1000ms infinite;
  animation-delay: 330ms;
}
span:nth-child(2) {
  opacity: 0;
  animation: fadeIn 1000ms infinite;
  animation-delay: 660ms;
}
span:nth-child(3) {
  opacity: 0;
  animation: fadeIn 1000ms infinite;
  animation-delay: 900ms;
}
</style>
