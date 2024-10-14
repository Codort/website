<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div>
    <h1 class="text-5xl font-extrabold text-center mb-3">
      {{ article.title }}
    </h1>

    <div
      class="grid grid-cols-2 gap-y-2 sm:gap-0 sm:grid-cols-4 text-center sm:w-full lg:w-3/4 mx-auto"
    >
      <div
        class="flex flex-row justify-center self-center sm:self-start gap-2 items-center"
      >
        <Icon name="fa-solid:calendar" class="w-6 h-6" />
        <p class="font-bold text-md">
          {{ formatDate(article.date) }}
        </p>
      </div>
      <div
        class="flex flex-row justify-center self-center sm:self-start gap-2 items-center"
      >
        <Icon name="fa-solid:clock" class="w-6 h-6" />
        <p class="font-bold text-md">
          {{ article.readingTime.text }}
        </p>
      </div>
      <div class="flex flex-row justify-center self-center sm:self-start gap-2">
        <span>
          <Icon name="fa-brands:creative-commons" class="w-6 h-6" />
          <Icon name="fa-brands:creative-commons-by" class="w-6 h-6" />
        </span>
        <a
          class="font-bold text-md"
          href="https://creativecommons.org/licenses/by/4.0/deed.en"
          >CC BY 4.0</a
        >
      </div>
      <div
        v-if="author"
        class="flex flex-row justify-center self-center sm:self-start ms-2 sm:ms-0 gap-2 items-center"
      >
        <img
          :src="author.avatar"
          loading="lazy"
          alt=""
          class="w-6 h-6 rounded-full"
        />
        <p class="font-bold text-md">
          {{ author.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  article: any;
}>();

const author = findAuthor(props.article.author);
</script>
