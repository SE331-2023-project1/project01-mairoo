import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { PatientItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPatient(perPage: number, page: number): Promise<AxiosResponse<PatientItem[]>> {
    return apiClient.get<PatientItem[]>('/patients?_limit=' + perPage + '&_page=' + page)
  },
  getPatientById(id: number): Promise<AxiosResponse<PatientItem>> {
    return apiClient.get<PatientItem>('patients/' + id.toString())
  }
}
