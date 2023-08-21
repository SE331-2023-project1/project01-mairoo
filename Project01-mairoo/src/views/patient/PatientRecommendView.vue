<script setup lang="ts">
import { ref, type Ref, type PropType } from 'vue'
import type { PatientItem } from '@/type'
import PatientService from '@/services/PatientService'
import { useRouter } from 'vue-router'
import { useDetailStore } from '@/stores/detail'

// const patient = ref< PatientItem | null > (null)

const props = defineProps({
  patient: {
    type: Object as PropType<PatientItem>,
    require: true
  }
})

const router = useRouter()
const recommendation = ref('')
const store = useDetailStore()

function recommend() {
  if (recommendation.value) {
    const newRecommendation = `${recommendation.value}`

    // Call a mutation or action in your Vuex store to update the recommendation
    store.updateMessage(newRecommendation)

    // Delay the navigation slightly to give time for the message to be updated
    setTimeout(() => {
      router.push({
        name: 'patient-detail',
        params: {
          id: props.patient?.id
        }
      })
    }, 1000) // Delay set to 1 second (1000 milliseconds)
  }
}
// PatientService.getPatientById(Number(props.id))
// .then((res) => {
//     patient.value = res.data
// }).catch(error => {
//     console.log(error);
// })
</script>

<template>
  <div>
    <textarea v-model="recommendation" placeholder="Enter your recommend"></textarea>
    <button @click="recommend">Enter</button>
  </div>
</template>
