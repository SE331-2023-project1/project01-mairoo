<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'
</script>

<template>
  <header class="max-h-screen leading-normal bg-gray-100">
    <nav class="bg-white p-4 shadow-md">
      <div class="flex justify-center">
        <RouterLink to="/" class="text-blue-500 hover:underline mx-4">Home</RouterLink>
        <RouterLink to="/about" class="text-blue-500 hover:underline mx-4">About</RouterLink>
        <RouterLink to="/student" class="text-blue-500 hover:underline mx-4">Student</RouterLink>
      </div>
    </nav>
  </header>
  <body class="p-4">
    <RouterView></RouterView>
  </body>
</template>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 50px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flash {
  animation: yellowfade 3s ease-in-out;
}

/* Additional styling specific to this template */
body {
  background-color: #f7fafc;
}

.text-blue-500 {
  color: #3490dc;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.shadow-md {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

