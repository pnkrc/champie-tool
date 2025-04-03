<script setup lang="ts">
import { useChampieFiltersStore } from '@/stores/champie-filters'
interface Props {
  boxNames: Array<string>
}

const props = defineProps<Props>()

const filtersStore = useChampieFiltersStore()
const { boxFilters, addBoxFilter, removeBoxFilter } = filtersStore

function toggleBoxFilter(boxName: string) {
  if (boxFilters.includes(boxName)) {
    removeBoxFilter(boxName)
  } else {
    addBoxFilter(boxName)
  }
}
</script>

<template>
  <div class="flex gap-4 text-xs font-normal p-8">
    <ul class="flex flex-wrap gap-2 items-center">
      <label class="uppercase mr-4 font-bold">Region:</label>
      <li
        v-for="(boxName, index) in props.boxNames"
        :key="index"
        class="bg-amber-100 dark:bg-sky-700 hover:bg-amber-300 hover:dark:bg-sky-800 rounded-full px-4 py-1 cursor-pointer"
        :class="{
          'bg-amber-400 dark:bg-sky-950': boxFilters.includes(boxName),
        }"
        @click="toggleBoxFilter(boxName)"
        aria-role="button"
      >
        <p>{{ boxName }}</p>
      </li>
    </ul>
  </div>
</template>
