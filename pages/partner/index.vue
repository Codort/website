<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div>
    <div class="">
      <h1 class="pb-5">Partner with Codort</h1>
      <h3 class="">
        We are creating the platform for the future of source code
        orchestration. We need your help to make this a reality, join other
        software vendors and become a Codort partner today.
      </h3>
    </div>

    <div class="mt-12">
      <h2>Let's find the partnership for you.</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 pb-20">
        <div
          v-for="(partnership, index) in partnerships"
          :key="partnership.id"
          :class="[index < 2 ? 'md:col-span-1' : 'md:col-span-2']"
        >
          <!-- @click="navigateToPartnership(partnership.id)" 
           class="cursor-pointer"-->
          <Partnership
            :name="partnership.name"
            :description="partnership.description"
          />
        </div>
      </div>
      <div class="flex flex-col self-center items-center pb-10 sm:pb-0">
        <h2 class="">Become a Codort partner</h2>
        <SubscribeFull form-name="partner" :beta="false" />
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
</script>

<style>
a {
  text-decoration: underline;
}

header a {
  text-decoration: none;
}
</style>
