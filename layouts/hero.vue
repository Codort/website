<template>
  <SlowRadialBlur class="flex flex-col min-h-screen bg-gradient m-0">
    <div class="noise-overlay m-0"></div>
    <Header :is-transparent="true" />
    <main class="flex-grow flex items-center px-6">
      <slot />
    </main>
    <Footer :is-transparent="true" />
  </SlowRadialBlur>
</template>
