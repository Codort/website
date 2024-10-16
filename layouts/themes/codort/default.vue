<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="w-full h-full min-h-screen pt-[150px] md:pt-[50px]">
    <div v-if="doc">
      <div v-if="doc.cover" class="md:flex justify-center mt-24 hidden">
        <img
          :src="'/images/' + doc.cover"
          :alt="doc.title"
          width="200px"
          height="200px"
        />
      </div>
      <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-10">
        <ArticleHeader :article="doc" />
        <div class="text-left mx-auto">
          <div class="flex flex-wrap lg:flex-row-reverse py-6">
            <div class="w-full px-5 max-w-none centered-image">
              <ContentRenderer
                id="nuxtContent"
                :value="doc"
                class="min-w-full md:p-10 mx-auto prose"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center mb-6">
          <NuxtLink
            v-for="this_tag in doc.tags"
            :key="this_tag"
            :to="`/tags/${this_tag}`"
            class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-2"
          >
            {{ this_tag }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ArticleHeader from '~/components/ArticleHeader.vue';
defineProps<{
  doc: any;
  docs: any;
  currentPage: number;
  total: number;
  category: string;
  tag: string;
}>();
</script>
