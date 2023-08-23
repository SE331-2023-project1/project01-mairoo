<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentItem } from '@/type'
import { ref, type PropType } from 'vue'
import StudentService from '@/services/StudentService'
import '@/assets/style.css'

defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  },
  reviews: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <div v-if="student">
      <p><span class="font-bold">First Name :</span> {{ student?.name }}</p>
      <p><span class="font-bold">Last Name :</span> {{ student?.surname }}</p>
      <p><span class="font-bold">Student ID :</span> {{ student?.StudentID }}</p>
      
    </div>
  </div>


</template>