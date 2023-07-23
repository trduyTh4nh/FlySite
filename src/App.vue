<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/Header.vue'
</script>

<template>

  <div id="app-maim">
    <div id="app-main_header">
      <Header></Header>
    </div>

      <div id="app-main_body">
        <RouterView />
      </div>
  </div>
</template>