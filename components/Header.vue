<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <header class="sm:justify-start sm:flex-nowrap z-11 w-full">
    <nav
      id="main-header"
      class="transition-colors duration-500 fixed w-full z-10 top-0 pt-10 pb-5 px-2 sm:px-6 lg:px-10 bg-cdtpink dark:bg-navy"
      :class="[
        scrollPosition >= 100
          ? 'opacity-90'
          : '!bg-transparent !dark:bg-transparent',
        '',
      ]"
    >
      <div class="">
        <div class="relative flex items-center justify-between h-12">
          <!-- Mobile menu button-->
          <div
            class="absolute inset-y-0 left-0 flex items-center sm:hidden pt-2"
          >
            <button
              type="button"
              class="inline-flex items-center justify-center me-10 rounded-md dark:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <Icon
                name="fa:bars"
                class="h-5 w-5"
                :class="!mobileMenuOpen ? 'block' : 'hidden'"
                aria-hidden="true"
              ></Icon>
              <Icon
                name="fa:close"
                class="h-5 w-5"
                :class="mobileMenuOpen ? 'block' : 'hidden'"
                aria-hidden="true"
              ></Icon>
            </button>
          </div>
          <div
            class="items-start justify-start sm:items-stretch sm:justify-start w-[100%]"
          >
            <!-- above bar -->
            <div
              class="flex justify-between items-center sm:border-b-2 border-black dark:border-white w-[100%]"
            >
              <!-- logo -->
              <div class="hover:text-gray-900 ps-6 sm:ps-0">
                <nuxt-link
                  class="dark:text-white dark:hover:text-slate-400"
                  to="/"
                >
                  <NuxtImg
                    :src="
                      isDark
                        ? '/images/logo_white.png'
                        : '/images/logo_black.png'
                    "
                    alt="Codort"
                    class="h-[70px]"
                  />
                </nuxt-link>
              </div>
              <!-- color mode -->
              <div class="">
                <ColorScheme placeholder="" tag="span">
                  <UButton
                    :icon="isDark ? 'i-fa-moon-o' : 'i-fa-sun-o'"
                    variant="ghost"
                    class="text-black dark:text-white"
                    aria-label="Change colour mode"
                    @click="toggleColourMode"
                  ></UButton>
                </ColorScheme>
                <Icon name="fa:sun-o" class="w-0 h-0"></Icon>
                <Icon name="fa:moon-o" class="w-0 h-0"></Icon>
                <NuxtImg src="/images/logo_white.png" class="w-0 h-0" />
                <NuxtImg src="/images/logo_black.png" class="w-0 h-0" />
              </div>
            </div>
            <div class="hidden sm:block font-mark pb-6 ps-3">
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
        <div class="mx-2 pt-2 space-y-1 bg-[#f0afae] dark:bg-[#080d17]">
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
import { ref } from 'vue';

const config: any = useAppConfig();
const menu = config.menu;
const mobileMenuOpen = ref(false);

const colorMode = useColorMode();
const isDark = ref(false);

const scrollPosition = ref(0);

function handleScroll() {
  scrollPosition.value = window.scrollY;
}
onMounted(() => {
  isDark.value = colorMode.preference === 'dark';
  scrollPosition.value = window.scrollY;
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleColourMode = () => {
  isDark.value = !isDark.value;
  colorMode.preference = isDark.value ? 'dark' : 'light';
};
</script>
