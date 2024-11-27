<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="w-full pt-[150px] sm:pt-0 px-0 sm:px-16">
    <div class="flex flex-col items-center max-w-6xl">
      <h2 class="text-left pb-5 font-semibold">
        We Supercharge Companies Building with Open Source by Automating
        Compliance and Revenue Models.
      </h2>
      <h4>
        Our platform makes it easy to commercialise open-source software through
        hosting, open-core, dual licensing, and other revenue models, whilst
        also supporting community activation and growth.
      </h4>
      <div
        class="flex gap-3 flex-col items-center sm:flex-row mt-10 mb-5 sm:mb-10 me-6"
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
        <SubscribeWide class="py-5" formName="adopter" />
      </div>
    </div>
  </div>
  <div class="w-[70%] hidden lg:flex items-center align-middle">
    <NuxtImg src="images/heroes/control.png" class="w-full max-w-[700px]" />
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
