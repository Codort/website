<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="w-full">
    <div class="pb-20">
      <h1 class="pb-5">Articles</h1>
      <ArticleList />
    </div>
    <div class="flex flex-col self-center items-center">
      <h2 class="pb-0">Subscribe to our newsletter and never miss an update.</h2>
      <SubscribeFull :beta="false" />
    </div>
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
