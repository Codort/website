<template>
  <Header />
  <div class="flex flex-col text-black">
    <main class="flex-grow">
      <div
        class="bg-[url('/images/bg-yellow.png')] bg-auto bg-repeat relative px-6 min-h-[95vh] w-full flex flex-col items-center justify-center my-0 py-0"
      >
        <div class="bg-white w-full max-w-3xl my-0 py-0 mt-10 rounded-3xl m-10">
          <div class="mx-auto max-w-3xl p-10">
            <div class="text-left">
              <div class="flex flex-col items-center">
                <div class="flex items-stretch my-4">
                  <img class="h-16 sm:h-20 w-auto" src="/images/cody.png" />
                  <h1
                    class="text-5xl sm:text-6xl lg:text-7xl font-bold ml-3 mt-2.5"
                  >
                    Codort
                  </h1>
                </div>
                <h2
                  class="text-xl sm:text-3xl lg:text-4xl tracking-tight border-b-4 pb-2 border-cdtyellow"
                >
                  A home for developers <i>you</i> can trust.
                </h2>
              </div>

              <div class="flex flex-col items-center">
                <p class="mt-6 text-md sm:text-xl leading-8 text-center">
                  Our open-core platform radically improves how open source
                  software is developed, managed and maintained. Be part of the
                  journey from Day 0: build, maintain, manage and contribute.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-10 sm:flex-row items-center justify-left sm:gap-6 grid grid-cols-1 sm:grid-cols-3 mb-5"
        >
          <a
            href="https://discord.com/invite/nnBHHbMr23"
            class="button py-2.5 mb-3 sm:mb-0"
          >
            <Icon name="ic:baseline-discord" color="black" size="20px" />
            <span class="pl-2">Join our Discord</span>
          </a>
          <a
            href="https://www.linkedin.com/company/codort/"
            class="button py-2.5 mb-3 sm:mb-0"
          >
            <Icon name="jam:linkedin" color="black" size="20px" />
            <span class="pl-2">Follow our LinkedIn</span>
          </a>
          <a
            href="/contact"
            class="button py-2.5 mb-3 sm:mb-0"
          >
            <Icon name="ic:baseline-mail" color="black" size="20px" />
            <span class="pl-2">Join our mailing list</span>
          </a>
        </div>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/themes/mistral/Header.vue'
import Footer from '~/components/themes/mistral/Footer.vue'
</script>
