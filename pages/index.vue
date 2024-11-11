<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div
    class="relative w-full flex flex-col items-center my-0 py-0 pt-[100px] sm:pt-0"
  >
    <h1 class="text-center">Say hello to source code orchestration</h1>
    <h2>
      Code how <span class="text-coral">you</span> want and leave the
      integrations to us.
    </h2>
    <div
      class="flex gap-3 flex-col items-center sm:flex-row mt-10 mb-5 pb-5 me-6"
    >
      <a
        href="https://calendar.app.google/o3Xu68vocUKsozVS6"
        class="button flex items-left justify-left gap-4 sm:gap-0 sm:justify-between py-2.5 mb-3 sm:mb-0 w-full sm:w-auto"
      >
        <Icon name="fa:phone" color="black" size="33px" class="mr-2" />
        <span class="text-lg">Book a call</span>
      </a>
      <a
        href="https://www.linkedin.com/company/codort/"
        class="button flex items-left justify-left gap-4 sm:gap-0 sm:justify-between py-2.5 mb-3 sm:mb-0 w-full sm:w-auto"
      >
        <Icon name="jam:linkedin" color="black" size="33px" class="mr-2" />
        <span class="text-lg">Follow us</span>
      </a>
    </div>
    <div class="flex flex-col items-center mb-10">
      <SubscribeWide class="py-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Codort',
});

definePageMeta({
  layout: 'hero',
});
</script>
