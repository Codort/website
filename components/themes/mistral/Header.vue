<template>
  <header class="sm:justify-start sm:flex-nowrap z-11 w-full text-sm border">
    <nav class="transition-colors fixed w-full z-10 top-5">
      <div class="px-2 sm:px-6 lg:px-10">
        <div class="relative flex items-center justify-between h-12">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu" aria-expanded="false"
              @click="mobileMenuOpen = !mobileMenuOpen">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" :class="!mobileMenuOpen ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6" :class="mobileMenuOpen ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="items-start justify-start sm:items-stretch sm:justify-start w-[100%]">
            <div class="flex-shrink-0 flex items-start border-b-2 border-black w-[100%]">
              <div class="text-black hover:text-gray-900">
                <!-- <div class="flex"> -->
                <!-- <img v-if="config.logo" :src="config.logo" class="h-10 rounded-full mr-2" -->
                <!-- alt="logo" /> -->
                <nuxt-link class="text-4xl pt-1" to="/">Codort</nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="hidden sm:block absolute left-0 font-mark">
              <div class="flex space-x-4">
                <NuxtLink v-for="item in menu" :key="item.path" :to="item.path"
                  class="text-black hover:text-gray-500 pe-5 py-2 rounded-md text-lg font-medium font-to-invert-to-black">
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div :class="mobileMenuOpen ? '' : 'hidden'">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink v-for="item in menu" :key="item.path" :to="item.path"
            class="text-black hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium font-to-invert-to-black">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  const config: any = useAppConfig()
  const menu = config.menu
  const mobileMenuOpen = ref(false)
</script>

<style lang="scss" scoped>
  .inverted {
    .font-to-invert-to-black {
      @apply text-slate-700 transition-all;

      &:hover {
        @apply text-white;
      }
    }
  }
</style>