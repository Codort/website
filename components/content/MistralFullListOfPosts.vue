<template>
  <main>
    <div class="mx-auto px-2 sm:px-6 lg:px-8 bloglist">
      <ContentList :query="query">
        <template #not-found>
          <p>No posts found.</p>
        </template>
        <template #default="{ list }">
          <div
            v-for="article in list"
            :key="article._path"
            class="mb-8 ml-4 lg:ml-0"
          >
            <!-- <div
              v-if="shouldDisplayYear(list, article.date, index)"
              class="mb-4"
            >
              <span class="text-3xl font-bold">{{
                getYear(article.date)
              }}</span>
            </div> -->
            <div class="flex items-center">
              <img :src="`/images/${article.cover}`" class="w-[100px] mr-5" />
              <div class="">
                <NuxtLink :to="article._path" class="a">
                  <p class="text-xl inline">
                    {{ article.date }} &middot; {{ article.title }}
                  </p>
                </NuxtLink>
                <div>{{ article.description }}</div>
                <span class="text-xs font-bold">{{
                  article.readingTime.text
                }}</span>
                <span v-if="article.tags && article.tags.length > 0">
                  &nbsp; &middot;</span
                >
                <NuxtLink
                  v-for="tag in article.tags"
                  :key="tag"
                  :to="`/tags/${tag}`"
                  class="bg-gray-200 rounded-full px-1.5 py-1 text-xs font-bold text-gray-700 m-1.5"
                >
                  {{ tag }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </ContentList>
    </div>
  </main>
</template>
<script setup lang="ts">
const query = {
  path: '',
  where: [{ hidden: { $ne: true }, listed: { $ne: false } }],
  sort: [{ date: -1 }],
};

function getYear(date) {
  return new Date(date).getFullYear();
}

function shouldDisplayYear(list, date, index) {
  const currentYear = getYear(date);
  const prevYear = index > 0 ? getYear(list[index - 1].date) : null;
  return currentYear !== prevYear;
}
</script>
