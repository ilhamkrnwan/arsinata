<script setup lang="ts">
import { SITE } from '~/utils/site'
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Noda warna hangat yang sangat lembut, bukan gradien klise -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 -top-44 aspect-square w-130 rounded-full bg-stone-100/70 blur-3xl"
    />

    <div class="relative mx-auto grid max-w-7xl items-end gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-28 lg:pt-20">
      <!-- Kolom kiri — tesis -->
      <div class="lg:col-span-7">
        <div class="flex items-start gap-4">
          <span class="mt-1.5 h-px w-10 shrink-0 bg-ink/50" />
          <p class="spec text-ink/55">
            Konstruksi &amp; Renovasi · Sleman, Yogyakarta
          </p>
        </div>

        <h1 class="mt-8 max-w-2xl font-display text-[2.9rem] leading-[1.02] tracking-tight text-balance sm:text-6xl xl:text-[4.4rem]">
          Menyelesaikan masalah bangunan Anda, <em class="italic text-stone-600">dengan tenang.</em>
        </h1>

        <p class="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
          {{ SITE.company }} — kontraktor interior &amp; konstruksi di Sleman, Yogyakarta. Kami merespons
          cepat, menyusun biaya dan progres yang transparan, dan bertanggung jawab penuh atas hasil.
          Dipercaya PT KAI, lembaga pemerintah, sekolah, hingga rumah tinggal.
        </p>

        <div class="mt-11 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a
            href="#konsultasi"
            class="btn-solid group px-8 py-4 text-base"
          >
            Konsultasi Sekarang
            <UIcon
              name="i-lucide-arrow-right"
              class="size-5 transition-transform group-hover:translate-x-1"
            />
          </a>
          <NuxtLink
            to="/portfolio"
            class="group inline-flex items-center gap-2 text-base font-semibold text-ink/80 underline decoration-ink/25 underline-offset-4 transition hover:text-ink hover:decoration-ink"
          >
            Lihat Portofolio
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </NuxtLink>
        </div>

        <ul class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/10 pt-7 text-base text-ink/70">
          <li class="flex items-center gap-2">
            <UIcon
              name="i-lucide-check"
              class="size-4 text-stone-700"
            />
            RAB &amp; BoQ transparan
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              name="i-lucide-check"
              class="size-4 text-stone-700"
            />
            Hasil bergaransi
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              name="i-lucide-check"
              class="size-4 text-stone-700"
            />
            10+ tahun pengalaman
          </li>
        </ul>
      </div>

      <!-- Kolom kanan — visual arsitektural, offset asimetris + corner tick -->
      <div class="lg:col-span-5">
        <div class="relative lg:translate-y-4">
          <div class="frame-archival">
            <!-- Tanda sudut registrasi (tinta, sudut siku) -->
            <span class="frame-tick -left-3 -top-3 border-l-2 border-t-2" />
            <span class="frame-tick -right-3 -top-3 border-r-2 border-t-2" />
            <span class="frame-tick -bottom-3 -left-3 border-b-2 border-l-2" />
            <span class="frame-tick -bottom-3 -right-3 border-b-2 border-r-2" />

            <div class="relative overflow-hidden rounded-none border border-ink/10 bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                alt="Interior premium hasil pengerjaan Arsinata"
                class="aspect-[4/5] size-full object-cover"
                loading="eager"
              >
            </div>
          </div>

          <div class="absolute -left-4 bottom-8 hidden max-w-52 sm:-left-6 sm:bottom-10 sm:block">
            <p class="mt-2 rounded-tick bg-ink/90 p-4 text-sm leading-relaxed text-white shadow-ambient">
              Setiap hasil pengerjaan kami bergaransi — kendala dari kami, kami selesaikan.
            </p>
          </div>

          <div class="absolute -right-3 top-10 hidden items-center gap-2.5 rounded-tick bg-ink/90 px-4 py-3 shadow-ambient sm:flex">
            <UIcon
              name="i-lucide-shield-check"
              class="size-5 text-white"
            />
            <span class="text-sm font-bold text-white">Transparan &amp; bisa diaudit</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
