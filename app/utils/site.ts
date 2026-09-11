// Konstanta global situs Arsinata
export const SITE = {
  name: 'ARSINATA',
  company: 'CV Arsinata Cipta Saderma',
  tagline: 'Konstruksi Berkualitas untuk Masa Depan',
  phoneDisplay: '+62 877-3880-8008',
  phoneRaw: '6287738808008',
  email: 'admin@arsinata.com',
  address: 'Plosokuning II, Ngaglik, Sleman, DI Yogyakarta 55581',
  area: 'Yogyakarta & Sekitarnya',
  domain: 'arsinata.com',
  url: 'https://arsinata.com'
}

// Bangun link WhatsApp dengan pesan terisi
export function waLink(text: string): string {
  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`
}

export const WA_DEFAULT_TEXT = 'Halo Arsinata! Saya ingin konsultasi proyek konstruksi / renovasi.'
