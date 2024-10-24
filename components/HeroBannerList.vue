<template>
  <div>
    <div class="flex flex-col items-center w-full my-0 py-0">
      <h2 class="pb-10">{{ heading }}</h2>
      <div class="w-full sm:px-10">
        <div
          v-for="(hero, index) in this_hero"
          :key="hero.heading"
          class="flex"
        >
          <HeroBanner
            :heading="hero.heading"
            :subheading="hero.subheading"
            :description="hero.description"
            :image="hero.image"
            :image_alt="hero.image_alt"
            :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
            class="bg-coral dark:bg-gray-800"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import all_heroes from '~/data/heroes.js';

const props = defineProps({
  hero: {
    required: true,
    type: String,
  },
  heading: {
    required: true,
    type: String,
  },
});

const this_hero = all_heroes[props.hero];
</script>
