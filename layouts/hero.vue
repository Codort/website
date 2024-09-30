<template>
  <SlowRadialBlur class="flex flex-col min-h-screen bg-gradient m-0">
    <div class="noise-overlay m-0"></div>
    <Header :isTransparent="isHeaderTransparent" />
    <main class="flex-grow flex items-center px-6">
      <slot />
    </main>
    <Footer />
  </SlowRadialBlur>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const isHeaderTransparent = computed(() => {
    const transparentRoutes = ['index', 'contact']; // Add your route names here
    return transparentRoutes.includes(route.name);
  });
</script>