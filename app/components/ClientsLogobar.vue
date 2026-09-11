<script setup lang="ts">
import { segments } from '~/utils/data'
</script>

<template>
  <section class="border-y border-ink/8 bg-white/60 py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-ink/60">
        <span class="h-px w-6 bg-ink/40" />
        Dipercaya oleh PT KAI, lembaga pemerintah &amp; institusi
        <span class="h-px w-6 bg-ink/40" />
      </p>

      <ul
        class="mx-auto mt-9 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14"
        role="list"
      >
        <li
          v-for="s in segments"
          :key="s.label"
          class="flex items-center gap-2.5 text-ink/70"
        >
          <UIcon
            :name="s.icon"
            class="size-4.5 text-stone-500"
          />
          <span class="font-display text-xl text-stone-800">{{ s.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
