<template>
  <div>
    <h1 class="text-5xl font-extrabold text-center mb-3">
      {{ article.title }}
    </h1>

    <div class="grid grid-cols-3 text-center sm:w-full md:w-1/2 mx-auto">
      <div class="flex flex-row justify-center self-start gap-2 items-center">
        <Icon name="fa-solid:calendar" class="w-6 h-6" />
        <p class="font-bold text-md">
          {{ formatDate(article.date) }}
        </p>
      </div>
      <div class="flex flex-row justify-center self-start gap-2 items-center">
        <Icon name="fa-solid:clock" class="w-6 h-6" />
        <p class="font-bold text-md">
          {{ article.readingTime.text }}
        </p>
      </div>
      <div
        v-if="author"
        class="flex flex-row justify-center self-start gap-2 items-center"
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
