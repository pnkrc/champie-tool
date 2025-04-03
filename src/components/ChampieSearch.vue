<script setup lang="ts">
import { useChampieFiltersStore } from '@/stores/champie-filters'
import { ref } from 'vue'

const filtersStore = useChampieFiltersStore()
const { setNameFilter, clearNameFilter } = filtersStore
const search = ref('')

function onEscape() {
  if (search.value.length > 0) {
    search.value = ''
    clearNameFilter()
  }
}
</script>

<template>
  <div class="flex items-center gap-2">
    <input
      type="text"
      v-model="search"
      placeholder="Search for a champie..."
      class="w-full rounded-full px-4 py-2 bg-amber-100 dark:bg-sky-800"
      @input="setNameFilter(search)"
      @keydown.escape="onEscape()"
    />
  </div>
</template>
