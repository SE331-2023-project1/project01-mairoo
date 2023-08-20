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
  PatientService.getPatient(props.limit, props.page)
    .then((response: AxiosResponse<PatientItem[]>) => {
      patientList.value = response.data
      totalEvent.value = response.headers['x-total-count']
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / props.limit)
  return props.page.valueOf() < totalPages
})

const vaccinatedPatients = computed(() => {
  return patientList.value.filter((patient) => patient.vaccinated)
})

const notVaccinatedPatients = computed(() => {
  return patientList.value.filter((patient) => !patient.vaccinated)
})
</script>

<template>
  <div class="Doctor-dashboard">
    <div class="vaccinated-section">
      <h2>Vaccinated Patients</h2>
      <div class="card">
        <PatientCard
          v-for="patient in vaccinatedPatients"
          :key="patient.id"
          :patient="patient"
        ></PatientCard>
      </div>
    </div>

    <div class="not-vaccinated-section">
      <h2>Not Vaccinated Patients</h2>
      <div class="card">
        <PatientCard
          v-for="patient in notVaccinatedPatients"
          :key="patient.id"
          :patient="patient"
        ></PatientCard>
      </div>
    </div>

    <!-- <RouterLink
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
    </RouterLink> -->
  </div>
</template>

<style scoped>
.Doctor-dashboard {
  display: flex;
  flex-direction: row;
  padding-right: 20px;
}

.vaccinated-section {
  margin-right: 250px;
}
</style>
