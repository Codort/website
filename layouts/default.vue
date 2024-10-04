<template>
  <div
    class="flex flex-col min-h-screen min-w-screen w-full bg-gradient m-0 h-full"
  >
    <Header :is-transparent="isTransparent" :is-dark="!isTransparent" />
    <main class="flex-grow flex h-full">
      <slot />
    </main>
    <Footer :is-transparent="isTransparent" :is-dark="!isTransparent" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isTransparent = computed(() => {
  const transparentRoutes = ['index', 'contact'];
  const transparentPaths = ['/archives'];

  return (
    transparentRoutes.includes(route.name) ||
    transparentPaths.includes(route.path)
  );
});
</script>
