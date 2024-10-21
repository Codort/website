<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div
    class="flex mb-[50px] items-center bg-opacity-30 w-full p-20 gap-10 rounded-lg"
  >
    <div class="flex-1">
      <h2 v-if="subheading" class="text-2xl">{{ subheading }}</h2>
      <h1 class="text-3xl">{{ heading }}</h1>
      <p
        class="mt-2 text-xl/[40px] text-left pe-6 pt-4 sm:pt-0"
        v-html="description"
      ></p>
    </div>
    <div class="w-[50%]">
      <NuxtImg v-if="image" :src="`/images/heroes/${image}`" height="200" />
      <div v-if="image_alt" v-html="image_alt" class="text-xl"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  heading: {
    required: true,
    type: String,
  },
  subheading: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  image: {
    required: false,
    default: '',
    type: String,
  },
  image_alt: {
    required: false,
    default: '',
    type: String,
  },
});
</script>
