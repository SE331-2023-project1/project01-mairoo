import { defineStore } from 'pinia'

export const useDetailStore = defineStore('detail', {
  state: () => ({
    detail: '' as string
  }),
  actions: {
    updateMessage(detail: string) {
      this.detail = detail
    }
  }
})
