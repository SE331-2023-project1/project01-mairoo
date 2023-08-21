<script setup lang="ts">
import { ref } from 'vue'
import type { PatientItem } from '@/type'
import PatientService from '@/services/PatientService'
import { useRouter } from 'vue-router'

const patient = ref<PatientItem | null>(null)
const props = defineProps({
  id: String
})
const router = useRouter()

PatientService.getPatientById(Number(props.id))
  .then((res) => {
    patient.value = res.data
  })
  .catch((error) => {
    console.log(error)
    if (error.response && error.response.status === 404) {
      router.push({ name: '404-resource', params: { resource: ' patient ' } })
    } else {
      router.push({ name: 'network-error' })
    }
  })
</script>

<template>
  <div v-if="patient">
    <RouterView :patient="patient"></RouterView>

    <div id="nav">
      <RouterLink :to="{ name: 'DoctorDashboard' }"> Dashboard </RouterLink>
      <RouterLink :to="{ name: 'patient-detail', params: { id } }"> Details </RouterLink>
      <RouterLink :to="{ name: 'patient-recommend', params: { id } }">
        Recommend to patient
      </RouterLink>
    </div>
  </div>
</template>
