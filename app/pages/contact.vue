<script setup lang="ts">
import { SITE, waLink, WA_DEFAULT_TEXT } from '~/utils/site'

const cards = [
  {
    icon: 'i-simple-icons-whatsapp',
    title: 'WhatsApp',
    value: SITE.phoneDisplay,
    note: 'Fast response — tim kami siap membantu',
    href: waLink(WA_DEFAULT_TEXT),
    external: true,
    wa: true
  },
  {
    icon: 'i-lucide-mail',
    title: 'Email',
    value: SITE.email,
    note: 'Untuk dokumen & penawaran resmi',
    href: `mailto:${SITE.email}`,
    external: false,
    wa: false
  },
  {
    icon: 'i-lucide-map-pin',
    title: 'Alamat Kantor',
    value: SITE.address,
    note: 'Kunjungan perlu janji terlebih dahulu',
    href: undefined,
    external: false,
    wa: false
  },
  {
    icon: 'i-lucide-route',
    title: 'Area Layanan',
    value: SITE.area,
    note: 'Sleman, Kota, Bantul, & area DIY lainnya',
    href: undefined,
    external: false,
    wa: false
  }
]
</script>

<template>
  <div>
    <PageHero
      title="Mari Diskusikan Kebutuhan Proyek Anda"
      description="Cukup isi survey singkat di bawah — jawaban Anda langsung terkirim ke WhatsApp kami. Tanpa email bertele-tele, tanpa formulir panjang."
      :breadcrumb="[{ label: 'Beranda', to: '/' }, { label: 'Kontak' }]"
    />

    <!-- Kartu kontak -->
    <section class="bg-white/60 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal
            v-for="(c, i) in cards"
            :key="c.title"
            :delay="i * 80"
          >
            <component
              :is="c.href && !c.wa ? 'a' : 'div'"
              :href="c.href && !c.wa ? c.href : undefined"
              :target="c.external && !c.wa ? '_blank' : undefined"
              :rel="c.external && !c.wa ? 'noopener' : undefined"
              class="flex h-full flex-col border border-ink/10 bg-white p-7 transition duration-300 hover:border-stone-300"
            >
              <span class="grid size-12 place-items-center rounded-tick bg-stone-100 text-stone-700">
                <UIcon
                  :name="c.icon"
                  class="size-6"
                />
              </span>
              <h3 class="mt-5 font-display text-lg text-ink">
                {{ c.title }}
              </h3>
              <p
                v-if="c.wa"
                class="mt-2 text-base font-semibold leading-relaxed text-ink"
              >
                <a
                  :href="c.href"
                  target="_blank"
                  rel="noopener"
                  class="underline decoration-ink/25 underline-offset-4 transition hover:text-stone-800 hover:decoration-ink"
                >
                  {{ c.value }}
                </a>
              </p>
              <p
                v-else
                class="mt-2 text-base font-semibold leading-relaxed text-ink"
              >
                {{ c.value }}
              </p>
              <p class="mt-auto pt-3 text-xs text-ink/60">
                {{ c.note }}
              </p>
            </component>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Survey + peta -->
    <section
      id="konsultasi"
      class="scroll-mt-24 bg-white py-20 lg:py-28"
    >
      <div class="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <!-- Kiri: peta & info -->
        <div class="lg:sticky lg:top-28">
          <ScrollReveal>
            <SectionHeading
              align="left"
              title="Kantor Kami di Sleman, Yogyakarta"
              description="Berada di kawasan Plosokuning, Ngaglik — mudah dijangkau dari pusat Kota Yogyakarta dan area Sleman."
            />
          </ScrollReveal>

          <ScrollReveal :delay="100">
            <div class="relative overflow-hidden border border-ink/8 bg-stone-50">
              <div class="relative flex aspect-16/10 flex-col items-center justify-center gap-4">
                <span class="grid size-16 place-items-center rounded-tick bg-stone-700 text-white shadow-ambient">
                  <UIcon
                    name="i-lucide-map-pin"
                    class="size-8"
                  />
                </span>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-stone-800">
                  Peta Lokasi
                </p>
                <p class="px-6 text-center text-xs text-ink/60">
                  {{ SITE.address }}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal :delay="180">
            <div class="mt-8 border-t border-ink/10 pt-7">
              <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700">
                Langsung via WhatsApp
              </p>
              <a
                :href="waLink(WA_DEFAULT_TEXT)"
                target="_blank"
                rel="noopener"
                class="mt-2 inline-flex items-center gap-2.5 font-display text-2xl tabular-nums text-ink transition hover:text-stone-700"
              >
                <UIcon
                  name="i-simple-icons-whatsapp"
                  class="size-5"
                />
                {{ SITE.phoneDisplay }}
              </a>
              <p class="mt-2 text-xs font-semibold text-ink/60">
                Fast response — balasan dalam hitungan menit pada jam kerja.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <!-- Kanan: survey -->
        <ScrollReveal :delay="150">
          <SurveyQuiz />
        </ScrollReveal>
      </div>
    </section>

    <ClientsLogobar />
  </div>
</template>
