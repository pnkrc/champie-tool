<script setup lang="ts">
interface Props {
  acquired: number
  total: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="relative flex items-center bg-black text-white">
    <p class="relative z-50 grow text-center">{{ props.acquired }}/{{ props.total }}</p>
    <div
      class="absolute inset-0 z-10 bg-sky-400"
      :style="{ width: `${(props.acquired / props.total) * 100}%` }"
    ></div>
  </div>
</template>
