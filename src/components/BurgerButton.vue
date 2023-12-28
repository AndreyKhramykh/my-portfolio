<template>
  <div class="menu-button">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup></script>

<style scoped>
.menu-button {
  cursor: pointer;
  width: fit-content;
}

.menu-button > span {
  display: block;
  width: 28px;
  height: 4px;
  background-color: #009900;
  border-radius: 9999px;
}

.menu-button > span:not(:last-child) {
  margin-bottom: 7px;
}

.menu-button,
.menu-button > span {
  transition: all 0.4s ease-in-out;
}

.menu-button.active {
  transition-delay: 0.8s;
  transform: rotate(45deg);
}

.menu-button.active > span:nth-child(2) {
  width: 0;
}
.menu-button.active > span:nth-child(1),
.menu-button.active > span:nth-child(3) {
  transition-delay: 0.4s;
}

.menu-button.active > span:nth-child(1) {
  transform: translateY(9px);
}
.menu-button.active > span:nth-child(3) {
  transform: translateY(-13px) rotate(90deg);
}
</style>
