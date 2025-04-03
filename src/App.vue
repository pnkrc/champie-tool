<script setup lang="ts">
import ChampieList from './components/ChampieList.vue'
import ChampieSearch from './components/ChampieSearch.vue'
</script>

<template>
  <div
    class="bg-amber-200 dark:bg-sky-900 dark:text-white font-serif pb-8 cursor-default min-h-screen"
  >
    <header
      class="py-4 px-8 bg-amber-300 dark:bg-sky-950 sticky top-0 z-10 flex justify-between items-center"
    >
      <h1 class="text-2xl font-black uppercase">Champie tool</h1>
      <ChampieSearch />
    </header>

    <main>
      <ChampieList />
    </main>
  </div>
</template>
