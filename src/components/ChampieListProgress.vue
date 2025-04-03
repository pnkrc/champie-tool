<script setup lang="ts">
interface Props {
  acquired: number
  total: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="bg-black text-white relative flex items-center">
    <p class="text-center relative z-50 grow">{{ props.acquired }}/{{ props.total }}</p>
    <div
      class="absolute inset-0 bg-sky-400 z-10"
      :style="{ width: `${(props.acquired / props.total) * 100}%` }"
    ></div>
  </div>
</template>
