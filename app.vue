<template>
  <div class="flex flex-col min-h-screen text-black">
    <main class="flex-grow">
      <div
        class="bg-[url('/bg-yellow.png')] bg-auto bg-repeat relative px-6 min-h-[97vh] w-full flex flex-col items-center justify-center my-0 py-0"
      >
        <div class="bg-white w-full max-w-3xl my-0 py-0 mt-10 rounded-3xl m-10">
          <div class="mx-auto max-w-3xl p-10">
            <div class="text-left">
              <div class="flex flex-col items-center">
                <div class="flex items-stretch my-4">
                  <NuxtImg class="h-16 sm:h-20 w-auto" src="/cody_colour.png" />
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
            href="https://discord.com/invite/4eeq29aD"
            class="rounded-lg bg-white border-4 border-cdtgreen justify-center py-2.5 mb-3 sm:mb-0 text-sm font-semibold shadow-sm hover:bg-cdtgreen active:bg-cdtgreen flex"
          >
            <Icon name="ic:baseline-discord" color="black" size="20px" />
            <span class="pl-2">Join our Discord</span>
          </a>
          <a
            href="https://www.linkedin.com/company/codort/"
            class="rounded-lg bg-white border-4 border-cdtgreen px-3.5 py-2.5 mb-3 sm:mb-0 text-sm font-semibold shadow-sm hover:bg-cdtgreen active:bg-cdtgreen flex"
          >
            <Icon name="jam:linkedin" color="black" size="20px" />
            <span class="pl-2">Follow our LinkedIn</span>
          </a>
          <a
            href="https://forms.gle/XGb7heNVkKdWMHRx6"
            class="rounded-lg bg-white border-4 border-cdtgreen px-3.5 py-2.5 mb-0 sm:mb-0 text-sm font-semibold shadow-sm hover:bg-cdtgreen active:bg-cdtgreen flex"
          >
            <Icon name="ic:baseline-mail" color="black" size="20px" />
            <span class="pl-2">Join our mailing list</span>
          </a>
        </div>
      </div>
    </main>
    <footer class="w-full bg-white text-black flex flex-col sm:flex-row items-center justify-center ">
  <div class="flex flex-wrap items-center justify-center">
    <p class="inline mr-2">&copy; Codort 2024</p>
    <span class="mr-2">|</span>
    <a href="https://docs.google.com/document/d/1wIBfNnJr3G19zIkc7fjeoZVdJZFhx2l4yDhjPws47iM/edit?usp=sharing" class="underline inline mr-2">Privacy Policy</a>
    <span class="mr-2 hidden sm:inline-block">|</span>
  </div>
  <div class="flex flex-wrap items-center justify-center mt-2 sm:mt-0">
    <a class="underline inline mr-2" href="https://github.com/Codort/landing">GitHub</a>
    <span class="mr-2">|</span>
    <a class="underline inline" href="https://nuxt.com/">Powered by Nuxt</a>
  </div>
</footer>

  </div>
</template>