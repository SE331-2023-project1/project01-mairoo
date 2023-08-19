<script setup lang="ts">
import type { PatientItem } from '@/type'
import type { PropType } from 'vue'

const prop = defineProps({
  patient: {
    type: Object as PropType<PatientItem>,
    require: true
  }
})
</script>

<template>
  <div class="patient">
    <div class="patient-card">
      <h1>
        {{ patient?.name }}
      </h1>
      <h2>vaccinated status: <span>
          {{ patient?.vaccinated }}
    </span>
</h2>

      <h5>
        {{ patient?.recommendation }}
      </h5>
    </div>
  </div>
</template>

<style scoped>
.patient-card {
  margin-right: 18px;
  padding: 20px;
  width: 370px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.patient-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.2);
}

.patient-card span {
    color: red;
    text-decoration:double
}

.patient-card h1 {
    color: blue;
    text-decoration:double
}

</style>
