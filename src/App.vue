<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { getCurrentInstance, onMounted } from 'vue';

onMounted(() => {
  console.log('App mounted');
});

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
