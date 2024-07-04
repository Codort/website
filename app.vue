
  <template>
<div class="w-screen h-screen flex flex-col items-center text-black">
    <div class="bg-[url('/background-bw.png')] bg-contain sm:bg-auto relative px-6 pt-2 lg:px-8 w-full h-full  flex flex-col items-center">
      <div class="mx-auto max-w-3xl py-6 sm:py-32 lg:py-48">
        <div class="text-left">
          <div class="flex flex-col items-center">
            <NuxtImg class="h-36 sm:h-48 w-auto" src="/cody_colour.png" />
            <h1 class="text-6xl sm:text-7xl font-bold my-5">CODORT</h1>
            <h2 class="text-3xl sm:text-4xl tracking-tight border-b-4 pb-2 border-cdtyellow">A home for developers <i>you</i> can trust.</h2>
          </div>

          <div class="flex flex-col items-center">
          <p class="mt-6 text-md sm:text-xl leading-8 text-center">
            Our open-core platform radically improves how open source software is developed, managed and maintained. Be part of the journey from Day 0: build, maintain, manage and contribute.
            <br><br>
            Connect with us to find out more.
          </p>
          <div class="mt-10 items-center justify-left gap-3 gap-sm-6 grid grid-cols-1 sm:grid-cols-3">
            <a href="https://discord.com/invite/4eeq29aD" class="rounded-lg bg-white border-4 border-cdtgreen px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-cdtgreen active:bg-cdtgreen flex">
              <Icon name="ic:baseline-discord" color="black" size="20px"/>
              <span class="pl-2">Join our Discord</span>
            </a>
            <a href="https://www.linkedin.com/company/codort/" class="rounded-lg bg-white border-4 border-cdtgreen px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-cdtgreen active:bg-cdtgreen flex">
              <Icon name="jam:linkedin" color="black" size="20px"/>
              <span class="pl-2">Follow our LinkedIn</span>
            </a>
            <a href="https://forms.gle/XGb7heNVkKdWMHRx6" class="rounded-lg bg-white border-4 border-cdtgreen px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-cdtgreen active:bg-cdtgreen flex">
              <Icon name="ic:baseline-mail" color="black" size="20px"/>
              <span class="pl-2">Join our mailing list</span></a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="w-full bg-white text-black absolute bottom-0 py-1">
    <div class="flex align-items-center justify-center">
      <p class="text-center align-self-center"> &copy; Codort 2024 | <a href="https://docs.google.com/document/d/1wIBfNnJr3G19zIkc7fjeoZVdJZFhx2l4yDhjPws47iM/edit?usp=sharing" class="underline">Privacy Policy</a></p>
    </div>
  </footer>
  </template>
