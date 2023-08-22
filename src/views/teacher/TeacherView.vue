<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { TeacherItem } from '@/type'
import TeacherCard from '@/components/TeacherCard.vue';
import TeacherService from '@/services/TeacherService'


TeacherService.getEvent()
    .then((response) => {
        events.value = response.data
    })


const events: Ref<Array<TeacherItem>> = ref([])
</script>


<template>
    <div class="card">
        <TeacherCard v-for="teacher in events" :key="teacher.id" :teacher="teacher">
        </TeacherCard>
    </div>
</template>