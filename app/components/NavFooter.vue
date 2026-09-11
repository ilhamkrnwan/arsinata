<script setup lang="ts">
import { SITE, waLink, WA_DEFAULT_TEXT } from '~/utils/site'

const year = new Date().getFullYear()

const serviceLinks = [
  { label: 'Renovasi Fasilitas', to: '/services#renovasi' },
  { label: 'Konstruksi Bangunan', to: '/services#konstruksi' },
  { label: 'Konsultasi & Perencanaan', to: '/services#perencanaan' }
]

const companyLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/about' },
  { label: 'Portofolio', to: '/portfolio' },
  { label: 'Kontak', to: '/contact' }
]

const socials = [
  { label: 'Facebook', icon: 'i-lucide-facebook', href: '#' },
  { label: 'Instagram', icon: 'i-lucide-instagram', href: '#' },
  { label: 'YouTube', icon: 'i-lucide-youtube', href: '#' }
]
</script>

<template>
  <footer class="bg-ink text-stone-300">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-12">
        <!-- Brand -->
        <div class="lg:col-span-4">
          <AppLogo class="invert" />
          <p class="mt-5 max-w-sm text-sm leading-relaxed">
            {{ SITE.company }} — perusahaan jasa konstruksi di Sleman, Yogyakarta. Melayani renovasi
            fasilitas, konstruksi bangunan, serta konsultasi &amp; perencanaan dengan prinsip tepat waktu,
            tepat mutu, dan tepat biaya.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              class="grid size-10 place-items-center rounded-tick border border-white/15 text-stone-300 transition hover:border-white hover:text-white"
              :aria-label="s.label"
            >
              <UIcon
                :name="s.icon"
                class="size-4.5"
              />
            </a>
          </div>
        </div>

        <!-- Layanan -->
        <div class="lg:col-span-2">
          <h3 class="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Layanan
          </h3>
          <ul class="mt-5 space-y-3 text-sm">
            <li
              v-for="l in serviceLinks"
              :key="l.to"
            >
              <NuxtLink
                :to="l.to"
                class="transition hover:text-white"
              >{{ l.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Perusahaan -->
        <div class="lg:col-span-2">
          <h3 class="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Perusahaan
          </h3>
          <ul class="mt-5 space-y-3 text-sm">
            <li
              v-for="l in companyLinks"
              :key="l.to"
            >
              <NuxtLink
                :to="l.to"
                class="transition hover:text-white"
              >{{ l.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kontak -->
        <div class="lg:col-span-4">
          <h3 class="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Hubungi Kami
          </h3>
          <ul class="mt-5 space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <UIcon
                name="i-lucide-map-pin"
                class="mt-0.5 size-4 shrink-0 text-stone-400"
              />
              <span>{{ SITE.address }}</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon
                name="i-simple-icons-whatsapp"
                class="mt-0.5 size-4 shrink-0 text-stone-400"
              />
              <a
                :href="waLink(WA_DEFAULT_TEXT)"
                target="_blank"
                rel="noopener"
                class="transition hover:text-white"
              >
                {{ SITE.phoneDisplay }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <UIcon
                name="i-lucide-mail"
                class="mt-0.5 size-4 shrink-0 text-stone-400"
              />
              <a
                :href="`mailto:${SITE.email}`"
                class="transition hover:text-white"
              >{{ SITE.email }}</a>
            </li>
            <li class="flex items-start gap-3">
              <UIcon
                name="i-lucide-zap"
                class="mt-0.5 size-4 shrink-0 text-stone-400"
              />
              <span>Fast response via WhatsApp — tim kami siap membantu kebutuhan Anda.</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bar bawah -->
      <div class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
        <p>© {{ year }} {{ SITE.company }}. Seluruh hak cipta dilindungi.</p>
        <div class="flex items-center gap-6">
          <a
            href="#"
            class="transition hover:text-white"
          >Syarat &amp; Ketentuan</a>
          <a
            href="#"
            class="transition hover:text-white"
          >Kebijakan Privasi</a>
        </div>
        <p class="flex items-center gap-1.5">
          Sleman, Yogyakarta
          <UIcon
            name="i-lucide-hard-hat"
            class="size-3.5 text-stone-400"
          />
        </p>
      </div>
    </div>
  </footer>
</template>
