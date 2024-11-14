<template>
  <div class="hex-img">
    <NuxtImg :src="src" :width="width" :class="[{'filter grayscale' : isGrayscale }, imgClasses]" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: null,
    required: false,
  },
  isGrayscale: {
    type: Boolean,
    required: false,
    default: false,
  },
  imgClasses: {
    type: [String, Object, Array],
    required: false,
    default: '',
  }
});
</script>
