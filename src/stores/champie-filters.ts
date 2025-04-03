import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChampieFiltersStore = defineStore('champieFilters', () => {
  const nameFilter = ref<string | null>(null)
  const boxFilters = ref<Array<string>>([])

  function setNameFilter(name: string | null) {
    nameFilter.value = name
  }

  function clearNameFilter() {
    nameFilter.value = null
  }

  function addBoxFilter(box: string) {
    if (!boxFilters.value.includes(box)) {
      boxFilters.value.push(box)
    }
  }

  function removeBoxFilter(box: string) {
    const index = boxFilters.value.indexOf(box)
    if (index !== -1) {
      boxFilters.value.splice(index, 1)
    }
  }

  function clearBoxFilters() {
    boxFilters.value = []
  }

  return {
    nameFilter,
    boxFilters,
    setNameFilter,
    clearNameFilter,
    addBoxFilter,
    removeBoxFilter,
    clearBoxFilters,
  }
})
