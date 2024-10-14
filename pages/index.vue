<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div
    class="relative w-full flex flex-col items-center my-0 py-0 pt-[150px] sm:pt-0"
  >
    <div
      class="flex flex-col items-center w-full max-w-5xl my-0 py-0 rounded-3xl ms-0 sm:ms-10"
    >
      <div class="">
        <h1>Say hello to source code orchestration</h1>
        <p class="mt-2 text-2xl/[40px] text-left pe-6">
          Fed up of manually hacking tools together through CI/CD scripts? Fed
          up of not being able to use the latest AI-powered solution because
          it's not approved on your SCM's marketplace? Say hello to
          <i>source code orchestration</i> and
          <span class="border-b-2 border-coral">
            code how <strong>you</strong> want </span
          >. <br /><br />

          If these problems sound familiar,
          <a href="mailto:hello@codort.com">email us</a> or
          <a href="https://calendar.app.google/CuPH2sRtvcajvXvn9">
            set up a meeting</a
          >
          now. Join our
          <a href="https://discord.com/invite/nnBHHbMr23">Discord</a> to take
          part in the source code revolution.
        </p>
      </div>

      <div class="flex gap-3 flex-col items-center sm:flex-row mt-10 mb-5 me-6">
        <a
          href="https://discord.com/invite/nnBHHbMr23"
          class="button flex items-center justify-between py-2.5 mb-3 sm:mb-0 w-full sm:w-auto"
        >
          <Icon
            name="ic:baseline-discord"
            color="black"
            size="33px"
            class="mr-2"
          />
          <span class="text-lg">Join our Discord</span>
        </a>
        <a
          href="https://www.linkedin.com/company/codort/"
          class="button flex items-center justify-between py-2.5 mb-3 sm:mb-0 w-full sm:w-auto"
        >
          <Icon name="jam:linkedin" color="black" size="33px" class="mr-2" />
          <span class="text-lg">Follow our LinkedIn</span>
        </a>
        <a
          href="/contact"
          class="button flex items-center justify-between py-2.5 mb-3 sm:mb-0 w-full sm:w-auto"
        >
          <Icon
            name="ic:baseline-mail"
            color="black"
            size="33px"
            class="mr-2"
          />
          <span class="text-lg">Join our mailing list</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Codort',
});

definePageMeta({
  layout: 'hero',
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
