<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import type { StudentItem } from '@/type'
import { computed, ref, watchEffect } from 'vue'
import StudentService from '@/services/StudentService'
import type { AxiosResponse } from 'axios'
import { useRouter } from 'vue-router'




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
  <div>
    <div class="card">
      <StudentCard
        v-for="student in studentList"
        :key="student.id"
        :student="student"
      ></StudentCard>
    </div>
    <RouterLink
      :to="{ name: 'studentList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      class="text-left text-gray-700 no-underline"
    >
      Prev Page
    </RouterLink>
    <RouterLink
      :to="{ name: 'studentList', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      class="text-right text-gray-700 no-underline"
    >
      Next Page
    </RouterLink>
  </div>
</template>

<style scoped>
body {
  margin-top: 50%;
  display: flex;
  flex-direction: column;
}

.card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
</style>
