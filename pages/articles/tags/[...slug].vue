<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="w-full px-6 pt-10 sm:pt-0 sm:px-48">
    <h2 class="mt-24 md:p-4 text-4xl font-bold mb-8 text-center">
      Articles - tag: {{ $route.params.slug[0] }}
    </h2>
    <FilteredArticleList :tag="$route.params.slug[0]" />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Articles',
});
</script>

<style scoped>
.bg-gradient {
  background: radial-gradient(
    ellipse at 0% 10%,
    #e5fcf5 0%,
    #f0afae 50%,
    #7db6c3 100%
  );
}
</style>
