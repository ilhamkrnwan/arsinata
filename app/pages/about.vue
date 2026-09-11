<script setup lang="ts">
const values = [
  { icon: 'i-lucide-scale', title: 'Integritas', desc: 'Bekerja jujur, apa adanya, dan menepati komitmen — termasuk soal biaya dan jadwal.' },
  { icon: 'i-lucide-badge-check', title: 'Kualitas', desc: 'Mutu terukur di setiap fase: review material, inspeksi, dan kontrol hasil akhir.' },
  { icon: 'i-lucide-lightbulb', title: 'Inovasi', desc: 'Solusi teknis yang tepat guna untuk tantangan unik di setiap proyek.' },
  { icon: 'i-lucide-handshake', title: 'Kolaborasi', desc: 'Bekerja bersama klien sebagai mitra — komunikasi terbuka dari awal hingga serah terima.' },
  { icon: 'i-lucide-hard-hat', title: 'Keselamatan', desc: 'K3 proaktif: APD wajib, kontrol area risiko, dan target zero lost time injury.' },
  { icon: 'i-lucide-leaf', title: 'Keberlanjutan', desc: 'Efisiensi material, pemilahan limbah onsite, dan kepatuhan regulasi lingkungan.' }
]

const quality = [
  {
    icon: 'i-lucide-clipboard-list',
    title: 'Inspeksi Bertahap',
    desc: 'Checklist inspeksi pada fase struktur dan finishing — tidak ada tahap yang dilewati tanpa kontrol.'
  },
  {
    icon: 'i-lucide-camera',
    title: 'Dokumentasi Foto Progres',
    desc: 'Setiap tahap didokumentasikan sebagai bukti pekerjaan dan bahan audit untuk Anda.'
  },
  {
    icon: 'i-lucide-message-square',
    title: 'Toolbox Meeting Harian',
    desc: 'Briefing tim setiap hari: target pekerjaan, prosedur keselamatan, dan kontrol area risiko.'
  },
  {
    icon: 'i-lucide-shield',
    title: 'Protokol K3 Proaktif',
    desc: 'APD wajib bagi seluruh pekerja, kontrol area risiko, dan target zero lost time injury di setiap proyek.'
  }
]

const esg = [
  { icon: 'i-lucide-recycle', title: 'Efisiensi Material & Limbah', desc: 'Material direncanakan efisien dan limbah onsite dipilah untuk meminimalkan dampak lingkungan.' },
  { icon: 'i-lucide-plug-zap', title: 'Efisiensi Energi', desc: 'Desain dan pemilihan material mendukung penghematan energi jangka panjang.' },
  { icon: 'i-lucide-heart-handshake', title: 'Kesejahteraan Pekerja', desc: 'K3 proaktif dan kondisi kerja yang layak untuk seluruh tim di lapangan.' },
  { icon: 'i-lucide-file-check-2', title: 'Kepatuhan Regulasi', desc: 'Seluruh pekerjaan mengikuti regulasi konstruksi dan lingkungan yang berlaku.' }
]

const commitments = [
  { value: '0', label: 'Target lost time injury', icon: 'i-lucide-activity' },
  { value: '≤ 2%', label: 'Volume re-work maksimal', icon: 'i-lucide-refresh-cw' }
]
</script>

