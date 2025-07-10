<template>
  <div class="min-h-screen bg-gray-100 pt-20">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>
