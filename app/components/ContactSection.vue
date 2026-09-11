<script setup lang="ts">
import { SITE, waLink, WA_DEFAULT_TEXT } from '~/utils/site'
</script>

<template>
  <section
    id="konsultasi"
    class="relative scroll-mt-24 py-24 lg:flex lg:min-h-screen lg:items-center lg:py-32"
  >
    <div class="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
      <!-- Info kiri -->
      <div class="lg:col-span-5">
        <span class="spec text-ink/55">
          <span class="h-px w-8 shrink-0 bg-ink/40" />
          Konsultasi
        </span>
        <h2 class="mt-5 max-w-md font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
          Ceritakan kebutuhan Anda — <em class="font-normal italic text-stone-600">kami merespons cepat.</em>
        </h2>
        <p class="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
          Jawab beberapa pilihan singkat di samping — survey ini hanya ± 30 detik, dan ringkasan kebutuhan
          Anda langsung terkirim ke WhatsApp kami. Anda akan dihubungi tim teknis, bukan sales.
        </p>

        <ul class="mt-10 space-y-6 text-base">
          <li class="flex items-start gap-4">
            <span class="grid size-10 shrink-0 place-items-center rounded-tick bg-stone-100 text-stone-700">
              <UIcon
                name="i-lucide-zap"
                class="size-5"
              />
            </span>
            <div>
              <p class="font-bold text-ink">
                Respon cepat
              </p>
              <p class="mt-0.5 text-ink/70">
                Balasan dalam hitungan menit, target di bawah 15 menit.
              </p>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="grid size-10 shrink-0 place-items-center rounded-tick bg-stone-100 text-stone-700">
              <UIcon
                name="i-lucide-file-text"
                class="size-5"
              />
            </span>
            <div>
              <p class="font-bold text-ink">
                Transparan sejak awal
              </p>
              <p class="mt-0.5 text-ink/70">
                RAB/BoQ terdokumentasi sebelum Anda memutuskan melanjutkan.
              </p>
            </div>
          </li>
        </ul>

        <div class="mt-10 border-t border-ink/10 pt-7">
          <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700">
            Langsung via WhatsApp
          </p>
          <a
            :href="waLink(WA_DEFAULT_TEXT)"
            target="_blank"
            rel="noopener"
            class="mt-3 inline-flex items-center gap-2.5 font-display text-2xl text-ink transition hover:text-stone-700 tabular-nums"
          >
            <UIcon
              name="i-simple-icons-whatsapp"
              class="size-6 text-ink"
            />
            {{ SITE.phoneDisplay }}
          </a>
        </div>
      </div>

      <!-- Kanan: survey kontekstual -->
      <div class="lg:col-span-7">
        <ContactSurvey />
      </div>
    </div>
  </section>
</template>
