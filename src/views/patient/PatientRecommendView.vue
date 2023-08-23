<script setup lang="ts">
import { ref, type PropType } from 'vue'
import type { PatientItem } from '@/type'
import { useRouter } from 'vue-router'
import { useDetailStore } from '@/stores/detail'

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
    store.updateMessage(newRecommendation)

    // Delay the navigation slightly to give time for the message to be updated
    setTimeout(() => {
      router.push({
        name: 'patient-detail',
        params: {
          id: props.patient?.id
        }
      })
    }, 1000)
  }
}
</script>

<template>
  <div>
    <textarea class="text-black" v-model="recommendation" placeholder="Enter your recommend"></textarea>
    <button class="text-black" @click="recommend">Enter</button>
  </div>
</template>
