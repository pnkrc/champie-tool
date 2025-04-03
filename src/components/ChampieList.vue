<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import ChampieGroup from './ChampieGroup.vue'
import { IconBoxes } from '@/boxes'
import { useAcquiredChampieStore } from '@/stores/acquired-champies'
import { useChampieFiltersStore } from '@/stores/champie-filters'
import ChampieListProgress from './ChampieListProgress.vue'
import BoxFilter from './BoxFilter.vue'

const acquiredStore = useAcquiredChampieStore()
const { acquired } = acquiredStore

const filtersStore = useChampieFiltersStore()
const { boxFilters } = storeToRefs(filtersStore)

const champies = computed(() => {
  return IconBoxes.filter((box) => {
    if (boxFilters.value.length === 0) return true
    return boxFilters.value.includes(box.name)
  }).map((box) => {
    return {
      name: box.name,
      icons: box.icons.map((icon) => {
        return {
          name: icon,
          acquired: acquired.includes(icon),
        }
      }),
    }
  })
})

function onSelect(champieName: string) {
  if (acquired.includes(champieName)) {
    acquiredStore.removeChampie(champieName)
  } else {
    acquiredStore.addChampie(champieName)
  }
}
</script>

<template>
  <div>
    <ChampieListProgress
      :acquired="acquired.length"
      :total="IconBoxes.reduce((acc, box) => acc + box.icons.length, 0)"
    />
    <BoxFilter :boxNames="IconBoxes.map((box) => box.name)" />
    <div class="columns-1 gap-4 px-8 *:mb-4 md:columns-2 xl:columns-3 2xl:columns-4">
      <ChampieGroup
        v-for="(box, index) in champies"
        :key="index"
        :name="box.name"
        :champies="box.icons"
        @onSelect="onSelect"
      />
    </div>
  </div>
</template>
