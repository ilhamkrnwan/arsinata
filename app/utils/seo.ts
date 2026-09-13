import { SITE } from './site'
import type { Project } from './data'

/**
 * Schema.org GeneralContractor (LocalBusiness)
 * Dioptimasi untuk Google Knowledge Graph, AI Overviews, Perplexity, dan ChatGPT Search (AEO/GEO)
 */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE.url}/#organization`,
    'name': SITE.company,
    'alternateName': SITE.name,
    'url': SITE.url,
    'logo': `${SITE.url}/og-image.jpg`,
    'image': `${SITE.url}/og-image.jpg`,
    'description': `${SITE.company} adalah kontraktor dan penyedia jasa konstruksi di Sleman, Yogyakarta yang melayani renovasi fasilitas, konstruksi bangunan, dan konsultasi perencanaan (RAB/BoQ).`,
    'telephone': `+${SITE.phoneRaw}`,
    'email': SITE.email,
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Plosokuning II, Ngaglik',
      'addressLocality': 'Sleman',
      'addressRegion': 'Daerah Istimewa Yogyakarta',
      'postalCode': '55581',
      'addressCountry': 'ID'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -7.7332,
      'longitude': 110.4079
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Sleman' },
      { '@type': 'AdministrativeArea', 'name': 'Kota Yogyakarta' },
      { '@type': 'AdministrativeArea', 'name': 'Bantul' },
      { '@type': 'AdministrativeArea', 'name': 'Kulon Progo' },
      { '@type': 'AdministrativeArea', 'name': 'Gunungkidul' },
      { '@type': 'AdministrativeArea', 'name': 'Daerah Istimewa Yogyakarta' }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Layanan Konstruksi & Renovasi',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Renovasi Fasilitas',
            'description': 'Peremajaan interior, MEP (listrik, plumbing, AC), dan finishing fasilitas perkantoran, sekolah, dan hunian.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Konstruksi Bangunan',
            'description': 'Pembangunan gedung baru dari struktur, arsitektur, hingga pekerjaan sipil.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Konsultasi & Perencanaan',
            'description': 'Penyusunan Rencana Anggaran Biaya (RAB), BoQ, dan scheduling terukur yang transparan dan audit-ready.'
          }
        }
      ]
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': `+${SITE.phoneRaw}`,
      'contactType': 'customer service',
      'areaServed': 'ID',
      'availableLanguage': ['Indonesian']
    }
  }
}

/**
 * Schema.org FAQPage untuk rich snippets di mesin pencari & Answer Engines
 */
export function buildFAQSchema(faqs: { q: string, a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a
      }
    }))
  }
}

/**
 * Schema.org CreativeWork untuk dokumentasi proyek portofolio
 */
export function buildProjectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'headline': project.title,
    'description': project.fullDescription || project.description,
    'image': `${SITE.url}${project.coverJpg}`,
    'url': `${SITE.url}/portfolio/${project.slug}`,
    'creator': {
      '@type': 'GeneralContractor',
      'name': SITE.company,
      'url': SITE.url
    },
    'locationCreated': {
      '@type': 'Place',
      'name': project.location
    },
    'keywords': project.tags.join(', ')
  }
}

/**
 * Schema.org BreadcrumbList untuk menampilkan navigasi hierarkis pada hasil pencarian
 */
export function buildBreadcrumbSchema(items: { name: string, path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${SITE.url}${item.path}`
    }))
  }
}

/**
 * Schema.org WebSite untuk Google Sitelinks & Knowledge Graph
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    'url': SITE.url,
    'name': SITE.company,
    'alternateName': SITE.name,
    'description': `${SITE.company} — Jasa Kontraktor & Renovasi di Yogyakarta`,
    'inLanguage': 'id-ID',
    'publisher': {
      '@id': `${SITE.url}/#organization`
    }
  }
}
