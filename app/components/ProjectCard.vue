<script setup lang="ts">
import type { Project } from '~/utils/data'

defineProps<{
  project: Project
}>()
</script>

<template>
  <NuxtLink
    :to="`/portfolio/${project.slug}`"
    class="group flex h-full flex-col overflow-hidden border border-ink/10 bg-canvas transition duration-300 hover:border-stone-400 hover:shadow-ambient"
  >
    <!-- Visual proyek -->
    <div class="relative overflow-hidden">
      <img
        :src="project.image"
        :alt="`Proyek ${project.title} oleh Arsinata`"
        class="aspect-4/3 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      >
      <span
        v-if="project.highlight"
        class="absolute right-4 top-4 rounded-tick border border-ink/60 bg-white/95 px-3 py-1 text-xs font-bold text-ink"
      >
        {{ project.highlight }}
      </span>
      <span class="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-tick border border-ink/10 bg-white/90 px-3 py-1.5 text-xs font-bold text-ink/75 backdrop-blur">
        <UIcon
          :name="project.categoryIcon"
          class="size-3.5 text-stone-600"
        />
        {{ project.category }}
      </span>
    </div>

    <!-- Isi -->
    <div class="flex flex-1 flex-col p-7">
      <p class="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
        <UIcon
          name="i-lucide-map-pin"
          class="size-3.5 text-stone-500"
        />
        {{ project.location }}
      </p>
      <h3 class="mt-3 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-stone-800">
        {{ project.title }}
      </h3>
      <p class="mt-3 flex-1 text-base leading-relaxed text-ink/70">
        {{ project.description }}
      </p>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="t in project.tags"
          :key="t"
          class="rounded-tick border border-ink/8 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-800"
        >
          {{ t }}
        </span>
      </div>

      <!-- Action footer link -->
      <div class="mt-6 flex items-center justify-between border-t border-ink/8 pt-4 text-xs font-bold uppercase tracking-wider text-ink/70 transition-colors group-hover:text-ink">
        <span>Lihat Detail Proyek</span>
        <span class="grid size-7 place-items-center rounded-tick bg-stone-100 text-stone-700 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-ink group-hover:text-white">
          <UIcon
            name="i-lucide-arrow-right"
            class="size-3.5"
          />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
