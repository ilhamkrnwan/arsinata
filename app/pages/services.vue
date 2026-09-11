<script setup lang="ts">
const services = [
  {
    id: 'renovasi',
    icon: 'i-lucide-hammer',
    title: 'Renovasi Fasilitas',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Peremajaan fasilitas dengan gangguan minimal',
    description:
      'Perombakan dan peningkatan fasilitas yang sudah ada — dari interior ruang hingga instalasi MEP — dikerjakan dengan gangguan seminimal mungkin terhadap aktivitas operasional Anda. Cocok untuk kantor, sekolah, fasilitas pemerintah, hingga rumah tinggal.',
    scope: [
      { title: 'Interior & Finishing', detail: 'Kitchen set, backdrop, plafon, lantai, pengecatan, dan pekerjaan finishing lainnya.' },
      { title: 'MEP', detail: 'Instalasi listrik, plumbing, dan ventilasi/AC yang rapi, aman, dan sesuai standar.' },
      { title: 'Perawatan & Perbaikan', detail: 'Penanganan kebocoran, kelembapan dinding, penggantian material, hingga pembaruan tampilan.' }
    ],
    deliverables: ['Checklist inspeksi fase struktur & finishing', 'Dokumentasi foto progres', 'Punch list saat serah terima']
  },
  {
    id: 'konstruksi',
    icon: 'i-lucide-building-2',
    title: 'Konstruksi Bangunan',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Bangun baru dari struktur hingga serah terima',
    description:
      'Pembangunan gedung baru dari nol — struktur, arsitektur, hingga pekerjaan sipil — untuk perkantoran, sekolah, gudang, hingga hunian. Setiap proyek berjalan terstruktur dengan kontrol manajemen proyek yang menyeluruh.',
    scope: [
      { title: 'Struktur', detail: 'Pondasi, kolom, balok, dan plat dengan review material terhadap spesifikasi.' },
      { title: 'Arsitektur', detail: 'Dinding, atap, fasad, dan lantai yang dikerjakan presisi sesuai gambar kerja.' },
      { title: 'Pekerjaan Sipil', detail: 'Saluran, drainase, dan pengerasan area pendukung bangunan.' }
    ],
    deliverables: ['Jadwal & milestone terukur', 'Inspeksi struktur bertahap', 'Dokumentasi audit-ready']
  },
  {
    id: 'perencanaan',
    icon: 'i-lucide-pencil-ruler',
    title: 'Konsultasi & Perencanaan',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Matangkan rencana sebelum membangun',
    description:
      'Perencanaan matang adalah kunci proyek yang tepat biaya dan tepat waktu. Kami menyusun RAB, BoQ, dan jadwal pelaksanaan yang terdokumentasi rapi — transparan, terukur, dan siap diaudit kapan pun Anda butuhkan.',
    scope: [
      { title: 'RAB & BoQ', detail: 'Rincian volume dan harga yang jelas — Anda tahu persis biaya sebelum proyek dimulai.' },
      { title: 'Scheduling', detail: 'Jadwal pelaksanaan dan milestone yang realistis untuk mengontrol durasi proyek.' },
      { title: 'Studi Kelayakan Awal', detail: 'Evaluasi kebutuhan dan estimasi awal sebelum keputusan investasi diambil.' }
    ],
    deliverables: ['Dokumen RAB/BoQ audit-ready', 'Jadwal pelaksanaan', 'Rekomendasi teknis yang terukur']
  }
]

const segmentChips = ['Lembaga Pemerintah', 'PT KAI', 'UIN Sunan Kalijaga', 'Sekolah', 'Perkantoran', 'Ritel & Rumahan', 'Gudang & Logistik']
</script>

<template>
  <div>
    <PageHero
      title="Layanan Konstruksi & Renovasi yang Menyelesaikan Masalah"
      description="Tiga layanan utama dengan pendekatan yang sama: cepat merespons, transparan dalam biaya, dan bertanggung jawab atas hasil."
      :breadcrumb="[{ label: 'Beranda', to: '/' }, { label: 'Layanan' }]"
    />

    <!-- Segmen -->
    <section class="border-b border-ink/8 bg-white/60">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p class="text-center text-xs font-bold uppercase tracking-[0.22em] text-ink/60">
          Dirancang untuk berbagai segmen
        </p>
        <div class="mt-4 flex flex-wrap justify-center gap-2.5">
          <span
            v-for="s in segmentChips"
            :key="s"
            class="rounded-tick border border-ink/10 bg-white px-4 py-1.5 text-sm font-semibold text-ink/75"
          >
            {{ s }}
          </span>
        </div>
      </div>
    </section>

    <!-- Detail layanan -->
    <section class="bg-white py-20 lg:py-28">
      <div class="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
        <div
          v-for="(s, idx) in services"
          :id="s.id"
          :key="s.id"
          class="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2"
        >
          <!-- Visual -->
          <ScrollReveal :class="idx % 2 === 1 ? 'lg:order-2' : ''">
            <div class="overflow-hidden border border-ink/10">
              <img
                :src="s.image"
                :alt="`Proyek — ${s.title}`"
                class="aspect-4/3 w-full object-cover"
                loading="lazy"
              >
            </div>
          </ScrollReveal>

          <!-- Konten -->
          <div :class="idx % 2 === 1 ? 'lg:order-1' : ''">
            <ScrollReveal>
              <span class="grid size-14 place-items-center rounded-tick bg-stone-100 text-stone-800">
                <UIcon
                  :name="s.icon"
                  class="size-7"
                />
              </span>
              <h2 class="mt-5 font-display text-3xl tracking-tight text-ink">
                {{ s.title }}
              </h2>
              <p class="mt-1 text-sm font-bold uppercase tracking-wider text-stone-800">
                {{ s.tagline }}
              </p>
              <p class="mt-4 leading-relaxed text-ink/70">
                {{ s.description }}
              </p>
            </ScrollReveal>

            <ScrollReveal :delay="100">
              <div class="mt-7 space-y-4">
                <div
                  v-for="sc in s.scope"
                  :key="sc.title"
                  class="flex gap-4 border border-ink/10 bg-canvas p-5"
                >
                  <span class="grid size-9 shrink-0 place-items-center rounded-tick bg-stone-100 text-stone-700">
                    <UIcon
                      name="i-lucide-check"
                      class="size-4.5"
                    />
                  </span>
                  <div>
                    <h3 class="text-sm font-extrabold text-ink">
                      {{ sc.title }}
                    </h3>
                    <p class="mt-1 text-base leading-relaxed text-ink/70">
                      {{ sc.detail }}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal :delay="180">
              <div class="mt-7">
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                  Yang Anda terima
                </p>
                <ul class="mt-3 flex flex-wrap gap-2">
                  <li
                    v-for="d in s.deliverables"
                    :key="d"
                    class="rounded-tick bg-stone-100 px-3.5 py-1.5 text-xs font-bold text-stone-800"
                  >
                    {{ d }}
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <ProcessSection />
    <FaSection />
    <CtaSection />
  </div>
</template>
