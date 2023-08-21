<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="network-error">
    <h1>HEEEEEEEEEEEEEEEEEEEEE</h1>
    <h3>
      You are fcking offline tho
      <a href="#" @click="router.go">Click This!!!!!!!!!</a>
    </h3>
  </div>
</template>
