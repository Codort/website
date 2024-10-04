<template>
  <header
    :class="{ dark: isDark }"
    class="sm:justify-start sm:flex-nowrap z-11 w-full text-sm border bg-opacity-5"
  >
    <nav
      :class="[
        'transition-colors fixed w-full z-10 top-0 pt-10 pb-5',
        {
          'md:bg-transparent': isTransparent || $route.meta.transparentHeader,
          'bg-[#f0afae] dark:bg-[#1b2629] bg-opacity-[0.97] dark:bg-opacity-[0.97]':
            !(isTransparent || $route.meta.transparentHeader),
        },
      ]"
    >
      <div class="px-2 sm:px-6 lg:px-10">
        <div class="relative flex items-center justify-between h-12">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md dark:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6 mb-2"
                :class="!mobileMenuOpen ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="h-6 w-6 mb-2"
                :class="mobileMenuOpen ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-start justify-start sm:items-stretch sm:justify-start w-[100%]"
          >
            <div
              class="flex-shrink-0 flex items-start pb-2 sm:pb-0 sm:border-b-2 border-black w-[100%]"
            >
              <div class="hover:text-gray-900">
                <!-- <div class="flex"> -->
                <!-- <img v-if="config.logo" :src="config.logo" class="h-10 rounded-full mr-2" -->
                <!-- alt="logo" /> -->
                <nuxt-link
                  class="text-4xl pt-1 ps-0 dark:text-white dark:hover:text-slate-400"
                  to="/"
                >
                  Codort
                </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="hidden sm:block left-0 font-mark pb-6">
              <div class="flex space-x-4">
                <NuxtLink
                  v-for="item in menu"
                  :key="item.path"
                  :to="item.path"
                  class="hover:text-gray-500 dark:text-white dark:hover:text-slate-400 pe-5 py-2 rounded-md text-lg font-medium font-to-invert-to-black"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div :class="mobileMenuOpen ? '' : 'hidden'">
        <div class="mx-2 pt-2 space-y-1 bg-[#f0afae]">
          <NuxtLink
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium font-to-invert-to-black"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const config: any = useAppConfig();
const menu = config.menu;
const mobileMenuOpen = ref(false);

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
