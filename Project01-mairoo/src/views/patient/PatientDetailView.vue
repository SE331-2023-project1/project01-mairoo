<script setup lang="ts">
import { ref, type Ref, type PropType } from 'vue'
import type { PatientItem } from '@/type'
import PatientService from '@/services/PatientService'

// const patient = ref< PatientItem | null > (null)

const props = defineProps({
  patient: {
    type: Object as PropType<PatientItem>,
    require: true
  }
})

// PatientService.getPatientById(Number(props.id))
// .then((res) => {
//     patient.value = res.data
// }).catch(error => {
//     console.log(error);
// })
</script>

<template>
  <div v-if="patient">
    <!-- <h1>{{ patient?.first_name }} {{ patient?.last_name }}</h1> -->
    <p>{{ patient?.patient_history }}</p>
    <p>{{ patient?.recommendation }}</p>
    <!-- <RouterLink :to="{name: 'PatientRecommend', params: {id}}">
            Recommend to patient
        </RouterLink> -->
  </div>
  <div></div>
</template>
