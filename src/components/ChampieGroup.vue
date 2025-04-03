<script setup lang="ts">
import ChampieItem from './ChampieItem.vue'
import ChampieGroupProgress from './ChampieGroupProgress.vue'
import { useChampieFiltersStore } from '@/stores/champie-filters'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

interface Props {
  name: string
  champies: Array<{
    name: string
    acquired: boolean
  }>
}

const props = defineProps<Props>()
const emit = defineEmits(['onSelect'])

const filtersStore = useChampieFiltersStore()
const { nameFilter } = storeToRefs(filtersStore)

const filteredChampies = computed(() => {
  if (nameFilter.value === null) return props.champies
  if (nameFilter.value.length === 0) return props.champies
  return props.champies.filter((champie) => {
    if (nameFilter.value === null) return true
    return champie.name.toLowerCase().includes(nameFilter.value.toLowerCase())
  })
})

const shouldShowBox = computed(() => {
  if (nameFilter.value === null) return true
  if (nameFilter.value.length === 0) return true
  return props.champies.some((champie) => {
    if (nameFilter.value === null) return true
    return champie.name.toLowerCase().includes(nameFilter.value.toLowerCase())
  })
})
</script>

<template>
  <div
    v-if="shouldShowBox"
    class="break-inside-avoid shadow-md border-2 border-yellow-600 bg-amber-100 dark:bg-sky-950 overflow-auto"
  >
    <ChampieGroupProgress
      :acquired="props.champies.filter((champie) => champie.acquired).length"
      :total="props.champies.length"
    />
    <h2 class="text-xl text-center font-bold italic uppercase mt-4 text-yellow-600">
      {{ props.name }}
    </h2>
    <div class="champie-list columns-2 gap-4 p-4">
      <ChampieItem
        v-for="(champie, index) in filteredChampies"
        :key="index"
        :name="champie.name"
        :acquired="champie.acquired"
        @onSelect="emit('onSelect', champie.name)"
      />
    </div>
  </div>
</template>
