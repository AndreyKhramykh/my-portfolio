<template>
  <div class="flex flex-col gap-10">
    <a target="_blanc" href="https://t.me/Khram1997" class="flex items-center gap-5 w-fit">
      <img src="/contacts_logos/0.png" alt="" />
      <div>Telegram</div>
    </a>
    <a
      target="_blanc"
      href="https://www.linkedin.com/in/andrey-khramykh-367387257/"
      class="flex items-center gap-5 w-fit"
    >
      <img src="/contacts_logos/1.png" alt="" />
      <div>LinkedIn</div>
    </a>
    <a
      target="_blanc"
      href="https://www.facebook.com/andrey.khramykh.1/"
      class="flex items-center gap-5 w-fit"
    >
      <img src="/contacts_logos/2.png" alt="" />
      <div>Facebook</div>
    </a>
    <a target="_blanc" href="mailto:khramykhandrey@gmail.com" class="flex items-center gap-5 w-fit">
      <img src="/contacts_logos/3.png" alt="" />
      <div>E-mail</div>
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  width: 40px;
  height: 40px;
  filter: grayscale(1);
}
a:hover img {
  filter: grayscale(0);
}
a:hover div {
  color: #009900;
}
</style>
