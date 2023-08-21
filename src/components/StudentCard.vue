<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'

const prop = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'student-detail', params: { id: student?.name } }">
  <div class="student-class">
    <div class="student-card">
      <span>{{ student?.name }} {{ student?.surname }}</span>
      <h2>
        student ID:
        <span>
          {{ student?.studentID  }}
        </span>
      </h2>
      <h5>
        Registered Courses:
        {{ student?.courseList }}
      </h5>
    </div>
  </div>
  </RouterLink>
</template>

<style scoped>
.student-card {
  margin-right: 18px;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
