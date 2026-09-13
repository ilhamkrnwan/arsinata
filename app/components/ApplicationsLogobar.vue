<script setup lang="ts">
import { procurementApps } from '~/utils/data'
</script>

<template>
  <section class="border-b border-ink/8 bg-stone-50/70 py-10 sm:py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="flex items-center justify-center gap-3 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-ink/60">
        <span class="hidden h-px w-6 bg-ink/40 sm:inline-block" />
        Terdaftar &amp; Terverifikasi pada Platform Pengadaan Resmi
        <span class="hidden h-px w-6 bg-ink/40 sm:inline-block" />
      </p>

      <ul
        class="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16 md:gap-x-20"
        role="list"
      >
        <li
          v-for="app in procurementApps"
          :key="app.name"
          class="group relative flex items-center justify-center"
        >
          <div
            class="flex h-12 items-center justify-center px-3 py-1 transition-all duration-300 group-hover:scale-105"
            :title="`${app.name} — ${app.description}`"
          >
            <picture>
              <source
                :srcset="app.avif"
                type="image/avif"
              >
              <img
                :src="app.webp"
                :alt="app.name"
                :class="app.heightClass || 'h-8 sm:h-9'"
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
