<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { TeacherItem } from '@/type'
import TeacherCard from '@/components/TeacherCard.vue'
import TeacherService from '@/services/TeacherService'
import type { AxiosResponse } from 'axios'

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

TeacherService.getEvent(0, props.page).then((response: AxiosResponse<TeacherItem[]>) => {
  events.value = response.data
})

const events: Ref<Array<TeacherItem>> = ref([])

</script>

<template>
  <div class="card">
    <TeacherCard v-for="teacher in events" :key="teacher.id" :teacher="teacher" />
    <!-- Pass the teacher object to the RouterLink and extract the ID -->
    <RouterLink
      v-for="teacher in events"
      :key="teacher.id"
      :to="{ name: 'teacher-detail', params: { id: teacher.id.toString() } }"
    >
    </RouterLink>
  </div>
</template>
