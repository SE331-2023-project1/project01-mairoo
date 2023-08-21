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
  <div class="main">
    <div class="StudentList">
      <div class="StudentList-navbar">
        <RouterLink to="">Add data student</RouterLink>
        <RouterLink to="/student"> View all>>>> </RouterLink>
      </div>
      <div class="events">
        <StudentCard
          v-for="student in studentList"
          :key="student.id"
          :student="student"
        ></StudentCard>
      </div>

      <div>
        <!-- <RouterLink
          :to="{ name: 'AdminDashboard', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          class="text-left text-gray-700 no-underline"
        >
        Prev Page
        </RouterLink>
        <RouterLink
          :to="{ name: 'AdminDashboard', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="text-right text-gray-700 no-underline"
        >
          Next Page
        </RouterLink> -->

        <h4>We have {{ totalEvent }} students now</h4>
      </div>
    </div>
    <div class="AdviserView">
      <h1>It should be show AdviserView here</h1>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: auto;
}

.AdviserView {
  margin-left: 50%;
}

.StudentList-navbar a {
  margin-right: 20px;
}
</style>
