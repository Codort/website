<template>
  <div class="px-2 sm:px-6 lg:px-10">
    <div class="mt-36">
      <h1 class="">Partner with Codort</h1>
      <h3 class="">
        We are creating the platform for the future of source code
        orchestration. We need your help to make this a reality, join other
        software vendors and become a Codort partner today.
      </h3>
    </div>

    <div class="mt-12">
      <h2>Let's find the partnership for you.</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div
          v-for="(partnership, index) in partnerships"
          :key="partnership.id"
          class="cursor-pointer"
          :class="[index < 2 ? 'md:col-span-1' : 'md:col-span-2']"
          @click="navigateToPartnership(partnership.id)"
        >
          <Partnership
            :name="partnership.name"
            :description="partnership.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import partnerships from '~/data/partnerships.js';
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToPartnership(id) {
  window.location = 'mailto:hello@codort.com?subject=Partnerships';
  return;
  router.push(`/partner/${id}`); // FIXME
}

useHead({
  title: 'Partner with us',
});

definePageMeta({
  transparentHeader: true,
});
</script>

<style>
.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E");
  opacity: 0.15;
  pointer-events: none;
  mix-blend-mode: overlay;
}

a {
  text-decoration: underline;
}

header a {
  text-decoration: none;
}
</style>
