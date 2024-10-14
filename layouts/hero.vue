<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <SlowRadialBlur
    class="flex flex-col min-h-screen bg-gradient-light dark:bg-gradient-dark m-0"
  >
    <div class="noise-overlay m-0"></div>
    <Header />
    <main class="flex-grow flex items-center px-6 min-h-screen">
      <slot />
    </main>
    <Footer />
  </SlowRadialBlur>
</template>
