<script setup lang="ts">
import { projects } from '~/utils/data'
import { SITE } from '~/utils/site'
import { buildBreadcrumbSchema } from '~/utils/seo'

const pageTitle = 'Portofolio Proyek — CV Arsinata Cipta Saderma'
const pageDescription
  = 'Dokumentasi hasil pengerjaan proyek konstruksi, renovasi interior/MEP, dan custom furniture di Yogyakarta & sekitarnya oleh Arsinata.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: `${SITE.url}/portfolio`,
  ogImage: `${SITE.url}/og-image.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: `${SITE.url}/og-image.jpg`
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Beranda', path: '/' },
  { name: 'Portofolio', path: '/portfolio' }
])

useHead({
  link: [
    { rel: 'canonical', href: `${SITE.url}/portfolio` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema)
    }
  ]
})

const categories = ['Semua', 'Kantor & BUMN', 'Pendidikan', 'Fasilitas Publik', 'Residensial', 'Ritel & Komersial']
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
            :key="p.slug"
            :delay="(i % 3) * 80"
          >
            <ProjectCard :project="p" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <ClientsLogobar />
    <CtaSection />
  </div>
</template>
