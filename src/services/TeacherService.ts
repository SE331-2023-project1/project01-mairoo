import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { TeacherItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent(): Promise<AxiosResponse<TeacherItem[]>> {
    return apiClient.get<TeacherItem[]>('/teachers')
  }
}
