<template>
  <ContentQuery v-slot="{ data }" :path="contentPath" find="one">
    <div v-if="data.cover" class="md:flex justify-center mt-24 hidden">
      <img
        :src="'/images/' + data.cover"
        :alt="data.title"
        width="200px"
        height="200px"
      />
    </div>
    <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-10">
      <ArticleHeader :article="data" />
      <div class="text-left mx-auto">
        <div class="flex flex-wrap lg:flex-row-reverse py-6">
          <div class="w-full px-5 max-w-none centered-image">
            <ContentRenderer
              id="nuxtContent"
              :value="data"
              class="min-w-full md:p-10 mx-auto prose"
            />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center mb-6">
        <NuxtLink
          v-for="this_tag in data.tags"
          :key="this_tag"
          :to="`/articles/tags/${this_tag}`"
          class="tag"
        >
          {{ this_tag }}
        </NuxtLink>
      </div>
    </div>
  </ContentQuery>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const contentPath = computed(() => {
  return route.path.replace(/^\/articles/, '');
});

definePageMeta({
  layout: 'article',
});
</script>
