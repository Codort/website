<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="relative w-full flex flex-col items-center">
    <h1 class="text-left sm:text-center pb-5">
      We believe that 99% of all code <br />
      will be open-source by 2035.
    </h1>
    <h2>We're building the platform to make this vision a reality.</h2>
    <div
      class="flex gap-3 flex-col items-center sm:flex-row mt-10 mb-5 pb-5 me-6"
    >
      <a
        href="https://calendar.app.google/o3Xu68vocUKsozVS6"
        class="button flex items-left justify-left gap-4 sm:gap-0 sm:justify-between py-2.5 mb-3 sm:mb-0 w-full sm:w-auto"
      >
        <Icon
          name="fa:phone"
          size="33px"
          class="mr-2 !text-black dark:!text-black"
        />
        <span class="text-lg !text-black dark:!text-black">Learn more</span>
      </a>
      <a
        href="https://www.linkedin.com/company/codort/"
        class="button flex items-left justify-left gap-4 sm:gap-0 sm:justify-between py-2.5 mb-3 sm:mb-0 w-full sm:w-auto"
      >
        <Icon
          name="jam:linkedin"
          size="33px"
          class="mr-2 !text-black dark:!text-black"
        />
        <span class="text-lg !text-black dark:!text-black">Follow us</span>
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
