<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import type { StudentItem } from '@/type'
import { ref } from 'vue'
import StudentService from '@/services/StudentService'

const studentList = ref<Array<StudentItem>>([])

StudentService.getStudent().then((response) => {
  studentList.value = response.data
})
</script>

<template>
  <main class="events">
    <StudentCard v-for="student in studentList" :key="student.id" :student="student"></StudentCard>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>