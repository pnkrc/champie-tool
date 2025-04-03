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
  <div class="flex gap-4 p-8 text-xs font-normal">
    <ul class="flex flex-wrap items-center gap-2">
      <label class="mr-4 font-bold uppercase">Region:</label>
      <li
        v-for="(boxName, index) in props.boxNames"
        :key="index"
        class="cursor-pointer rounded-full bg-amber-100 px-4 py-1 hover:bg-amber-300 dark:bg-sky-700 hover:dark:bg-sky-800"
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
