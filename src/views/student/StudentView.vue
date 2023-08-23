<script setup lang="ts">
import { ref, watchEffect} from 'vue'
import type { StudentItem } from '@/type'
import StudentCard from '@/components/StudentCard.vue'
import StudentService from '@/services/StudentService'
import type { AxiosResponse } from 'axios'
import router from '@/router'

const studentList = ref<Array<StudentItem>>([])
const totalEvent = ref<number>(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  StudentService.getStudent(totalEvent.value, props.page)
    .then((response: AxiosResponse<StudentItem[]>) => {
      studentList.value = response.data
      totalEvent.value = response.headers['x-total-count']
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
})


</script>
<template>
  <div class="StudentList admin-side flex items-center justify-center  p-10">
      <div class="p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Student List</h2>
        <div class="flex flex-col gap-4 text-black">
          <div class="flex flex-col items-center gap-4 text-black">
            <div class="flex flex-col items-center gap-4 text-black">
  <div class="flex flex-wrap">
    <StudentCard
      v-for="student in studentList"
      :key="student.id"
      :student="student"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-4"
      
    />
  </div>
</div>

</div>



</div>



        <div class="mt-6 text-black">
          <!-- Adjusted text color -->
          <h4 class="text-lg font-semibold">Total Students: {{ totalEvent }}</h4>
        </div>
      </div>
    </div>
</template>