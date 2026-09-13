<script setup lang="ts">
import { projects, type Project } from '~/utils/data'
import { SITE, waLink } from '~/utils/site'

import { buildProjectSchema, buildBreadcrumbSchema } from '~/utils/seo'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const projectIndex = computed(() => projects.findIndex(p => p.slug === slug.value))
const project = computed(() => {
  if (projectIndex.value === -1) return null
  return projects[projectIndex.value]
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Proyek dengan slug "${slug.value}" tidak ditemukan.`,
    fatal: true
  })
}

// Navigasi proyek sebelumnya & berikutnya
const prevProject = computed<Project | null>(() => {
  const total = projects.length
  if (total <= 1) return null
  const idx = (projectIndex.value - 1 + total) % total
  return projects[idx] ?? null
})

const nextProject = computed<Project | null>(() => {
  const total = projects.length
  if (total <= 1) return null
  const idx = (projectIndex.value + 1) % total
  return projects[idx] ?? null
})

// SEO & Open Graph (menggunakan coverJpg absolut agar didukung WhatsApp / media sosial)
const projectCoverAbsolute = `${SITE.url}${project.value.coverJpg}`
const projectUrlAbsolute = `${SITE.url}/portfolio/${project.value.slug}`

useSeoMeta({
  title: `${project.value.title} — Portofolio Arsinata`,
  description: project.value.description,
  ogTitle: `${project.value.title} — CV Arsinata Cipta Saderma`,
  ogDescription: project.value.description,
  ogImage: projectCoverAbsolute,
  ogUrl: projectUrlAbsolute,
  ogType: 'article',
  ogLocale: 'id_ID',
  twitterCard: 'summary_large_image',
  twitterTitle: `${project.value.title} — Arsinata`,
  twitterDescription: project.value.description,
  twitterImage: projectCoverAbsolute
})

const projectSchema = buildProjectSchema(project.value)
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Beranda', path: '/' },
  { name: 'Portofolio', path: '/portfolio' },
  { name: project.value.title, path: `/portfolio/${project.value.slug}` }
])

useHead({
  link: [
    { rel: 'canonical', href: projectUrlAbsolute }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(projectSchema)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema)
    }
  ]
})

// WhatsApp CTA kontekstual
const waConsultText = computed(() =>
  `Halo Arsinata! Saya melihat portofolio "${project.value?.title}" di website dan ingin konsultasi untuk kebutuhan proyek serupa.`
)

// Modal lightbox preview gambar
const previewImage = ref<string | null>(null)
const previewAlt = ref<string>('')

function openPreview(img: string, alt: string) {
  previewImage.value = img
  previewAlt.value = alt
}

function closePreview() {
  previewImage.value = null
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && previewImage.value) {
    closePreview()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div
    v-if="project"
    class="bg-canvas"
  >
    <!-- Breadcrumb & Header Arsip -->
    <header class="border-b border-ink/8 bg-white/70 py-10 lg:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav
          class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/60"
          aria-label="Breadcrumb"
        >
          <NuxtLink
            to="/"
            class="transition hover:text-stone-900"
          >
            Beranda
          </NuxtLink>
          <span class="text-ink/30">/</span>
          <NuxtLink
            to="/portfolio"
            class="transition hover:text-stone-900"
          >
            Portofolio
          </NuxtLink>
          <span class="text-ink/30">/</span>
          <span class="truncate text-ink font-bold">{{ project.title }}</span>
        </nav>

        <!-- Spec Tag & Title -->
        <div class="mt-8 max-w-4xl">
          <span class="spec text-ink/60">
            <span class="h-px w-8 shrink-0 bg-ink/40" />
            {{ project.category }} · {{ project.client }}
          </span>

          <h1 class="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {{ project.title }}
          </h1>

          <p class="mt-6 text-lg leading-relaxed text-ink/75 sm:text-xl">
            {{ project.description }}
          </p>
        </div>

        <!-- Metadata Band (4 Kolom) -->
        <div class="mt-12 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 lg:grid-cols-4">
          <div class="bg-white p-5 sm:p-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/50">
              Klien / Instansi
            </p>
            <p class="mt-2 font-display text-lg font-bold text-ink">
              {{ project.client }}
            </p>
          </div>

          <div class="bg-white p-5 sm:p-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/50">
              Lokasi Proyek
            </p>
            <p class="mt-2 flex items-center gap-1.5 font-display text-lg font-bold text-ink">
              <UIcon
                name="i-lucide-map-pin"
                class="size-4 shrink-0 text-stone-500"
              />
              {{ project.location }}
            </p>
          </div>

          <div class="bg-white p-5 sm:p-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/50">
              Kategori Layanan
            </p>
            <p class="mt-2 flex items-center gap-1.5 font-display text-lg font-bold text-ink">
              <UIcon
                :name="project.categoryIcon"
                class="size-4 shrink-0 text-stone-500"
              />
              {{ project.category }}
            </p>
          </div>

          <div class="bg-white p-5 sm:p-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/50">
              Dokumentasi Foto
            </p>
            <p class="mt-2 font-display text-lg font-bold text-ink">
              {{ project.gallery.length }} Foto Terverifikasi
            </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Visual Utama (Archival Corner Tick Frame) -->
    <section class="py-12 lg:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="frame-archival">
          <!-- Tanda sudut registrasi arsip -->
          <span class="frame-tick -left-3 -top-3 border-l-2 border-t-2" />
          <span class="frame-tick -right-3 -top-3 border-r-2 border-t-2" />
          <span class="frame-tick -bottom-3 -left-3 border-b-2 border-l-2" />
          <span class="frame-tick -bottom-3 -right-3 border-b-2 border-r-2" />

          <div class="relative aspect-16/9 w-full overflow-hidden border border-ink/10 bg-stone-100">
            <img
              :src="project.image"
              :alt="`Dokumentasi utama ${project.title}`"
              class="size-full object-cover"
              loading="eager"
            >
            <div
              v-if="project.highlight"
              class="absolute left-6 top-6 rounded-tick border border-ink/20 bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink shadow-ambient"
            >
              {{ project.highlight }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Narasi Teknis & CTA Konsultasi -->
    <section class="border-t border-ink/8 bg-white py-16 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <!-- Kolom Kiri: Uraian & Scope of Work -->
        <div class="lg:col-span-7">
          <span class="spec text-ink/55">
            <span class="h-px w-8 shrink-0 bg-ink/40" />
            Deskripsi Teknis
          </span>

          <h2 class="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Tantangan &amp; Solusi Pengerjaan
          </h2>

          <p class="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
            {{ project.fullDescription }}
          </p>

          <!-- Lingkup Pekerjaan (Scope of Work) -->
          <div class="mt-10">
            <h3 class="font-display text-xl tracking-tight text-ink">
              Lingkup Pekerjaan yang Dilakukan
            </h3>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <div
                v-for="s in project.scopeOfWork"
                :key="s"
                class="flex items-center gap-3 rounded-tick border border-ink/10 bg-canvas p-4"
              >
                <span class="grid size-7 shrink-0 place-items-center rounded-tick bg-stone-200 text-stone-800">
                  <UIcon
                    name="i-lucide-check"
                    class="size-4"
                  />
                </span>
                <span class="text-sm font-semibold text-ink/85">{{ s }}</span>
              </div>
            </div>
          </div>

          <!-- Deliverables / Hasil -->
          <div
            v-if="project.deliverables?.length"
            class="mt-8"
          >
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
              Dokumen &amp; Jaminan Hasil
            </h3>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="d in project.deliverables"
                :key="d"
                class="rounded-tick border border-ink/8 bg-stone-50 px-3.5 py-1.5 text-xs font-bold text-stone-800"
              >
                {{ d }}
              </span>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Kotak Konsultasi Langsung -->
        <div class="lg:col-span-5">
          <div class="sticky top-28 border border-ink/10 bg-canvas p-8 shadow-ambient">
            <span class="spec text-ink/60">
              <span class="h-px w-6 shrink-0 bg-ink/40" />
              Konsultasi Proyek
            </span>

            <h3 class="mt-3 font-display text-2xl leading-snug text-ink">
              Ingin hasil seperti proyek ini untuk properti Anda?
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-ink/70">
              Hubungi tim teknis kami langsung via WhatsApp. Kami merespons cepat, menjadwalkan survey lokasi, dan menyusun RAB yang transparan.
            </p>

            <ul class="mt-6 space-y-3 text-xs font-semibold text-ink/75">
              <li class="flex items-center gap-2.5">
                <UIcon
                  name="i-lucide-zap"
                  class="size-4 text-stone-700"
                />
                Respon cepat di bawah 15 menit
              </li>
              <li class="flex items-center gap-2.5">
                <UIcon
                  name="i-lucide-file-text"
                  class="size-4 text-stone-700"
                />
                RAB / BoQ transparan &amp; audit-ready
              </li>
              <li class="flex items-center gap-2.5">
                <UIcon
                  name="i-lucide-shield-check"
                  class="size-4 text-stone-700"
                />
                Garansi pengerjaan resmi Arsinata
              </li>
            </ul>

            <div class="mt-8 border-t border-ink/10 pt-6">
              <a
                :href="waLink(waConsultText)"
                target="_blank"
                rel="noopener"
                class="btn-solid w-full py-3.5 text-sm font-bold"
              >
                <UIcon
                  name="i-simple-icons-whatsapp"
                  class="size-5"
                />
                Konsultasikan Proyek Serupa
              </a>

              <p class="mt-3 text-center text-xs text-ink/50">
                Hubungi langsung tim teknis: {{ SITE.phoneDisplay }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galeri Dokumentasi Foto Lapangan -->
    <section class="border-t border-ink/8 bg-white/60 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span class="spec text-ink/55">
              <span class="h-px w-8 shrink-0 bg-ink/40" />
              Dokumentasi Lengkap
            </span>
            <h2 class="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Galeri Dokumentasi Pengerjaan Lapangan
            </h2>
          </div>
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
            Total {{ project.gallery.length }} Foto · Klik untuk Memperbesar
          </p>
        </div>

        <!-- Grid Foto Galeri -->
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(img, idx) in project.gallery"
            :key="img"
            class="group relative aspect-4/3 cursor-pointer overflow-hidden border border-ink/10 bg-stone-100 transition duration-300 hover:border-stone-400 hover:shadow-ambient"
            @click="openPreview(img, `${project.title} - Dokumentasi ${idx + 1}`)"
          >
            <img
              :src="img"
              :alt="`${project.title} - Foto ${idx + 1}`"
              class="size-full object-cover transition duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            >
            <div class="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
            <div class="absolute bottom-3 right-3 grid size-8 place-items-center rounded-tick bg-white/90 text-ink opacity-0 shadow-ambient transition duration-300 group-hover:opacity-100">
              <UIcon
                name="i-lucide-maximize-2"
                class="size-4"
              />
            </div>
            <span class="absolute left-3 top-3 rounded-tick bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white">
              #{{ String(idx + 1).padStart(2, '0') }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigasi Proyek Sebelumnya & Berikutnya -->
    <nav
      class="border-y border-ink/8 bg-white py-10"
      aria-label="Navigasi Proyek Terkait"
    >
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <NuxtLink
          v-if="prevProject"
          :to="`/portfolio/${prevProject.slug}`"
          class="group flex items-center gap-3 text-left transition"
        >
          <span class="grid size-10 shrink-0 place-items-center rounded-tick border border-ink/15 text-ink transition group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <UIcon
              name="i-lucide-arrow-left"
              class="size-4.5"
            />
          </span>
          <div>
            <p class="text-[11px] font-bold uppercase tracking-wider text-ink/50">
              Proyek Sebelumnya
            </p>
            <p class="font-display text-lg text-ink group-hover:underline">
              {{ prevProject.title }}
            </p>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/portfolio"
          class="btn-outline px-5 py-2 text-xs uppercase tracking-wider"
        >
          Lihat Semua Portofolio
        </NuxtLink>

        <NuxtLink
          v-if="nextProject"
          :to="`/portfolio/${nextProject.slug}`"
          class="group flex items-center gap-3 text-right transition"
        >
          <div>
            <p class="text-[11px] font-bold uppercase tracking-wider text-ink/50">
              Proyek Selanjutnya
            </p>
            <p class="font-display text-lg text-ink group-hover:underline">
              {{ nextProject.title }}
            </p>
          </div>
          <span class="grid size-10 shrink-0 place-items-center rounded-tick border border-ink/15 text-ink transition group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4.5"
            />
          </span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Modal Lightbox Zoom Preview -->
    <div
      v-if="previewImage"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      :aria-label="previewAlt"
      @click="closePreview"
    >
      <!-- Top Fixed Bar -->
      <header
        class="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent px-4 py-4 sm:px-8 sm:py-6"
      >
        <div class="pointer-events-auto flex items-center gap-3">
          <span class="rounded-tick border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white/80">
            Dokumentasi
          </span>
          <p class="hidden max-w-md truncate text-xs font-medium text-white/70 sm:block">
            {{ previewAlt }}
          </p>
        </div>

        <button
          type="button"
          class="pointer-events-auto flex items-center gap-2 rounded-tick border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white hover:bg-white hover:text-ink focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Tutup preview gambar"
          @click="closePreview"
        >
          <UIcon
            name="i-lucide-x"
            class="size-4.5"
          />
          <span class="hidden sm:inline">Tutup</span>
          <kbd class="hidden rounded border border-white/30 bg-black/30 px-1.5 py-0.5 font-mono text-[10px] text-white/70 sm:inline-block">ESC</kbd>
        </button>
      </header>

      <!-- Main Image Display -->
      <div
        class="relative flex max-h-[85vh] max-w-6xl items-center justify-center pt-10 sm:pt-12"
        @click.stop
      >
        <img
          :src="previewImage"
          :alt="previewAlt"
          class="max-h-[78vh] w-auto max-w-full rounded-none border border-white/15 object-contain shadow-2xl"
        >
      </div>

      <!-- Bottom Caption Bar -->
      <footer class="pointer-events-none fixed inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pb-5 pt-3 text-center">
        <p class="pointer-events-auto inline-block rounded-full border border-white/10 bg-black/50 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
          {{ previewAlt }}
        </p>
      </footer>
    </div>

    <!-- Reusable Bottom CTA -->
    <CtaSection />
  </div>
</template>
