<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import hero from "../assets/hero.svg";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
</script>
<template>
  <section class="relative flex items-center justify-center bg-gray-100">
    <div class="max-w-[1300px] m-auto px-5 md:px-6 lg:px-8 pt-4 md:pt-5">
      <img
        :src="hero"
        alt="logo"
        class="w-full object-cover md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1300px]"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-white"
      >
        <h1
          class="font-primary text-xl w-2/3 xl:w-1/2 md:text-3xl mb-4 md:mb-5 lg:mb-6 lg:text-5xl xl:text-6xl font-bold text-center drop-shadow-lg"
        >
          Conecta. Aprende. Inspira. Educlass transforma la experiencia
          educativa para todos.
        </h1>

        <button>
          <FontAwesomeIcon
            :icon="faArrowRightLong"
            class="text-2xl md:text-3xl lg:text-4xl"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
