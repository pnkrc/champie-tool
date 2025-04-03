<script setup lang="ts">
import ChampieList from './components/ChampieList.vue'
import ChampieSearch from './components/ChampieSearch.vue'
</script>

<template>
  <div
    class="min-h-screen cursor-default bg-amber-200 pb-8 font-serif dark:bg-sky-900 dark:text-white"
  >
    <header
      class="sticky top-0 z-100 flex items-center justify-between bg-amber-300 px-8 py-4 dark:bg-sky-950"
    >
      <h1 class="text-2xl font-black uppercase">Champie tool</h1>
      <ChampieSearch />
    </header>

    <main>
      <ChampieList />
    </main>
  </div>
</template>
