<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div
    class="dark:bg-[#411941] bg-opacity-25 sm:bg-gradient-to-r from-[#fda20b] via-[#efb0cf] to-[#e5e9e4] dark:from-[#000000] dark:via-[#c294c2] dark:via-[60%] dark:to-[#fe9c5a] dark:to-[100%] transition-all shadow-2xl border-black text-black rounded-md p-6 ring-2 hover:shadow-3xl ring-black dark:ring-white hover:ring-coral dark:hover:ring-coral"
  >
    <h3 class="">{{ name }}</h3>
    <p class="text-lg">{{ description }}</p>
    <!-- <p class="text-md pt-5 font-bold flex items-center">
      Find out more now
      <Icon name="fa-solid:arrow-right" class="ms-2" />
    </p> -->
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
