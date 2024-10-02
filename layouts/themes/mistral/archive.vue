<template>
  <div class="w-full px-6 sm:px-48">
    <h2 class="mt-24 md:p-4 text-4xl font-bold text-black mb-8 text-center">
      Codort Articles
    </h2>
    <MistralFullListOfPosts />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  doc: any;
  docs: any;
  currentPage: number;
  total: number;
  category: string;
  tag: string;
}>();
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
