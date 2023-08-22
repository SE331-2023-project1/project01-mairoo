<script setup lang="ts">
import { ref, type Ref, type PropType } from 'vue'
import type { PatientItem, VaccineInjection } from '@/type'
import PatientService from '@/services/PatientService'
import { useDetailStore } from '@/stores/detail'
import { storeToRefs } from 'pinia'
import '@/assets/style.css'

const store = useDetailStore()
const { detail } = storeToRefs(store)
// const patient = ref< PatientItem | null > (null)

const props = defineProps({
  patient: {
    type: Object as PropType<PatientItem>,
    require: true
  },
  vaccine: {
    type: Object as PropType<VaccineInjection>,
    require: true
  }
})

</script>

<template>
  <div class="paper" v-if="patient">
    <h1 class="patient-name">
      Name: {{ patient?.first_name }} {{ patient?.last_name }}
      <span class="blood-type">Blood type: {{ patient.blood_type }}</span>
    </h1>
    <p class="patient-hospital">
      Hospital: {{ patient.hospital }}
      <span> Congenital disease: {{ patient.congenital_disease }}</span>
    </p>
    <p>Vaccine : {{ patient.vaccinated }}</p>
    <p>
      Vaccine injection: {{ patient.vaccine_injections[0]?.vaccine_name }}
      {{ patient.vaccine_injections[0].date }}
    </p>
    <p class="patient-history">History: {{ patient?.patient_history }}</p>
    <p class="recommendation">Recommend from doctor: {{ patient?.recommendation }}</p>
    <div id="flash" v-if="detail">
      <h4>{{ detail }}</h4>
    </div>
  </div>
  <div class="page-break"></div>
</template>

<style scoped>
.paper {
  width: 210mm; /* A4 width */
  height: 297mm; /* A4 height */
  padding: 20mm; /* Add padding to mimic paper margins */
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
  margin: 0 auto; /* Center horizontally */
  display: flex;
  flex-direction: column;
  color: black; /* Set the text color */
}

.patient-name {
  margin-bottom: 10px;
}

.blood-type {
  margin-left: 10px;
  font-weight: normal;
}
</style>
