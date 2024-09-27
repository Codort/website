<template>
  <div class="flex flex-col min-h-screen bg-gradient m-0">
    <div class="noise-overlay m-0"></div>
    <Header />
    <div>
      <h2 class="mt-24 mx-auto md:p-4 text-4xl font-bold text-black mb-8 flex justify-center">
        Codort Articles
      </h2>
      <MistralFullListOfPosts />
    </div>
    <Footer />
  </div>
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
  useHead({
    title: 'Articles'
  })
</script>

<style scoped>
  .bg-gradient {
    background: radial-gradient(circle at 100% 0%, #e5fcf5 5%, #f0afae 20%, #7db6c3 50%);
  }
</style>