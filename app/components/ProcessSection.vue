<script setup lang="ts">
const steps = [
  {
    number: '01',
    icon: 'i-lucide-message-circle',
    title: 'Brief & Site Assessment',
    description:
      'Diskusikan kebutuhan Anda via WhatsApp, lalu kami lakukan penilaian lokasi untuk memahami kondisi lapangan.',
    tags: ['Konsultasi', 'Survey Lokasi']
  },
  {
    number: '02',
    icon: 'i-lucide-file-check',
    title: 'Scope & RAB',
    description:
      'Lingkup pekerjaan dirumuskan jelas lengkap dengan RAB/BoQ terdokumentasi — transparan sejak awal, tanpa biaya siluman.',
    tags: ['RAB / BoQ', 'Transparan']
  },
  {
    number: '03',
    icon: 'i-lucide-hard-hat',
    title: 'Eksekusi Bertahap',
    description:
      'Pengerjaan berjalan sesuai jadwal dengan milestone terukur, toolbox meeting harian, dan dokumentasi foto progres.',
    tags: ['Terjadwal', 'Dokumentasi Foto']
  },
  {
    number: '04',
    icon: 'i-lucide-clipboard-check',
    title: 'Serah Terima & Dokumentasi',
    description:
      'Inspeksi final, punch list, dan dokumentasi audit-ready — serah terima rapi disertai garansi hasil pekerjaan.',
    tags: ['Inspeksi Final', 'Punch List', 'Garansi']
  }
]
</script>

<template>
  <section class="bg-white py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          index="Alur Kerja"
          title="4 Langkah Terukur, dari Brief hingga Serah Terima"
          description="Setiap proyek dijalankan dengan proses yang jelas dan terdokumentasi — sehingga Anda selalu tahu posisi proyek Anda."
        />
      </ScrollReveal>

      <div class="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div
          class="absolute left-0 right-0 top-8 hidden h-px bg-stone-200 lg:block"
          aria-hidden="true"
        />

        <ScrollReveal
          v-for="(s, i) in steps"
          :key="s.number"
          :delay="i * 120"
        >
          <div class="relative">
            <div class="relative z-10 flex size-16 items-center justify-center rounded-tick border border-stone-200 bg-stone-50">
              <UIcon
                :name="s.icon"
                class="size-7 text-stone-700"
              />
            </div>
            <p class="mt-5 font-display text-5xl leading-none text-stone-500">
              {{ s.number }}
            </p>
            <h3 class="mt-2 font-display text-xl tracking-tight text-ink">
              {{ s.title }}
            </h3>
            <p class="mt-2.5 text-base leading-relaxed text-ink/70">
              {{ s.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="t in s.tags"
                :key="t"
                class="rounded-tick border border-ink/10 bg-canvas px-3 py-1 text-xs font-semibold text-ink/70"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
