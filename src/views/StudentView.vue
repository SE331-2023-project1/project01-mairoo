<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import type { StudentItem } from '@/type'
import { computed, ref, watchEffect } from 'vue'
import StudentService from '@/services/StudentService'
import type { AxiosResponse } from 'axios'
import { useRouter } from 'vue-router'
import '../assets/style.css'

const studentList = ref<Array<StudentItem>>([])
const totalEvent = ref<number>(0)
const router = useRouter()

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  StudentService.getStudent(3, props.page)
    .then((response: AxiosResponse<StudentItem[]>) => {
      studentList.value = response.data
      totalEvent.value = response.headers['x-total-count']
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
})
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / 3)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <div class="bg-gradient-to-r from-blue-400 to-purple-600 h-screen p-8">
    <div class="card bg-blue-200 p-6 rounded-lg shadow-md mb-8 text-black">
      <StudentCard v-for="student in studentList" :key="student.id" :student="student"></StudentCard>
    </div>
    <div class="flex justify-between text-black">
      <RouterLink :to="{ name: 'studentList', query: { page: page - 1 } }" rel="prev" v-if="page != 1"
        class="text-gray-700 hover:underline text-lg">
        Prev Page
      </RouterLink>
      <RouterLink :to="{ name: 'studentList', query: { page: page + 1 } }" rel="next" v-if="hasNextPage"
        class="text-gray-700 hover:underline text-lg">
        Next Page
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Additional styling specific to this template */
.card {
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

/* General styling */
.bg-gradient-to-r {
  background: linear-gradient(to right, var(--color-blue-400), var(--color-purple-600));
}

.h-screen {
  height: 100vh;
}

.p-8 {
  padding: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.hover\:underline:hover {
  text-decoration: underline;
}
.text-gray-700 {
  color: var(--color-gray-700);
}
</style>

