<template>
  <div class="bg-[#e5fcf5] w-full h-full min-h-screen pt-[100px] sm:pt-0">
    <div v-if="doc">
      <div v-if="doc.cover" class="md:flex justify-center mt-24 hidden">
        <img
          :src="'/images/' + doc.cover"
          :alt="doc.title"
          fit="cover"
          placeholder
        />
      </div>
      <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-10">
        <ArticleHeader :article="doc" />
        <div class="text-left mx-auto">
          <div class="flex flex-wrap lg:flex-row-reverse py-12">
            <div class="w-full px-5 max-w-none centered-image">
              <ContentRenderer
                id="nuxtContent"
                :value="doc"
                class="prose text-sm md:text-xl min-w-full md:p-10 mx-auto"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center mb-6">
          <NuxtLink
            v-for="tag in doc.tags"
            :key="tag"
            :to="`/tags/${tag}`"
            class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-2"
          >
            {{ tag }}
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
