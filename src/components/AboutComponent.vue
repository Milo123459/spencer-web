<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            Spencer
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-black text-xl">
          A discord bot without the <b>BS</b>.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-600 p-6 rounded-lg">
            <h3
              class="tracking-widest text-indigo-500 text-xs font-medium title-font"
            >
              FOUNDED
            </h3>
            <p class="leading-relaxed text-base text-black">
              Spencer was founded in November of 2020, in an attempt to make one
              bot for everything. We are still waiting on a few features though
              😉.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-600 p-6 rounded-lg">
            <h3
              class="tracking-widest text-indigo-500 text-xs font-medium title-font"
            >
              FAST
            </h3>
            <p class="leading-relaxed text-base text-black">
              Spencer is fast, very fast, extremely fast, fast fast. Did we say
              fast? We mean very fast. You get the idea, we are constantly
              trying to improve Spencer with performance upgrades, not to
              mention all the new features though!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class AboutComponent extends Vue {}
</script>
