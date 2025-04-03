<script setup lang="ts">
interface Props {
  name: string
  acquired: boolean
}

const props = defineProps<Props>()

const emit = defineEmits(['onSelect'])
</script>

<template>
  <div class="group" @click="emit('onSelect', props.name)" aria-role="button">
    <p
      class="break-inside-avoid group-hover:italic"
      :class="{
        'text-sky-400': props.acquired,
      }"
    >
      {{ props.name }}
    </p>
  </div>
</template>
