<template>
  <header class="bg-gradient-to-b from-[#F8E8EE] to-[#fffff] shadow w-full">
    <div class="w-full px-4 py-4 flex justify-between items-center">
      <router-link
        to="/"
        class="text-xl font-bold text-[#F2BED1] hover:text-[#f8d4e2] transition-colors"
      >
        <h1 class="text-[#F2BED1]">DoTo</h1>
      </router-link>
      <nav class="space-x-4">
        <RouterLink to="/"
          ><span class="text-[#F2BED1]">Inicio </span></RouterLink
        >
        <RouterLink to="/faq"
          ><span class="text-[#F2BED1]">FAQ</span></RouterLink
        >
      </nav>
    </div>
  </header>

  
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
