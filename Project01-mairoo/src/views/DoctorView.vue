<script setup lang="ts">
import PatientCard from '@/components/PatientCard.vue'
import PatientService from '@/services/PatientService'
import { computed, ref, watchEffect } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import type { PatientItem } from '@/type'
import type { AxiosResponse } from 'axios'

const patientList = ref<Array<PatientItem>>([])
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
  PatientService.getPatient(3, props.page)
    .then((response: AxiosResponse<PatientItem[]>) => {
      patientList.value = response.data
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
      <PatientCard
        v-for="patient in patientList"
        :key="patient.id"
        :patient="patient"
      ></PatientCard>
    </div>

    <RouterLink
      :to="{ name: 'DoctorDashboard', query: { page: props.page - 1 } }"
      rel="prev"
      v-if="props.page !== 1"
      class="text-left text-gray-700 no-underline"
    >
      Prev Page
    </RouterLink>
    <RouterLink
      :to="{ name: 'DoctorDashboard', query: { page: props.page + 1 } }"
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
