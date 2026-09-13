<script setup lang="ts">
import { SITE } from '~/utils/site'

useSeoMeta({
  title: `${SITE.name} — Jasa Konstruksi & Renovasi di Yogyakarta`,
  description:
    `${SITE.company}: kontraktor & jasa konstruksi di Sleman, Yogyakarta. Renovasi fasilitas, konstruksi bangunan, konsultasi & perencanaan (RAB/BoQ). Fast response, transparan, bergaransi.`,
  ogTitle: `${SITE.name} — Jasa Konstruksi & Renovasi di Yogyakarta`,
  ogDescription:
    `${SITE.company}: kontraktor & jasa konstruksi di Sleman, Yogyakarta. Renovasi fasilitas, konstruksi bangunan, konsultasi & perencanaan (RAB/BoQ). Fast response, transparan, bergaransi.`,
  ogImage: `${SITE.url}/og-image.jpg`,
  ogUrl: SITE.url,
  twitterCard: 'summary_large_image',
  twitterTitle: `${SITE.name} — Jasa Konstruksi & Renovasi di Yogyakarta`,
  twitterDescription:
    `${SITE.company}: kontraktor & jasa konstruksi di Sleman, Yogyakarta. Renovasi fasilitas, konstruksi bangunan, konsultasi & perencanaan (RAB/BoQ).`,
  twitterImage: `${SITE.url}/og-image.jpg`
})

useHead({
  link: [
    { rel: 'canonical', href: SITE.url }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <ClientsLogobar />
    <GuaranteesSection />
    <PortfolioSection :limit="6" />
    <ApplicationsLogobar />
    <ContactSection />
  </div>
</template>
