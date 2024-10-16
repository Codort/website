<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="w-full px-6 pt-10 sm:pt-0 mt-24 taglist">
    <div class="mx-auto md:p-4">
      <div class="">
        <h1 class="p-4 text-4xl font-bold">Tag : {{ tag }}</h1>
        <div class="space-y-8">
          <div
            v-for="article in docs"
            :key="article._path"
            class="flex flex-col"
          >
            <div class="grid grid-cols-3 gap-4">
              <div
                class="col-span-2 p-4"
                :class="article.cover ? 'col-span-2' : 'col-span-3'"
              >
                <NuxtLink :to="article._path">
                  <h2 class="text-3xl font-semibold mb-1">
                    {{ article.title }}
                  </h2>
                  <p class="text-gray-700 mb-1">
                    {{ article.description }}
                  </p>
                  <div class="mb-3">
                    <span class="text-sm text-gray-500">
                      {{ formatDate(article.date) }}
                      ∙
                    </span>
                    <span class="text-sm text-gray-500">
                      {{ article.readingTime.text }}
                    </span>
                  </div>
                </NuxtLink>
                <div class="flex flex-wrap gap-2">
                  <NuxtLink
                    v-for="this_tag in article.tags"
                    :key="this_tag"
                    class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                    :to="`/tags/${this_tag}`"
                  >
                    {{ this_tag }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div class="flex items-center justify-center mt-10">
            <NuxtLink
              to="/archives"
              class="mt-2 border border-black hover:bg-slate-800 text-black font-semibold py-2 px-4 rounded"
            >
              View all posts
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  doc: any;
  docs: any;
  currentPage: number;
  total: number;
  category: string;
  tag: string;
}>();
</script>
