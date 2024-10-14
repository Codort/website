<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <footer
    :class="{
      'md:bg-transparent': isTransparent || $route.meta.transparentHeader,
      'md:dark:bg-transparent': isTransparent || $route.meta.transparentHeader,
    }"
    class="mt-auto border-t border-black text-black dark:text-white pt-2 transition-colors bg-[#f0afae] dark:bg-[#080d17] px-2 sm:px-6 lg:px-10"
  >
    <div class="">
      <div class="flex justify-between">
        <div>
          <ul>
            <li v-for="item in menu" :key="item.path" class="inline">
              <NuxtLink :key="item.path" :to="item.path" class="pe-2 a">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <div class="flex flex-col items-end">
            <div class="flex space-x-4">
              <NuxtLink
                v-if="config.socials.github"
                aria-label="Open github profile"
                class="text-sm a transition"
                target="_blank"
                rel="nofollow noopener noreferrer"
                :to="config.socials.github"
              >
                <span class="sr-only">github</span>
                <Icon name="fa:github" class="text-xl"></Icon>
              </NuxtLink>
              <NuxtLink
                v-if="config.socials.linkedin"
                aria-label="Open linkedin profile"
                class="text-sm a transition"
                target="_blank"
                rel="noopener noreferrer"
                :to="config.socials.linkedin"
              >
                <span class="sr-only">Linkedin</span>
                <Icon name="fa:linkedin" class="text-xl"></Icon>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="inline mb-2 space-x-2 text-sm text-black dark:text-white">
        <p class="inline text-sm">
          © Codort &#174; {{ new Date().getFullYear() }}
        </p>
        <span>•</span>
        <a
          href="https://docs.google.com/document/d/1wIBfNnJr3G19zIkc7fjeoZVdJZFhx2l4yDhjPws47iM/edit?usp=sharing"
          >Privacy Policy</a
        >
        <span>•</span>
        <p class="inline text-sm">
          Powered by
          <a href="https://nuxt.com/">Nuxt</a>
          and
          <a href="https://github.com/bloggrify/bloggrify">Bloggrify</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config: any = useAppConfig();
const menu = config.menu;

defineProps({
  isTransparent: {
    type: Boolean,
    default: false,
  },
  isDark: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.transparent {
  background-color: transparent;
}

.opaque {
  background: #1b2629;
}
</style>
