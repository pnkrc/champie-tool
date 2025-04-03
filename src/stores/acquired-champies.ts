import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAcquiredChampieStore = defineStore(
  'acquiredChampies',
  () => {
    const acquired = ref<Array<string>>([])

    function addChampie(champie: string) {
      if (!acquired.value.includes(champie)) {
        acquired.value.push(champie)
      }
    }

    function removeChampie(champie: string) {
      const index = acquired.value.indexOf(champie)
      if (index !== -1) {
        acquired.value.splice(index, 1)
      }
    }

    function clearChampies() {
      acquired.value = []
    }

    return { acquired, addChampie, removeChampie, clearChampies }
  },
  { persist: true },
)
