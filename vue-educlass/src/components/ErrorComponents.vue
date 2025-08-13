<script setup>
import l404 from "../assets/404.webp";
import ButtonErrorComponents from "./ButtonErrorComponents.vue";
</script>
<template>
  <section class="flex flex-col items-center gap-2">
    <h2
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff4a39] mt-10"
    >
      Error 404
    </h2>
    <p class="text-[#5a5a5a] text-sm lg:text-xl font-normal">
      Página no encontrada:
    </p>
    <p class="text-[#5a5a5a] text-sm lg:text-md font-normal mb-3">
      No estas registrado o no tienes acceso a esta página.
    </p>
    <router-link to="/">
      <ButtonErrorComponents />
    </router-link>
    <img :src="l404" alt="Error 404" class="img-fluid mx-auto d-block w-1/4" />
  </section>
</template>

<style lang="scss" scoped></style>
