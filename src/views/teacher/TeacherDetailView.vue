<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { TeacherItem } from '@/type'
import TeacherService from '@/services/TeacherService';

const event = ref<TeacherItem | null>(null)

const props = defineProps({
    id: String
})
TeacherService.getEventById(Number(props.id)).then((response) => {
    event.value = response.data
}).catch(error => {
    console.log(error)
})
</script>


<template>
    <div v-if="event">
        <h1>Advisor Profile</h1>
        <h2>Name: {{ event.name }} {{ event.surname }}</h2>
        <img :src="event.profileImage" alt="Profile Image">
    </div>
</template>
  