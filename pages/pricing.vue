<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="">
    <div class="pb-20">
      <h1 class="pb-5">Pricing</h1>
      <h3 class="">
        We're not ready to release our platform just yet so we haven't put up
        any pricing information.
      </h3>
      <h3>
        Instead, sign-up to be an early adopter and get first access to our
        platform for free!
      </h3>
    </div>
    <div class="flex flex-col self-center items-center">
      <h2 class="pb-0">Become an early adopter today</h2>
      <SubscribeFull form-name="adopter" :beta="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Pricing',
});
</script>
