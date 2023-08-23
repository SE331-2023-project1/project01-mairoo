<script setup lang="ts">
import '../assets/style.css'
</script>

<template>
  <div class="about bg-gradient-to-r min-h-screen flex items-center justify-center">
    <h1 class="text-4xl font-semibold text-blue-600">This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
