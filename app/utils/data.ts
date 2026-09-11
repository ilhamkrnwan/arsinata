// Data konten situs Arsinata — bersumber dari profil resmi perusahaan.
// Catatan: klien & angka hanya yang sudah dikonfirmasi; foto proyek menyusul
// (sementara memakai placeholder abu-abu).

export interface Project {
  title: string
  category: string
  categoryIcon: string
  location: string
  description: string
  tags: string[]
  highlight?: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Renovasi Kantor PT KAI',
    category: 'Kantor & Perkantoran',
    categoryIcon: 'i-lucide-train-front',
    location: 'Yogyakarta',
    description:
      'Penataan ulang ruang kerja dan fasilitas pendukung dengan gangguan operasional minimal — peningkatan efisiensi hingga 30%.',
    tags: ['Renovasi', 'Interior', 'MEP'],
    highlight: 'Efisiensi +30%',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Gedung Perkantoran Sleman',
    category: 'Kantor & Perkantoran',
    categoryIcon: 'i-lucide-building-2',
    location: 'Sleman, DIY',
    description:
      'Pembangunan gedung perkantoran dari struktur hingga finishing, dikerjakan bertahap dengan kontrol mutu di setiap fase.',
    tags: ['Konstruksi', 'Struktur', 'Arsitektur'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Gudang Logistik',
    category: 'Logistik',
    categoryIcon: 'i-lucide-warehouse',
    location: 'Yogyakarta',
    description:
      'Konstruksi & renovasi gudang penyimpanan: struktur baja, lantai kerja, dan penataan sirkulasi barang yang efisien.',
    tags: ['Konstruksi', 'Sipil'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Renovasi Kantor Cabang',
    category: 'Kantor & Perkantoran',
    categoryIcon: 'i-lucide-briefcase',
    location: 'DIY',
    description:
      'Renovasi menyeluruh kantor cabang — layout ruang, instalasi MEP, dan finishing yang selesai tepat waktu sesuai jadwal.',
    tags: ['Renovasi', 'Finishing', 'MEP'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Renovasi Rumah Tinggal',
    category: 'Rumah',
    categoryIcon: 'i-lucide-home',
    location: 'Sleman, DIY',
    description:
      'Renovasi interior rumah tinggal: kitchen set, plafon, lantai, hingga perbaikan kebocoran — harga jelas sejak RAB disepakati.',
    tags: ['Renovasi', 'Interior'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Fasilitas Sekolah',
    category: 'Pendidikan',
    categoryIcon: 'i-lucide-school',
    location: 'Sleman, DIY',
    description:
      'Perawatan dan renovasi fasilitas pendidikan — ruang kelas, laboratorium, dan penunjang, dikerjakan menyesuaikan kalender akademik.',
    tags: ['Renovasi', 'Perawatan'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80'
  }
]

export const testimonials = [
  {
    quote:
      'Progres jelas dan disiplin waktu. Setiap tahap terdokumentasi rapi dan mudah diaudit — cocok untuk kebutuhan institusi kami.',
    client: 'Klien A',
    role: 'Renovasi Kantor'
  },
  {
    quote:
      'Responnya cepat dan biaya transparan sejak awal. Tidak ada biaya siluman yang muncul di tengah jalan.',
    client: 'Klien B',
    role: 'Renovasi Rumah Tinggal'
  },
  {
    quote:
      'Pengerjaan rapi, tepat jadwal, dan timnya menjaga kebersihan area kerja setiap hari. Rekomendasi untuk proyek perkantoran.',
    client: 'Klien C',
    role: 'Proyek Perkantoran'
  }
]

export const faqs = [
  {
    q: 'Bagaimana cara memulai proyek bersama Arsinata?',
    a: 'Cukup hubungi kami via WhatsApp atau isi survey singkat di bawah. Kami merespons cepat, melakukan site assessment, lalu menyusun scope dan RAB sebelum eksekusi dimulai.'
  },
  {
    q: 'Apakah konsultasi awal dan survey lokasi dikenakan biaya?',
    a: 'Tidak. Konsultasi awal dan site assessment untuk menilai kebutuhan tidak dipungut biaya. RAB disusun transparan sebelum Anda memutuskan melanjutkan.'
  },
  {
    q: 'Berapa lama waktu pengerjaan sebuah proyek?',
    a: 'Tergantung scope dan kondisi lapangan. Setelah RAB disepakati, kami menyusun jadwal terukur dengan milestone yang jelas — dan kami berkomitmen menyelesaikan tepat waktu.'
  },
  {
    q: 'Apakah hasil pekerjaan bergaransi?',
    a: 'Ya. Hasil pekerjaan kami bergaransi sesuai kesepakatan. Jika ada masalah yang timbul dari pengerjaan kami, kami akan kembali dan menyelesaikannya.'
  },
  {
    q: 'Apakah biaya dan progres benar-benar transparan?',
    a: 'Transparansi adalah nilai utama kami. RAB/BoQ terdokumentasi, material direview terhadap spesifikasi, dan progres dilaporkan lengkap dengan dokumentasi foto.'
  },
  {
    q: 'Area layanan di mana saja?',
    a: 'Kami melayani proyek di Yogyakarta dan sekitarnya — Sleman, Kota Yogyakarta, Bantul, hingga area DIY lainnya. Untuk kebutuhan khusus di luar area, silakan diskusikan dengan kami.'
  }
]

export const segments = [
  { label: 'PT KAI', icon: 'i-lucide-train-front' },
  { label: 'UIN Sunan Kalijaga', icon: 'i-lucide-graduation-cap' },
  { label: 'Lembaga Pemerintah', icon: 'i-lucide-landmark' },
  { label: 'Sekolah', icon: 'i-lucide-school' },
  { label: 'Perkantoran', icon: 'i-lucide-building-2' },
  { label: 'Ritel & Rumahan', icon: 'i-lucide-store' },
  { label: 'Gudang & Logistik', icon: 'i-lucide-warehouse' }
]
