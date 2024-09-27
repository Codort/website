<template>
  <SlowRadialBlur class="flex flex-col min-h-screen bg-gradient m-0">
    <!-- <div class="flex flex-col min-h-screen bg-gradient m-0"> -->
    <div class="noise-overlay m-0"></div>
    <Header />
    <main class="flex-grow flex items-center px-6">
      <div class="relative w-full flex flex-col items-start my-0 py-0">
        <div class="w-full max-w-3xl my-0 py-0 rounded-3xl ms-10">
          <div class="mx-auto max-w-3xl py-10">
            <div class="text-left">
              <div class="flex flex-col items-start">
                <p class="mt-2 text-md sm:text-xl text-left">
                  Fed up of manually hacking tools together through CI/CD scripts?
                  Fed up of not being able to use the latest AI-powered solution because it's not
                  approved on your SCM's marketplace?
                  Say hello to <i>source code orchestration</i> and
                  <span class="border-b-2 border-cdtyellow">code how <strong>you</strong>
                    want</span>.
                  <br><br>

                  If these problems sound familiar,
                  <a href="mailto:hello@codort.com">email us</a> or
                  <a href="https://calendar.app.google/CuPH2sRtvcajvXvn9">set up a meeting</a>
                  now.
                  Join our <a href="https://discord.com/invite/nnBHHbMr23">Discord</a> to take
                  part
                  in the source code revolution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-10 sm:flex-row items-center justify-left ms-10 sm:gap-6 grid grid-cols-1 sm:grid-cols-3 mb-5">
          <a href="https://discord.com/invite/nnBHHbMr23" class="button py-2.5 mb-3 sm:mb-0">
            <Icon name="ic:baseline-discord" color="black" size="20px" />
            <span class="pl-2">Join our Discord</span>
          </a>
          <a href="https://www.linkedin.com/company/codort/" class="button py-2.5 mb-3 sm:mb-0">
            <Icon name="jam:linkedin" color="black" size="20px" />
            <span class="pl-2">Follow our LinkedIn</span>
          </a>
          <a href="/contact" class="button py-2.5 mb-3 sm:mb-0">
            <Icon name="ic:baseline-mail" color="black" size="20px" />
            <span class="pl-2">Join our mailing list</span>
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </SlowRadialBlur>
</template>

<script setup lang="ts">
  import Header from '~/components/themes/mistral/Header.vue'
  import Footer from '~/components/themes/mistral/Footer.vue'
  useHead({
    title: 'Codort'
  })
</script>

<style>
  .noise-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E");
    opacity: 0.4;
    pointer-events: none;
    mix-blend-mode: overlay;
  }
</style>