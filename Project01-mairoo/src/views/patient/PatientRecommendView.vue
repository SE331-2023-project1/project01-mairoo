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
  <p>Recommend to patient</p>
  <p>adfadsfasdfj;</p>
</template>
