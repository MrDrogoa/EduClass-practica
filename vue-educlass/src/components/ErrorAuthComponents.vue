<script setup>
import ButtonErrorAuthComponent from "./ButtonErrorAuthComponents.vue";
</script>
<template>
  <section class="flex flex-col items-center gap-2">
    <h2
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2d38ff] mt-10"
    >
      Error 401
    </h2>
    <p class="text-[#5a5a5a] text-sm lg:text-xl font-normal mb-3">
      Error de autenticación
    </p>
    <router-link to="/">
      <ButtonErrorAuthComponent />
    </router-link>
  </section>
</template>

<style lang="scss" scoped></style>
