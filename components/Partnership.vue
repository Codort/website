<template>
  <div
    class="partnership shadow-xl bg-white border-black text-black rounded-md p-6 transition-all"
  >
    <h3 class="">{{ name }}</h3>
    <p class="text-lg">{{ description }}</p>
    <p class="text-md pt-5 font-bold flex items-center">
      Find out more now <fa icon="arrow-right" class="ps-2" />
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@property --grad1 {
  syntax: '<color>';
  initial-value: #fda20b;
  inherits: false;
}

@property --grad2 {
  syntax: '<color>';
  initial-value: #efb0cf;
  inherits: false;
}

@property --grad3 {
  syntax: '<color>';
  initial-value: #e5e9e4;
  inherits: false;
}

.partnership {
  background: linear-gradient(
    to right,
    var(--grad1) 0%,
    var(--grad2) 30%,
    var(--grad3) 90%
  );
  transition:
    --grad1 1s,
    --grad2 1s,
    --grad3 1s;
}

.partnership:hover {
  background: linear-gradient(
    var(#e5e9e4) 0%,
    var(#e5e9e4) 0%,
    var(#efb0cf) 80%
  );

  --grad1: #e5e9e4;
  --grad2: #fda20b;
  --grad3: #efb0cf;
}
</style>
