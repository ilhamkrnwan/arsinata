<script setup>
import { SITE } from '~/utils/site'
import { buildLocalBusinessSchema, buildWebSiteSchema } from '~/utils/seo'

const title = `${SITE.name} — Jasa Konstruksi & Renovasi di Yogyakarta`
const description
  = `${SITE.company}: kontraktor & jasa konstruksi di Sleman, Yogyakarta. Renovasi fasilitas, konstruksi bangunan, konsultasi & perencanaan (RAB/BoQ). Fast response, transparan, bergaransi — dipercaya PT KAI & lembaga pemerintah.`

const localBusinessSchema = buildLocalBusinessSchema()
const webSiteSchema = buildWebSiteSchema()

useHead({
  htmlAttrs: { lang: 'id' },
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: SITE.url },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
  ],
  meta: [
    { name: 'geo.region', content: 'ID-YO' },
    { name: 'geo.placename', content: 'Sleman, Yogyakarta' },
    { name: 'geo.position', content: '-7.7332;110.4079' },
    { name: 'ICBM', content: '-7.7332, 110.4079' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localBusinessSchema)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(webSiteSchema)
    }
  ]
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${SITE.url}/og-image.jpg`,
  ogUrl: SITE.url,
  ogType: 'website',
  ogLocale: 'id_ID',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${SITE.url}/og-image.jpg`
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
