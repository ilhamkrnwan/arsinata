<script setup lang="ts">
import { projects } from '~/utils/data'

const categories = ['Semua', 'Kantor & Perkantoran', 'Logistik', 'Rumah', 'Pendidikan']
const active = ref('Semua')

const filtered = computed(() =>
  active.value === 'Semua' ? projects : projects.filter(p => p.category === active.value)
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Portofolio"
      title="Proyek yang Telah Kami Selesaikan"
      description="Dari renovasi kantor institusi hingga pembangunan gedung baru — bukti nyata komitmen kami pada ketepatan waktu, mutu, dan biaya."
      :breadcrumb="[{ label: 'Beranda', to: '/' }, { label: 'Portofolio' }]"
    />

    <section class="bg-white/60 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Filter -->
        <div class="flex flex-wrap items-center justify-center gap-2.5">
          <button
            v-for="c in categories"
            :key="c"
            type="button"
            class="rounded-tick px-5 py-2.5 text-sm font-bold transition"
            :class="active === c ? 'bg-ink text-white' : 'border border-ink/10 bg-white text-ink/70 hover:border-stone-400 hover:text-ink'"
            @click="active = c"
          >
            {{ c }}
          </button>
        </div>

        <!-- Grid -->
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal
            v-for="(p, i) in filtered"
            :key="p.title"
            :delay="(i % 3) * 80"
          >
            <ProjectCard :project="p" />
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p class="mt-10 text-center text-xs text-ink/60">
            * Dokumentasi foto proyek asli sedang disiapkan dan akan diperbarui di halaman ini.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <ClientsLogobar />
    <CtaSection />
  </div>
</template>
