export interface StudentItem {
[x: string]: any
  id: number
  name: string
  surname: string
  studentID: string
  profileImage: string
  courseList: string
}

export interface VaccineInjection {
  date: string
  vaccine_name: string
}

export interface PatientItem {
  id: number
  first_name: string
  last_name: string
  blood_type: string
  vaccinated: boolean
  recommendation: string
  patient_history: string
  hospital: string
  congenital_disease: string
  vaccine_injections: VaccineInjection[]
}

export interface TeacherItem {
  id: number
  name: string
  surname: string
  profileImage: string
}
