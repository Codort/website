<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <main>
    <div class="mx-auto px-2 sm:px-6 lg:px-8 bloglist">
      <ContentList :query="query">
        <template #default="{ list }">
          <div
            v-for="article in list"
            :key="article._path"
            class="mb-8 ml-4 lg:ml-0"
          >
            <div class="flex items-center">
              <img :src="`/images/${article.cover}`" class="w-[100px] mr-5" />
              <div class="">
                <NuxtLink :to="`/articles${article._path}`" class="a">
                  <p class="text-xl inline">
                    {{ article.date }} &middot; {{ article.title }}
                  </p>
                </NuxtLink>
                <div>{{ article.description }}</div>
                <span class="text-xs font-bold">
                  {{ article.readingTime.text }}
                </span>
              </div>
            </div>
          </div>
          <NuxtLink
            to="/articles"
            class="flex justify-start items-center gap-2"
          >
            <Icon name="fa:arrow-left" /> Back to all articles</NuxtLink
          >
        </template>
      </ContentList>
    </div>
  </main>
</template>
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
});

const query: QueryBuilderParams = {
  path: '/',
  sort: [{ date: -1 }],
  where: [{ tags: { $contains: props.tag } }],
};
</script>
