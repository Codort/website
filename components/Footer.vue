<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <footer
    class="mt-auto text-black dark:text-white pt-2 transition-colors z-50"
  >
    <div
      class="w-full bg-cdtpink dark:bg-navy px-2 sm:px-6 lg:px-10 py-5 sm:flex justify-between"
    >
      <div class="px-4 sm:px-0">
        <NuxtLink to='/'  class="pb-4 sm:pb-10 h2 block">Codort</NuxtLink>
        <b>Stay up to date</b>
        <p>Sign-up to our newsletter now to never miss an update.</p>
        <SubscribeShort />
      </div>
      <div class="flex sm:w-[50%] pt-10 sm:pt-2">
        <ul class="flex w-full justify-between">
          <li v-for="item in menu" :key="item.path" class="flex-1 text-center">
            <NuxtLink :key="item.path" :to="item.path" class="no-underline">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="sm:flex justify-between bg-[#f0afae] dark:bg-[#080d17] w-full px-2 sm:px-6 lg:px-10 py-3"
    >
      <div class="inline mb-2 space-x-2 text-sm text-black dark:text-white">
        <p class="inline text-sm">
          © Codort &#174; {{ new Date().getFullYear() }}
        </p>
        <span class="hex" />
        <!-- prettier-ignore -->
        <a
          to="https://docs.google.com/document/d/1wIBfNnJr3G19zIkc7fjeoZVdJZFhx2l4yDhjPws47iM/edit?usp=sharing"
        >Privacy Policy</a>
        <span class="hex" />
        <p class="inline text-sm">
          Powered by
          <a href="https://nuxt.com/">Nuxt</a>
        </p>
      </div>
      <div class="flex flex-col sm:items-end mt-3 sm:mt-0">
        <div class="flex space-x-4">
          <div v-for="social in config.socials" :key="social.name">
            <NuxtLink
              :aria-label="`Our ${social.name}`"
              class="text-sm a transition"
              target="_blank"
              :to="social.url"
            >
              <span class="sr-only">{{ social.name }}</span>
              <Icon :name="social.icon" class="text-xl"></Icon>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config: any = useAppConfig();
const menu = config.menu;
</script>

<style lang="scss" scoped>
.transparent {
  background-color: transparent;
}

.opaque {
  background: #1b2629;
}

ul li::before {
  content: none;
}
</style>
