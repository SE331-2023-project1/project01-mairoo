<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { type TeacherItem } from '@/type'
const props = defineProps({
    teacher: {
        type: Object as PropType<TeacherItem>,
        required: true
    }
})
</script>

<template>
    <RouterLink :to="{ name: 'teacher-detail', params: { id: teacher?.id } }">
        <div class="teacher-class"></div>
        <div class="teacher-card">
            <span>{{ teacher?.name }} {{ teacher?.surname }}</span>
        </div>
    </RouterLink>
</template>


<style scoped>
.teacher-card {
    margin-right: 18px;
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}


.teacher-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
