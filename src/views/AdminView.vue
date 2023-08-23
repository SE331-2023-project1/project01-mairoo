<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import type { StudentItem } from '@/type'
import { ref, watchEffect, type Ref } from 'vue'
import StudentService from '@/services/StudentService'
import type { AxiosResponse } from 'axios'
import { useRouter } from 'vue-router'
import type { TeacherItem } from '@/type'
import TeacherCard from '@/components/TeacherCard.vue'
import '../assets/style.css'
import TeacherService from '@/services/TeacherService'

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

TeacherService.getEvent(0 , props.page).then((response) => {
  events.value = response.data
})
const events: Ref<Array<TeacherItem>> = ref([])
</script>
<template>
  <div class="flex h-screen">
    <!-- Student List -->
    <div class="StudentList admin-side flex items-center justify-center w-1/2 p-10">
      <div class="p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Student List</h2>
        <div class="grid grid-cols-1 gap-4 text-black">
          <StudentCard v-for="student in studentList" :key="student.id" :student="student" />
        </div>

        <div class="mt-6 text-black">
          <!-- Adjusted text color -->
          <h4 class="text-lg font-semibold">Total Students: {{ totalEvent }}</h4>
        </div>
      </div>
    </div>

    <!-- Adviser View -->
    <div class="AdviserView doctor-side flex items-center justify-center w-1/2 p-10">
      <div class="p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Adviser View</h2>
        <div class="grid grid-cols-1 gap-4 text-black">
          <TeacherCard v-for="teacher in events" :key="teacher.id" :teacher="teacher" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styling specific to this template */
.StudentList {
  background-color: var(--color-blue-200);
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.admin-side {
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.doctor-side {
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}
</style>
