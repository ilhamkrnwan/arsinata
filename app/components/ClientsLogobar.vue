<script setup lang="ts">
import { clientLogos } from '~/utils/data'
</script>

<template>
  <section class="border-y border-ink/8 bg-white/60 py-12 sm:py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-ink/60">
        <span class="h-px w-6 bg-ink/40" />
        Dipercaya oleh PT KAI, lembaga pemerintah &amp; institusi
        <span class="h-px w-6 bg-ink/40" />
      </p>

      <ul
        class="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-11"
        role="list"
      >
        <li
          v-for="logo in clientLogos"
          :key="logo.name"
          class="group relative flex items-center justify-center"
        >
          <div
            class="flex h-12 items-center justify-center px-2 py-1 transition-all duration-300 group-hover:scale-105"
            :title="`${logo.name} (${logo.category})`"
          >
            <picture>
              <source
                :srcset="logo.avif"
                type="image/avif"
              >
              <img
                :src="logo.webp"
                :alt="logo.name"
                :class="logo.heightClass || 'h-8 sm:h-9'"
                class="w-auto max-w-[130px] sm:max-w-[150px] object-contain filter grayscale contrast-125 opacity-55 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
              >
            </picture>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
