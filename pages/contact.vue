<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="relative w-full flex flex-col items-center my-0 py-0 pt-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="ms-5 sm:ms-10">
        <div
          class="pt-[100px] sm:pt-0 px-0 py-3 sm:p-3 text-left border-b-4 border-coral text-lg lg:text-2xl"
        >
          <p class="pb-2 text-2xl/[40px]">
            Email us at
            <a class="a" href="mailto:hello@codort.com">hello@codort.com</a>
            to learn more about Codort. Subscribe to our mailing list to stay up
            to date with our latest news including blogs, feature updates,
            opportunities to contribute and job posts.
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <h2 class="text-center self-center">Subscribe to our newsletter</h2>
        <NewsletterFormFull />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact Us',
});

definePageMeta({
  layout: 'hero',
});
</script>

<style scoped>
.bg-gradient {
  background: radial-gradient(
    circle at 0% 140%,
    #e5fcf5 0%,
    #f0afae 40%,
    #7db6c3 100%
  );
}
</style>
