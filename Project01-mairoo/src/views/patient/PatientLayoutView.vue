<script setup lang="ts">
import { ref } from 'vue'
import type { PatientItem } from '@/type'
import PatientService from '@/services/PatientService'

const patient = ref<PatientItem | null>(null)
const props = defineProps({
  id: String
})

PatientService.getPatientById(Number(props.id))
  .then((res) => {
    patient.value = res.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <div v-if="patient">
    <h1>{{ patient.first_name }}</h1>

    <RouterView :patient="patient"></RouterView>

    <div id="nav">
      <RouterLink :to="{ name: 'patient-recommend', params: { id } }">
        Recommend to patient
      </RouterLink>
    </div>
  </div>
</template>
