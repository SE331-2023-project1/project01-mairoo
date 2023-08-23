<script setup lang="ts">
import PatientCard from '@/components/PatientCard.vue'
import PatientService from '@/services/PatientService'
import { computed, ref, watchEffect } from 'vue'
import { useRouter} from 'vue-router'
import type { PatientItem } from '@/type'
import type { AxiosResponse } from 'axios'
import '../assets/style.css'

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

const vaccinatedPatients = computed(() => {
  return patientList.value.filter((patient) => patient.vaccinated)
})

const notVaccinatedPatients = computed(() => {
  return patientList.value.filter((patient) => !patient.vaccinated)
})
</script>

<template>
  <div class="Doctor-dashboard h-screen p-8 text-black">
    <div class="vaccinated-section">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Vaccinated Patients</h2>
      <div class="card">
        <PatientCard
          v-for="patient in vaccinatedPatients"
          :key="patient.id"
          :patient="patient"
        ></PatientCard>
      </div>
    </div>

    <div class="not-vaccinated-section text-black">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Not Vaccinated Patients</h2>
      <div class="card">
        <PatientCard
          v-for="patient in notVaccinatedPatients"
          :key="patient.id"
          :patient="patient"
        ></PatientCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styling specific to this template */
.card {
  border-radius: 0.75rem;
}

.vaccinated-section {
  margin-right: 2rem;
}

.bg-gradient-to-r {
  background: linear-gradient(to right, var(--color-blue-400), var(--color-purple-600));
}

.h-screen {
  height: 100vh;
}

.p-8 {
  padding: 2rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

/* General styling */
.text-2xl {
  font-size: 1.5rem;
}

.font-semibold {
  font-weight: 600;
}

.text-gray-800 {
  color: var(--color-gray-800);
}
</style>
