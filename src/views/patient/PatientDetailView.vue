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
    <h1 class="patient-name text-2xl font-semibold mb-2">
      Name: {{ patient?.first_name }} {{ patient?.last_name }}
      <span class="blood-type text-gray-600">Blood type: {{ patient.blood_type }}</span>
    </h1>
    <p class="patient-hospital text-lg text-gray-800">
      Hospital: {{ patient.hospital }}
      <span class="congenital-disease text-gray-600"
        >Congenital disease: {{ patient.congenital_disease }}</span
      >
    </p>
    <p class="vaccinated text-gray-700">Vaccine: {{ patient.vaccinated }}</p>
    <p class="vaccine-injection text-gray-700">
      Vaccine injection: {{ patient.vaccine_injections[0]?.vaccine_name }}
      {{ patient.vaccine_injections[0].date }}
    </p>
    <p class="patient-history text-gray-700">History: {{ patient?.patient_history }}</p>
    <p class="recommendation text-gray-700">Recommend from doctor: {{ patient?.recommendation }}</p>
    <div id="flash" v-if="detail">
      <h4>{{ detail }}</h4>
    </div>
  </div>
  <div class="page-break"></div>
</template>

<style scoped>
.paper {
  width: 210mm;
  /* A4 width */
  height: 297mm;
  /* A4 height */
  padding: 20mm;
  /* Add padding to mimic paper margins */
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  /* Add shadow for depth */
  margin: 0 auto;
  /* Center horizontally */
  display: flex;
  flex-direction: column;
  color: black;
  /* Set the text color */
}

.patient-name {
  margin-bottom: 10px;
}

.blood-type {
  margin-left: 10px;
  font-weight: normal;
}

.congenital-disease,
.vaccinated,
.vaccine-injection,
.patient-history,
.recommendation {
  margin-top: 5px;
}

.page-break {
  page-break-after: always;
}
</style>
