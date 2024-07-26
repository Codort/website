<template>
  <Header />
  <div>
    <h2 class="mt-14 mx-auto md:p-4 text-4xl font-bold text-black mb-8 flex justify-center">
        Codort Blog
    </h2>
  <MistralFullListOfPosts />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import Header from '~/components/themes/mistral/Header.vue'
import Footer from '~/components/themes/mistral/Footer.vue'
defineProps<{
  doc: any;
  docs: any;
  currentPage: number;
  total: number;
  category: string;
  tag: string;
}>()
</script>