<template>
  <div>
    <PageHero
      title="Mitra Konstruksi yang Mengutamakan Kepercayaan Jangka Panjang"
      description="CV Arsinata Cipta Saderma — perusahaan jasa konstruksi di Sleman, Yogyakarta yang melayani renovasi fasilitas, konstruksi bangunan, serta konsultasi & perencanaan."
      :breadcrumb="[{ label: 'Beranda', to: '/' }, { label: 'Tentang' }]"
    />

    <StatsBand />

    <!-- Profil -->
    <section class="bg-white py-20 lg:py-28">
      <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <ScrollReveal>
            <SectionHeading
              align="left"
              index="Profil"
              title="Kami Ada untuk Menyelesaikan Masalah Anda dengan Cepat"
              description="Berdiri di Sleman, Yogyakarta, Arsinata tumbuh bersama kepercayaan klien dari berbagai segmen — lembaga pemerintah, PT KAI, sekolah, perkantoran, hingga rumah tinggal. Banyak di antaranya kembali untuk proyek berikutnya; PT KAI bahkan telah menjadi pelanggan langganan."
            />
          </ScrollReveal>

          <ScrollReveal :delay="120">
            <div class="mt-8 space-y-4">
              <div class="flex gap-4 border border-ink/10 bg-canvas p-5">
                <span class="grid size-11 shrink-0 place-items-center rounded-tick bg-stone-100 text-stone-700">
                  <UIcon
                    name="i-lucide-repeat"
                    class="size-5"
                  />
                </span>
                <div>
                  <h3 class="text-sm font-extrabold text-ink">
                    Klien Kembali &amp; Langganan
                  </h3>
                  <p class="mt-1 text-base text-ink/70">
                    Kepuasan klien adalah prioritas — dibuktikan dengan hubungan yang berulang, bukan sekali jalan.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 border border-ink/10 bg-canvas p-5">
                <span class="grid size-11 shrink-0 place-items-center rounded-tick bg-stone-100 text-stone-700">
                  <UIcon
                    name="i-lucide-target"
                    class="size-5"
                  />
                </span>
                <div>
                  <h3 class="text-sm font-extrabold text-ink">
                    Tepat Waktu, Tepat Mutu, Tepat Biaya
                  </h3>
                  <p class="mt-1 text-base text-ink/70">
                    Tiga komitmen yang menjadi tolok ukur keberhasilan setiap proyek yang kami kerjakan.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal :delay="150">
          <div class="relative">
            <div class="overflow-hidden border border-ink/10">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Tim CV Arsinata berdiskusi di lokasi proyek"
                class="aspect-4/3 w-full object-cover"
                loading="lazy"
              >
            </div>
            <div class="absolute -bottom-6 right-6 flex items-center gap-3 border border-ink/8 bg-white px-5 py-4 shadow-ambient-lg">
              <span class="grid size-11 place-items-center rounded-tick bg-stone-700 text-white">
                <UIcon
                  name="i-lucide-users"
                  class="size-5"
                />
              </span>
              <div>
                <p class="font-display text-2xl font-extrabold text-ink">
                  25+
                </p>
                <p class="text-xs font-semibold text-ink/60">
                  Tenaga Profesional
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Nilai-nilai -->
    <section class="bg-white/60 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            index="Nilai"
            title="Prinsip yang Menjadi Fondasi Setiap Proyek"
            description="Enam nilai yang kami pegang dalam bekerja — dari penawaran pertama hingga serah terima."
          />
        </ScrollReveal>

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal
            v-for="(v, i) in values"
            :key="v.title"
            :delay="(i % 3) * 100"
          >
            <div class="group h-full border border-ink/10 bg-white p-7 transition duration-300 hover:border-stone-300">
              <span class="grid size-12 place-items-center rounded-tick bg-stone-100 text-stone-700 transition group-hover:bg-stone-700 group-hover:text-white">
                <UIcon
                  :name="v.icon"
                  class="size-6"
                />
              </span>
              <h3 class="mt-5 font-display text-xl text-ink">
                {{ v.title }}
              </h3>
              <p class="mt-2 text-base leading-relaxed text-ink/70">
                {{ v.desc }}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Mutu & K3 -->
    <section class="bg-stone-50 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            index="Mutu &amp; K3"
            title="Kualitas Terukur, Keselamatan Diutamakan"
            description="Mutu tidak dibiarkan untung-untungan — setiap fase diinspeksi, setiap pekerja dilindungi."
          />
        </ScrollReveal>

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal
            v-for="(q, i) in quality"
            :key="q.title"
            :delay="(i % 4) * 100"
          >
            <div class="h-full border border-ink/10 bg-white p-7 transition duration-300 hover:border-stone-300">
              <span class="grid size-12 place-items-center rounded-tick bg-stone-700 text-white">
                <UIcon
                  :name="q.icon"
                  class="size-6"
                />
              </span>
              <h3 class="mt-5 font-display text-xl text-ink">
                {{ q.title }}
              </h3>
              <p class="mt-2 text-base leading-relaxed text-ink/70">
                {{ q.desc }}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div class="mt-10 grid gap-6 sm:grid-cols-2">
            <div
              v-for="c in commitments"
              :key="c.label"
              class="flex items-center gap-5 border border-ink/8 bg-white p-7"
            >
              <span class="grid size-14 shrink-0 place-items-center rounded-tick bg-stone-100 text-stone-700">
                <UIcon
                  :name="c.icon"
                  class="size-7"
                />
              </span>
              <div>
                <p class="font-display text-3xl font-extrabold text-stone-800">
                  {{ c.value }}
                </p>
                <p class="mt-1 text-base font-semibold text-ink/70">
                  {{ c.label }}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- ESG -->
    <section class="bg-white py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            index="ESG"
            title="Komitmen ESG Kami"
            description="Kami membangun untuk masa depan — lingkungan, pekerja, dan kepatuhan regulasi adalah bagian dari kualitas."
          />
        </ScrollReveal>

        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <ScrollReveal
            v-for="(e, i) in esg"
            :key="e.title"
            :delay="(i % 2) * 120"
          >
            <div class="flex gap-5 border border-ink/10 bg-white p-7">
              <span class="grid size-12 shrink-0 place-items-center rounded-tick bg-stone-100 text-stone-700">
                <UIcon
                  :name="e.icon"
                  class="size-6"
                />
              </span>
              <div>
                <h3 class="font-display text-lg tracking-tight text-ink">
                  {{ e.title }}
                </h3>
                <p class="mt-2 text-base leading-relaxed text-ink/70">
                  {{ e.desc }}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
