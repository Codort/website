<template>
  <div class="flex flex-col min-h-screen min-w-screen w-full bg-gradient m-0">
    <Header :isTransparent="false" />
    <main class="flex-grow flex px-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>