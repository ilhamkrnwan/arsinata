<script setup lang="ts">
const stats = [
  { value: '10+', label: 'Tahun Pengalaman', icon: 'i-lucide-award' },
  { value: '50+', label: 'Proyek Selesai', icon: 'i-lucide-building-2' },
  { value: '100%', label: 'Kepuasan Klien', icon: 'i-lucide-thumbs-up' },
  { value: '25+', label: 'Profesional', icon: 'i-lucide-users' }
]
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div class="-mt-14 grid grid-cols-2 gap-px border border-ink/10 bg-ink/8 lg:grid-cols-4">
          <div
            v-for="s in stats"
            :key="s.label"
            class="flex items-center gap-4 bg-white p-6 sm:p-8"
          >
            <span class="hidden size-12 shrink-0 place-items-center rounded-tick bg-stone-100 text-stone-700 sm:grid">
              <UIcon
                :name="s.icon"
                class="size-5.5"
              />
            </span>
            <div>
              <p class="font-display text-3xl font-extrabold tracking-tight text-ink tabular-nums sm:text-4xl">
                {{ s.value }}
              </p>
              <p class="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/60 sm:text-sm sm:normal-case sm:tracking-normal">
                {{ s.label }}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
