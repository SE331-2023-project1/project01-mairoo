<script setup lang="ts">
import { ref, type PropType, type Ref} from 'vue'
import type { StudentItem, TeacherItem } from '@/type'
import StudentService from '@/services/StudentService'
import '@/assets/style.css'
import { useRouter } from 'vue-router';
import { useDetailStore } from '@/stores/detail';
import { storeToRefs} from 'pinia';
import TeacherService from '@/services/TeacherService'
import type { AxiosResponse } from 'axios'

const event = ref<StudentItem | null>(null)
const events: Ref<Array<TeacherItem>> = ref([])

  const props = defineProps({
    student: {
      type: Object as PropType<StudentItem>,
        require: true
      },
      id: String,
  page: {
    type: Number,
    required: true
  },
  teacherID: String
})



TeacherService.getEvent(0, props.page).then((response: AxiosResponse<TeacherItem[]>) => {
  events.value = response.data
})
const router = useRouter()
const recommendation = ref('')
const store = useDetailStore()
const { detail } = storeToRefs(store)

function recommend() {
  if (recommendation.value) {
    const newRecommendation = `${recommendation.value}`
    store.updateMessage(newRecommendation)

    // Delay the navigation slightly to give time for the message to be updated
    setTimeout(() => {
      router.push({
        name: 'student-detail',
        params: {
          id: props.student?.id
        }
      })
    }, 1000)
  }
}

StudentService.getStudentById(Number(props.id))
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <div v-if="event" class="flex items-center justify-center">
  <div class="mr-8">
    <img :src="event.profileImage" alt="Profile Image" class="w-32 h-32 rounded-full shadow-lg" />
  </div>
  <div>
    <h1 class="text-2xl font-semibold mb-2 text-black">Student Profile</h1>
    <h2 class="mb-4 text-black">Name: {{ event.name }} {{ event.surname }}</h2>
    <div id="flash" v-if="detail">
      <h4 class="text-black">{{ detail }}</h4>
    </div>

    <textarea v-model="recommendation" placeholder="Comment" class="text-black w-96 h-32 resize-none border border-gray-300 rounded p-2 mt-4" ></textarea>
    <button @click="recommend" class="text-black px-4 py-2 bg-gray-300 rounded mt-2">Enter</button>
    <RouterLink class="mb-4 text-black" :to="{ name: 'teacher-detail', params: { id } }">
        Teacher
      </RouterLink>
  </div>
</div>


</template>

