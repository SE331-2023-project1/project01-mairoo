<script setup lang="ts">
import '../assets/style.css'
</script>

<template>
  <div class="flex h-screen bg-gradient-to-r from-blue-400 to-purple-600">
    <!-- ADMIN Side -->
    <div class="admin-side flex items-center justify-center w-1/2 p-10">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 class="text-4xl font-semibold text-blue-800 mb-4">ADMIN</h1>
        <RouterLink to="/admin" class="text-blue-500 hover:underline">HERE!!</RouterLink>
      </div>
    </div>
    
    <!-- DOCTOR Side -->
    <div class="doctor-side flex items-center justify-center w-1/2 p-10">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 class="text-4xl font-semibold text-green-800 mb-4">DOCTOR</h1>
        <RouterLink to="/doctor" class="text-green-500 hover:underline">HERE!!</RouterLink>
      </div>
    </div>
  </div>
</template>

<style></style>
