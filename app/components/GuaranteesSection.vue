<script setup lang="ts">
const commitments = [
  {
    no: '01',
    title: 'Fast Response',
    body: 'Tim kami merespons kebutuhan Anda dalam hitungan menit melalui WhatsApp — target balasan di bawah 15 menit, sehingga proyek Anda tidak pernah menunggu.'
  },
  {
    no: '02',
    title: 'Transparansi Biaya & Progres',
    body: 'RAB/BoQ terdokumentasi sejak awal, material direview terhadap spesifikasi, dan progres dilaporkan lengkap dengan dokumentasi foto — transparan dan siap diaudit.'
  },
  {
    no: '03',
    title: 'Garansi Resmi Pengerjaan',
    body: 'Setiap hasil pekerjaan bergaransi sesuai kesepakatan. Jika ada kendala dari pengerjaan kami, kamilah yang kembali dan menyelesaikannya — sampai tuntas.'
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-ink-deep py-24 text-canvas lg:py-32">
    <!-- Noda abu yang sangat lembut di sudut, memberi kedalaman bukan dekorasi -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 -top-52 aspect-square w-130 rounded-full bg-white/5 blur-3xl"
    />

    <div class="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
      <!-- Intro asimetris -->
      <div class="lg:col-span-5">
        <span class="spec text-canvas/70">
          <span class="h-px w-8 bg-white/70" />
          Komitmen
        </span>

        <h2 class="mt-5 max-w-md font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
          Komitmen yang membuat klien kembali, bukan sekali jalan.
        </h2>
        <p class="mt-6 max-w-md text-lg leading-relaxed text-canvas/70">
          Ini bukan janji kosong — ini cara kami bekerja setiap hari: cepat, transparan, dan bertanggung jawab penuh atas hasil.
        </p>
        <a
          href="#konsultasi"
          class="group mt-9 inline-flex items-center gap-2 text-base font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:text-canvas/80 hover:decoration-white"
        >
          Mulai konsultasi gratis
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4.5 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>

      <!-- Daftar bernomor 01-02-03 -->
      <div class="lg:col-span-7">
        <ol class="divide-y divide-canvas/12 border-y border-canvas/12">
          <li
            v-for="c in commitments"
            :key="c.no"
            class="group flex gap-8 py-9 sm:gap-10"
          >
            <span class="font-display text-5xl leading-none text-white/50 transition-colors group-hover:text-white sm:text-6xl">
              {{ c.no }}
            </span>
            <div class="pt-1">
              <h3 class="font-display text-2xl tracking-tight text-canvas sm:text-3xl">
                {{ c.title }}
              </h3>
              <p class="mt-3 max-w-lg leading-relaxed text-canvas/70">
                {{ c.body }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
