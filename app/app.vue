<script setup>
import { SITE } from '~/utils/site'

useHead({
  htmlAttrs: { lang: 'id' },
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ]
})

const title = `${SITE.name} — Jasa Konstruksi & Renovasi di Yogyakarta`
const description
  = `${SITE.company}: kontraktor & jasa konstruksi di Sleman, Yogyakarta. Renovasi fasilitas, konstruksi bangunan, konsultasi & perencanaan (RAB/BoQ). Fast response, transparan, bergaransi — dipercaya PT KAI & lembaga pemerintah.`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.jpg',
  ogUrl: 'https://arsinata.com',
  ogType: 'website',
  ogLocale: 'id_ID',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NavHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <NavFooter />
  </UApp>
</template>
