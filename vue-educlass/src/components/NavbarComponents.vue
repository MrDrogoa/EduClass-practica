<script setup>
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
</script>
<template>
  <section class="bg-[#339B9F]">
    <nav class="px-5 md:px-6 lg:px-8 py-3 max-w-[1300px] m-auto">
      <article class="flex justify-between items-center text-white">
        <div>
          <img :src="logo" alt="logo" class="w-40 md:w-50" />
        </div>
        <div class="hidden lg:block">
          <ul class="flex items-center gap-6 font-secondary font-medium">
            <li class="cursor-pointer">Inicio</li>
            <li class="cursor-pointer">Estudiantes</li>
            <li class="cursor-pointer">Profesores</li>
            <button class="bg-[#FF5050] py-2 px-5 rounded-3xl cursor-pointer">
              <FontAwesomeIcon :icon="faUsers" />
              Login
            </button>
          </ul>
        </div>
        <div class="block lg:hidden">
          <FontAwesomeIcon :icon="faBars" class="text-2xl cursor-pointer" />
        </div>
      </article>
    </nav>
  </section>
</template>

<style lang="scss" scoped></style>
