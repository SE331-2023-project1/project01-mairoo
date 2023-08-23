<script setup lang="ts">
import '../assets/style.css'
</script>

<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <h1 class="text-6xl font-semibold text-red-700 mb-4">Student Management System</h1>

    <div class="flex">
      <!-- ADMIN Side -->
      <div class="admin-side flex items-center justify-center w-1/2 p-10">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <RouterLink to="/admin" class="text-4xl font-semibold text-blue-800 mb-4"
            >Admin</RouterLink
          >
        </div>
      </div>

      <!-- DOCTOR Side -->
      <div class="doctor-side flex items-center justify-center w-1/2 p-10">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <RouterLink to="/doctor" class="text-4xl font-semibold text-green-800 mb-4"
            >Doctor</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
