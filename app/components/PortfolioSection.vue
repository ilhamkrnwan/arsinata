<script setup lang="ts">
import { projects } from '~/utils/data'

const props = defineProps<{
  limit?: number
}>()

const visible = computed(() => (props.limit ? projects.slice(0, props.limit) : projects))
</script>

<template>
  <section class="bg-white/60 py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Kepala seksi — serif, asimetris antara judul & aksi -->
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span class="spec text-ink/55">
            <span class="h-px w-8 shrink-0 bg-ink/40" />
            Portofolio
          </span>
          <h2 class="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Hasil proyek yang kami bangun dengan tenang.
          </h2>
        </div>
        <NuxtLink
          to="/portfolio"
          class="group inline-flex shrink-0 items-center gap-2 text-base font-semibold text-stone-800 underline decoration-stone-400/50 underline-offset-4 transition hover:decoration-stone-800"
        >
          Lihat semua portofolio
          <UIcon
            name="i-lucide-arrow-up-right"
            class="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </NuxtLink>
      </div>

      <!-- Grid seimbang 3 kolom -->
      <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="p in visible"
          :key="p.title"
          :project="p"
        />
      </div>
    </div>
  </section>
</template>
