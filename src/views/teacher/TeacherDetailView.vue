<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { TeacherItem } from '@/type'
import TeacherService from '@/services/TeacherService';
import '@/assets/style.css'

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
    <div v-if="event" class="advisor-profile bg-white p-8 shadow-md text-black">
        <h1 class="text-2xl font-semibold mb-2">Advisor Profile</h1>
        <h2 class="mb-4">Name: {{ event.name }} {{ event.surname }}</h2>
        <img :src="event.profileImage" alt="Profile Image" class="w-32 h-32 rounded-full shadow-lg">
    </div>
</template>
  
<style scoped>
.advisor-profile {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--color-white);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.text-2xl {
    font-size: 1.5rem;
}

.font-semibold {
    font-weight: 600;
}

.w-32 {
    width: 8rem;
}

.h-32 {
    height: 8rem;
}

.rounded-full {
    border-radius: 50%;
}

.shadow-lg {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}
</style>
  