<script setup lang="ts">
const perks = [
  { icon: 'i-lucide-zap', text: 'Respon cepat — tim membalas dalam hitungan menit' },
  { icon: 'i-lucide-file-check', text: 'RAB/BoQ transparan & terdokumentasi sejak awal' },
  { icon: 'i-lucide-shield-check', text: 'Hasil bergaransi — masalah kami selesaikan' }
]
</script>

<template>
  <section
    id="konsultasi"
    class="relative scroll-mt-24 overflow-hidden border-t border-ink/8 bg-white/60 py-24 lg:flex lg:min-h-screen lg:items-center lg:py-32"
  >
    <!-- Noda abu sangat lembut di sudut, memberi kedalaman tanpa dekorasi -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-44 -bottom-56 aspect-square w-130 rounded-full bg-stone-100/80 blur-3xl"
    />

    <div class="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div class="mx-auto max-w-3xl text-center">
          <span class="spec justify-center text-ink/55">
            <span class="h-px w-8 shrink-0 bg-ink/40" />
            Konsultasi
            <span class="h-px w-8 shrink-0 bg-ink/40" />
          </span>
          <h2 class="mt-5 font-display text-4xl leading-[1.04] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Ceritakan kebutuhan Anda — <em class="font-normal italic text-stone-600">kami selesaikan.</em>
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Isi survey singkat di bawah — pilih jawaban yang paling sesuai, dan hasilnya langsung terkirim ke
            WhatsApp kami. Anda akan dihubungi tim teknis, bukan sales.
          </p>

          <ul class="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <li
              v-for="p in perks"
              :key="p.text"
              class="flex items-center gap-2 text-sm font-semibold text-ink/70"
            >
              <UIcon
                :name="p.icon"
                class="size-4 text-stone-600"
              />
              {{ p.text }}
            </li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal :delay="120">
        <div class="mx-auto mt-12 max-w-3xl">
          <SurveyQuiz />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>