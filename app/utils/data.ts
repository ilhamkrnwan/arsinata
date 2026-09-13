// Data konten situs Arsinata — CV Arsinata Cipta Saderma, Sleman, Yogyakarta.
// Foto proyek menggunakan aset AVIF nyata dari dokumentasi lapangan.
// Path: /portofolio/<slug>/<slug>_NNN.avif

export interface Project {
  slug: string
  title: string
  category: string
  categoryIcon: string
  location: string
  client: string
  year?: string
  description: string
  fullDescription: string
  scopeOfWork: string[]
  deliverables?: string[]
  tags: string[]
  highlight?: string
  image: string
  coverJpg: string
  gallery: string[]
}

export const projects: Project[] = [
  // ── PT KAI Balai Yasa (Yogyakarta) ────────────────────────────────────────
  {
    slug: 'balai-yasa-ruang-evp',
    title: 'PT KAI Balai Yasa — Ruang EVP',
    category: 'Kantor & BUMN',
    categoryIcon: 'i-lucide-train-front',
    location: 'Yogyakarta',
    client: 'PT Kereta Api Indonesia (Persero) Balai Yasa Yogyakarta',
    year: '2024',
    description:
      'Interior ruang Executive Vice President Balai Yasa Yogyakarta: meja kerja pimpinan berbahan premium, backdrop aksen kayu, sofa tamu VIP, dan pencahayaan aksen elegan.',
    fullDescription:
      'Proyek renovasi interior ruang pimpinan tertinggi (Executive Vice President) Balai Yasa Yogyakarta. Menampilkan standar pengerjaan kelas eksekutif dengan perpaduan backdrop panel kayu, meja pimpinan terintegrasi, area penerimaan tamu VIP, serta pencahayaan ambient warm yang prestisius.',
    scopeOfWork: [
      'Meja Pimpinan Eksekutif Kustom',
      'Backdrop Panel Kayu & Credenza',
      'Penataan Area Tamu VIP',
      'Sistem Tata Cahaya & Kelistrikan'
    ],
    deliverables: [
      'Gambar kerja & 3D layout',
      'Checklist inspeksi material & finishing',
      'Dokumentasi progres & serah terima'
    ],
    tags: ['Interior', 'Kantor Eksekutif', 'Finishing Premium'],
    highlight: 'PT KAI',
    image: '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_001.avif',
    coverJpg: '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_001.jpg',
    gallery: [
      '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_001.avif',
      '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_002.avif',
      '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_003.avif',
      '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_004.avif',
      '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_005.avif',
      '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_006.avif',
      '/portofolio/balai-yasa-ruang-evp/balai-yasa-ruang-evp_007.avif'
    ]
  },
  {
    slug: 'balai-yasa-ruang-manager',
    title: 'PT KAI Balai Yasa — Ruang Manajer',
    category: 'Kantor & BUMN',
    categoryIcon: 'i-lucide-train-front',
    location: 'Yogyakarta',
    client: 'PT Kereta Api Indonesia (Persero) Balai Yasa Yogyakarta',
    year: '2024',
    description:
      'Penataan interior ruang manajer Balai Yasa: kabinet dinding terintegrasi, meja kerja fungsional, dan panel dinding modern korporat yang rapi.',
    fullDescription:
      'Pekerjaan interior ruang kerja Manajer di lingkungan Balai Yasa Yogyakarta. Penataan ruang berfokus pada layout efisien, kabinet dinding terintegrasi dengan partisi, serta aksen interior korporat yang bersih dan berwibawa.',
    scopeOfWork: [
      'Kabinet Dinding Terpadu',
      'Meja Kerja Manajerial',
      'Panel Dinding & Partisi',
      'MEP & Tata Lampu'
    ],
    deliverables: [
      'Pengukuran & layout ergonomis',
      'Inspeksi sambungan dan hardware pintu',
      'Garansi hasil pekerjaan'
    ],
    tags: ['Interior', 'Renovasi', 'MEP'],
    highlight: 'PT KAI',
    image: '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_001.avif',
    coverJpg: '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_001.jpg',
    gallery: [
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_001.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_002.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_003.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_004.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_005.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_006.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_007.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_008.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_009.avif',
      '/portofolio/balai-yasa-ruang-manager/balai-yasa-ruang-manager_010.avif'
    ]
  },
  {
    slug: 'balai-yasa-ruang-asmen',
    title: 'PT KAI Balai Yasa — Ruang Kerja Asmen',
    category: 'Kantor & BUMN',
    categoryIcon: 'i-lucide-train-front',
    location: 'Yogyakarta',
    client: 'PT Kereta Api Indonesia (Persero) Balai Yasa Yogyakarta',
    year: '2024',
    description:
      'Penataan interior & partisi ruang kerja Asisten Manajer Balai Yasa: meja modular, kabinet arsip terpadu, dan layout ergonomis untuk produktivitas.',
    fullDescription:
      'Penataan ruang kerja Asisten Manajer (Asmen) Balai Yasa Yogyakarta yang mengedepankan efisiensi alur kerja administrasi, kerapian penyimpanan arsip dokumen penting, serta privasi koordinasi tim.',
    scopeOfWork: [
      'Partisi Ruang Kerja Semi-Privat',
      'Meja Modular Kustom',
      'Kabinet Arsip Dinding Terpadu',
      'Instalasi Kelistrikan & Cable Tray'
    ],
    deliverables: [
      'Optimalisasi sirkulasi ruang kerja',
      'Pemeriksaan kerapian jalur kabel',
      'Dokumentasi serah terima'
    ],
    tags: ['Interior', 'Partisi', 'Renovasi'],
    highlight: 'PT KAI',
    image: '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_001.avif',
    coverJpg: '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_001.jpg',
    gallery: [
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_001.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_002.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_003.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_004.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_005.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_006.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_007.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_008.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_009.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_010.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_011.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_012.avif',
      '/portofolio/balai-yasa-ruang-asmen/balai-yasa-ruang-asmen_013.avif'
    ]
  },
  {
    slug: 'balai-yasa-ruang-rapat',
    title: 'PT KAI Balai Yasa — Ruang Rapat Atas',
    category: 'Kantor & BUMN',
    categoryIcon: 'i-lucide-train-front',
    location: 'Yogyakarta',
    client: 'PT Kereta Api Indonesia (Persero) Balai Yasa Yogyakarta',
    year: '2024',
    description:
      'Renovasi ruang rapat lantai atas: meja rapat kustom, backdrop aksen dinding, manajemen kabel tersembunyi, dan tata pencahayaan presentasi profesional.',
    fullDescription:
      'Pekerjaan pembaruan ruang rapat utama di lantai dua Balai Yasa Yogyakarta. Menggabungkan unsur fungsional korporat modern dengan meja rapat besar kustom, backdrop dinding presenter, instalasi kabel proyektor/AV tersembunyi, dan tata pencahayaan presisi.',
    scopeOfWork: [
      'Meja Rapat Konferensi Kustom',
      'Backdrop Dinding Presenter',
      'Instalasi MEP & Cable Management',
      'Pencahayaan Presentasi Fokus'
    ],
    deliverables: [
      'Rencana tata letak rapat & AV',
      'Quality checklist elektrikal',
      'Garansi pengerjaan'
    ],
    tags: ['Interior', 'Ruang Rapat', 'MEP'],
    highlight: 'PT KAI',
    image: '/portofolio/balai-yasa-ruang-rapat/balai-yasa-ruang-rapat_001.avif',
    coverJpg: '/portofolio/balai-yasa-ruang-rapat/balai-yasa-ruang-rapat_001.jpg',
    gallery: [
      '/portofolio/balai-yasa-ruang-rapat/balai-yasa-ruang-rapat_001.avif',
      '/portofolio/balai-yasa-ruang-rapat/balai-yasa-ruang-rapat_002.avif',
      '/portofolio/balai-yasa-ruang-rapat/balai-yasa-ruang-rapat_003.avif'
    ]
  },
  {
    slug: 'balai-yasa-perpustakaan',
    title: 'PT KAI Balai Yasa — Perpustakaan',
    category: 'Kantor & BUMN',
    categoryIcon: 'i-lucide-train-front',
    location: 'Yogyakarta',
    client: 'PT Kereta Api Indonesia (Persero) Balai Yasa Yogyakarta',
    year: '2024',
    description:
      'Renovasi perpustakaan internal Balai Yasa: rak buku terpadu, area baca ergonomis, dan pencahayaan hangat nyaman untuk literasi karyawan.',
    fullDescription:
      'Renovasi menyeluruh fasilitas perpustakaan dan literasi di lingkungan kantor PT KAI Balai Yasa Yogyakarta. Didesain dengan tata rak terpadu, partisi akustik ringan, serta pencahayaan yang mendukung kenyamanan membaca dan riset para pekerja teknis.',
    scopeOfWork: [
      'Interior Perpustakaan & Ruang Baca',
      'Rak Buku Dinding Custom Terpadu',
      'Area Baca Ergonomis',
      'Pencahayaan Warm Reading'
    ],
    deliverables: [
      'Desain penataan ruang literasi',
      'Finishing kayu rapi & kokoh',
      'Dokumentasi audit-ready'
    ],
    tags: ['Interior', 'Renovasi', 'BUMN'],
    highlight: 'PT KAI',
    image: '/portofolio/balai-yasa-perpustakaan/balai-yasa-perpustakaan_001.avif',
    coverJpg: '/portofolio/balai-yasa-perpustakaan/balai-yasa-perpustakaan_001.jpg',
    gallery: [
      '/portofolio/balai-yasa-perpustakaan/balai-yasa-perpustakaan_001.avif',
      '/portofolio/balai-yasa-perpustakaan/balai-yasa-perpustakaan_002.avif'
    ]
  },

  // ── Fasilitas Pendidikan ───────────────────────────────────────────────────
  {
    slug: 'uin-ruang-kelas',
    title: 'UIN Sunan Kalijaga — Ruang Kelas',
    category: 'Pendidikan',
    categoryIcon: 'i-lucide-graduation-cap',
    location: 'Yogyakarta',
    client: 'UIN Sunan Kalijaga Yogyakarta',
    year: '2024',
    description:
      'Renovasi menyeluruh ruang perkuliahan modern: lantai kerja, dinding aksen podium pengajar, meja kuliah modular terpadu, serta instalasi kelistrikan dan proyektor.',
    fullDescription:
      'Proyek renovasi komprehensif ruang kelas perkuliahan di kampus UIN Sunan Kalijaga Yogyakarta. Mengakomodasi kebutuhan pembelajaran interaktif dengan perbaikan lantai kerja, pembuatan dinding aksen podium dosen, instalasi stopkontak per meja, sistem audio-visual gantung, serta pencahayaan standar perguruan tinggi.',
    scopeOfWork: [
      'Renovasi Lantai & Dinding Akustik',
      'Dinding Aksen Podium Dosen',
      'Instalasi MEP, Audio & Proyektor',
      'Furniture Meja & Kursi Kuliah Modular'
    ],
    deliverables: [
      'Checklist instalasi audio visual',
      'Review kesesuaian material kampus',
      'Serah terima tepat jadwal akademik'
    ],
    tags: ['Renovasi', 'Interior', 'MEP'],
    highlight: 'UIN Sunan Kalijaga',
    image: '/portofolio/uin-ruang-kelas/uin-ruang-kelas_002.avif',
    coverJpg: '/portofolio/uin-ruang-kelas/uin-ruang-kelas_002.jpg',
    gallery: [
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_001.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_002.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_003.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_004.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_005.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_006.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_007.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_008.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_009.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_010.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_011.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_012.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_013.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_014.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_015.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_016.avif',
      '/portofolio/uin-ruang-kelas/uin-ruang-kelas_017.avif'
    ]
  },
  {
    slug: 'sma-muh-4-yk',
    title: 'SMA Muhammadiyah 4 Yogyakarta — Front Office',
    category: 'Pendidikan',
    categoryIcon: 'i-lucide-school',
    location: 'Yogyakarta',
    client: 'SMA Muhammadiyah 4 Yogyakarta',
    year: '2024',
    description:
      'Renovasi meja resepsionis, backdrop dinding lobi berlogo institusi, dan penataan ruang tunggu tamu front office SMA Muhammadiyah 4 Yogyakarta.',
    fullDescription:
      'Pekerjaan peremajaan area lobi utama dan front office SMA Muhammadiyah 4 Yogyakarta. Proyek meliputi pembuatan backdrop panel vertikal dengan logo akrilik timbul sekolah, meja resepsionis penerimaan tamu, dan area tunggu yang rapi dan representatif bagi tamu dan orang tua siswa.',
    scopeOfWork: [
      'Backdrop Dinding Logo Sekolah',
      'Meja Resepsionis Custom',
      'Penataan Area Tunggu Lobi',
      'Lighting Aksen Spot & Signage'
    ],
    deliverables: [
      'Desain branding front office',
      'Finishing cat & akrilik presisi',
      'Garansi pekerjaan fisik'
    ],
    tags: ['Interior', 'Renovasi', 'Finishing'],
    image: '/portofolio/sma-muh-4-yk/sma-muh-4-yk_001.avif',
    coverJpg: '/portofolio/sma-muh-4-yk/sma-muh-4-yk_001.jpg',
    gallery: [
      '/portofolio/sma-muh-4-yk/sma-muh-4-yk_001.avif',
      '/portofolio/sma-muh-4-yk/sma-muh-4-yk_002.avif',
      '/portofolio/sma-muh-4-yk/sma-muh-4-yk_003.avif',
      '/portofolio/sma-muh-4-yk/sma-muh-4-yk_004.avif',
      '/portofolio/sma-muh-4-yk/sma-muh-4-yk_005.avif',
      '/portofolio/sma-muh-4-yk/sma-muh-4-yk_006.avif'
    ]
  },
  {
    slug: 'smk-muh-3-yk',
    title: 'SMK Muhammadiyah 3 Yogyakarta — Backdrop Meja',
    category: 'Pendidikan',
    categoryIcon: 'i-lucide-school',
    location: 'Yogyakarta',
    client: 'SMK Muhammadiyah 3 Yogyakarta',
    year: '2024',
    description:
      'Pembuatan backdrop dekoratif berlogo institusi dan meja resepsionis layanan informasi di SMK Muhammadiyah 3 Yogyakarta.',
    fullDescription:
      'Pekerjaan backdrop panel dinding dan meja layanan informasi institusi di SMK Muhammadiyah 3 Yogyakarta. Menonjolkan identitas sekolah kejuruan modern yang berkarakter dengan finishing HPL presisi dan tata kabel tersembunyi.',
    scopeOfWork: [
      'Backdrop Panel Dinding Institusi',
      'Meja Layanan Informasi Ergonomis',
      'Branding Logo Akrilik Presisi',
      'Instalasi Kelistrikan'
    ],
    deliverables: [
      'Fabrikasi custom furniture rapi',
      'Pemasangan di luar jam belajar',
      'Dokumentasi serah terima'
    ],
    tags: ['Interior', 'Custom Furniture'],
    image: '/portofolio/smk-muh-3-yk/smk-muh-3-yk_001.avif',
    coverJpg: '/portofolio/smk-muh-3-yk/smk-muh-3-yk_001.jpg',
    gallery: [
      '/portofolio/smk-muh-3-yk/smk-muh-3-yk_001.avif',
      '/portofolio/smk-muh-3-yk/smk-muh-3-yk_002.avif',
      '/portofolio/smk-muh-3-yk/smk-muh-3-yk_003.avif'
    ]
  },
  {
    slug: 'unisa-backdrop',
    title: 'UNISA — Backdrop Institusi',
    category: 'Pendidikan',
    categoryIcon: 'i-lucide-graduation-cap',
    location: 'Yogyakarta',
    client: 'Universitas \'Aisyiyah (UNISA) Yogyakarta',
    year: '2024',
    description:
      'Pekerjaan backdrop panel dinding institusi dan aksen dekoratif ruang pertemuan di Universitas Aisyiyah (UNISA) Yogyakarta.',
    fullDescription:
      'Pekerjaan backdrop dinding panggung dan aksen dekoratif ruang pertemuan di kampus UNISA Yogyakarta. Mengedepankan tampilan elegan, formal, dan rapi untuk mendukung penyelenggaraan kegiatan akademik dan seremonial kampus.',
    scopeOfWork: [
      'Backdrop Panel Dinding Panggung',
      'Logo Institusi Akrilik Presisi',
      'Finishing Cat & HPL Elegan',
      'Tata Lampu Latar (Backlight)'
    ],
    deliverables: [
      'Desain panel panggung formal',
      'Uji coba kelistrikan lampu latar',
      'Garansi pengerjaan'
    ],
    tags: ['Interior', 'Custom Furniture'],
    image: '/portofolio/unisa-backdrop/unisa-backdrop_001.avif',
    coverJpg: '/portofolio/unisa-backdrop/unisa-backdrop_001.jpg',
    gallery: [
      '/portofolio/unisa-backdrop/unisa-backdrop_001.avif',
      '/portofolio/unisa-backdrop/unisa-backdrop_002.avif'
    ]
  },

  // ── Fasilitas Publik & Kesehatan ───────────────────────────────────────────
  {
    slug: 'puskesmas-2-tempel',
    title: 'Puskesmas 2 Tempel — Front Office',
    category: 'Fasilitas Publik',
    categoryIcon: 'i-lucide-landmark',
    location: 'Sleman, DIY',
    client: 'Puskesmas 2 Tempel Sleman',
    year: '2024',
    description:
      'Pembangunan meja registrasi dan front office pelayanan masyarakat Puskesmas 2 Tempel: loket pendaftaran ergonomis, partisi higienis, dan signage terpadu.',
    fullDescription:
      'Pekerjaan konstruksi dan interior loket pendaftaran serta ruang tunggu pelayanan kesehatan masyarakat di Puskesmas 2 Tempel, Sleman. Dikerjakan dengan spesifikasi higienis, partisi akrilik pelayanan, serta alur antrean yang tertib.',
    scopeOfWork: [
      'Meja Loket Pendaftaran Bertingkat',
      'Partisi Higienis Pelayanan',
      'Signage & Branding Fasilitas Publik',
      'Finishing Cat Tahan Gores & Lembap'
    ],
    deliverables: [
      'Standar ergonomi antrean pasien',
      'Laporan progres foto harian',
      'Serah terima dokumen audit-ready'
    ],
    tags: ['Interior', 'Konstruksi', 'Finishing'],
    image: '/portofolio/puskesmas-2-tempel/puskesmas-2-tempel_001.avif',
    coverJpg: '/portofolio/puskesmas-2-tempel/puskesmas-2-tempel_001.jpg',
    gallery: [
      '/portofolio/puskesmas-2-tempel/puskesmas-2-tempel_001.avif',
      '/portofolio/puskesmas-2-tempel/puskesmas-2-tempel_002.avif'
    ]
  },
  {
    slug: 'ruang-praktik-dr-geta',
    title: 'Ruang Praktik dr. Geta Virucha',
    category: 'Fasilitas Publik',
    categoryIcon: 'i-lucide-stethoscope',
    location: 'Sleman, DIY',
    client: 'dr. Geta Virucha',
    year: '2024',
    description:
      'Desain dan pengerjaan interior ruang konsultasi & tindakan medis: meja periksa dokter, partisi privasi pasien, kabinet higienis, dan suasana tenang profesional.',
    fullDescription:
      'Pekerjaan penataan interior ruang konsultasi dan tindakan medis di Sleman, DIY. Memadukan kebutuhan ergonomi dokter, kenyamanan psikologis pasien, penyimpanan obat dan instrumen medis higienis, serta partisi tirai privasi.',
    scopeOfWork: [
      'Meja Konsultasi Dokter Kustom',
      'Kabinet Penyimpanan Medis Higienis',
      'Partisi Privasi Pasien',
      'Tata Cahaya Pemeriksaan Lembut'
    ],
    deliverables: [
      'Layout fungsional ruang praktik',
      'Material steril & mudah dibersihkan',
      'Garansi fisik pekerjaan'
    ],
    tags: ['Interior', 'Custom Furniture', 'Finishing'],
    image: '/portofolio/ruang-praktik-dr-geta/ruang-praktik-dr-geta_001.avif',
    coverJpg: '/portofolio/ruang-praktik-dr-geta/ruang-praktik-dr-geta_001.jpg',
    gallery: [
      '/portofolio/ruang-praktik-dr-geta/ruang-praktik-dr-geta_001.avif',
      '/portofolio/ruang-praktik-dr-geta/ruang-praktik-dr-geta_002.avif',
      '/portofolio/ruang-praktik-dr-geta/ruang-praktik-dr-geta_003.avif',
      '/portofolio/ruang-praktik-dr-geta/ruang-praktik-dr-geta_004.avif'
    ]
  },

  // ── Residensial / Rumah Tinggal ────────────────────────────────────────────
  {
    slug: 'kitchen-set-pak-topek',
    title: 'Kitchen Set & Backdrop TV — Pak Topek',
    category: 'Residensial',
    categoryIcon: 'i-lucide-home',
    location: 'Sleman, DIY',
    client: 'Hunian Pribadi Pak Topek',
    year: '2024',
    description:
      'Desain konsep 3D dan instalasi fisik kitchen set custom serta backdrop panel TV dengan aksen LED strip tersembunyi. Harga transparan sejak RAB disepakati.',
    fullDescription:
      'Pengerjaan interior terpadu untuk area ruang keluarga dan dapur bersih hunian Pak Topek di Sleman. Meliputi backdrop TV vertikal dengan aksen kisi-kisi kayu dan lampu LED strip tersembunyi, serta kitchen set compact fungsional dengan anggaran transparan.',
    scopeOfWork: [
      'Backdrop Panel TV & Kisi Kayu',
      'Kitchen Set Minimalis Ruang Terbatas',
      'Instalasi Pencahayaan LED Strip',
      'Pengecatan & Finishing Halus'
    ],
    deliverables: [
      'Visualisasi 3D sebelum pengerjaan',
      'RAB rinci tanpa biaya siluman',
      'Garansi pengerjaan & hardware'
    ],
    tags: ['Interior', 'Kitchen Set', 'Custom Furniture'],
    image: '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_004.avif',
    coverJpg: '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_004.jpg',
    gallery: [
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_001.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_002.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_003.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_004.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_005.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_006.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_007.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_008.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_009.avif',
      '/portofolio/kitchen-set-pak-topek/kitchen-set-pak-topek_010.avif'
    ]
  },
  {
    slug: 'kitchen-set-bu-bikan',
    title: 'Kitchen Set — Bu Bikan',
    category: 'Residensial',
    categoryIcon: 'i-lucide-home',
    location: 'Sleman, DIY',
    client: 'Hunian Pribadi Bu Bikan',
    year: '2024',
    description:
      'Desain 3D render dan realisasi kitchen set minimalis modern: kabinet atas-bawah, table top solid surface, kompor tanam, dan cooker hood terintegrasi rapi.',
    fullDescription:
      'Pekerjaan perancangan 3D hingga fabrikasi fisik kitchen set custom untuk hunian residensial di Sleman. Menggunakan material tahan lembap, solid surface countertop, kompor tanam, cooker hood tersembunyi, serta sistem soft-close hardware.',
    scopeOfWork: [
      'Desain Konsep 3D Render',
      'Kabinet Dapur Atas & Bawah',
      'Table Top Solid Surface Higienis',
      'Instalasi Kompor Tanam & Exhaust Hood'
    ],
    deliverables: [
      '3D render realistis',
      'Uji coba saluran air & exhaust',
      'Garansi engsel & hidrolik kabinet'
    ],
    tags: ['Interior', 'Kitchen Set', '3D Render'],
    image: '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_006.avif',
    coverJpg: '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_006.jpg',
    gallery: [
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_001.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_002.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_003.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_004.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_005.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_006.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_007.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_008.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_009.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_010.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_011.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_012.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_013.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_014.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_015.avif',
      '/portofolio/kitchen-set-bu-bikan/kitchen-set-bu-bikan_016.avif'
    ]
  },

  // ── Ritel & Komersial ──────────────────────────────────────────────────────
  {
    slug: 'baby-spa',
    title: 'Baby Spa & Kids Treatment',
    category: 'Ritel & Komersial',
    categoryIcon: 'i-lucide-baby',
    location: 'Sleman, DIY',
    client: 'Baby Spa Sleman',
    year: '2024',
    description:
      'Pekerjaan interior ruang perawatan baby spa & anak: area bilas higienis, backdrop lembut bertema ramah anak, dan pencahayaan hangat yang nyaman.',
    fullDescription:
      'Pekerjaan renovasi dan penataan interior fasilitas spa & perawatan anak di Sleman, DIY. Proyek ini memprioritaskan lingkungan yang higienis, ramah anak, dan aman dengan material ramah lingkungan serta palet warna yang menenangkan bagi bayi dan orang tua.',
    scopeOfWork: [
      'Pekerjaan Interior & Finishing',
      'Backdrop Lembut Ramah Anak',
      'Area Bilas Higienis & Plumbing Air Hangat',
      'Pencahayaan Hangat (Warm Lighting)'
    ],
    deliverables: [
      'Desain ramah anak & higienis',
      'Pemeriksaan keamanan sudut & material',
      'Garansi hasil pengerjaan'
    ],
    tags: ['Interior', 'Renovasi', 'Finishing'],
    image: '/portofolio/baby-spa/baby-spa_001.avif',
    coverJpg: '/portofolio/baby-spa/baby-spa_001.jpg',
    gallery: [
      '/portofolio/baby-spa/baby-spa_001.avif',
      '/portofolio/baby-spa/baby-spa_002.avif',
      '/portofolio/baby-spa/baby-spa_003.avif'
    ]
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

export interface ClientLogo {
  name: string
  shortName: string
  category: string
  webp: string
  avif: string
  heightClass?: string
}

export const clientLogos: ClientLogo[] = [
  {
    name: 'PT Kereta Api Indonesia (Persero)',
    shortName: 'PT KAI',
    category: 'BUMN Transportasi',
    webp: '/logo/kai.webp',
    avif: '/logo/kai.avif',
    heightClass: 'h-7 sm:h-8'
  },
  {
    name: 'Balai Yasa Yogyakarta',
    shortName: 'Balai Yasa YK',
    category: 'Unit Pelaksana PT KAI',
    webp: '/logo/balai-yasa-yk.webp',
    avif: '/logo/balai-yasa-yk.avif',
    heightClass: 'h-7 sm:h-8'
  },
  {
    name: 'PT Pos Indonesia (PosIND)',
    shortName: 'Pos Indonesia',
    category: 'BUMN Logistik',
    webp: '/logo/pos-ind.webp',
    avif: '/logo/pos-ind.avif',
    heightClass: 'h-8 sm:h-9'
  },
  {
    name: 'UIN Sunan Kalijaga Yogyakarta',
    shortName: 'UIN Sunan Kalijaga',
    category: 'Perguruan Tinggi',
    webp: '/logo/uin-suka.webp',
    avif: '/logo/uin-suka.avif',
    heightClass: 'h-9 sm:h-10'
  },
  {
    name: 'Dinas Pemuda dan Olahraga Kabupaten Sleman',
    shortName: 'Dispora Sleman',
    category: 'Pemerintah Daerah',
    webp: '/logo/dispora-sleman.webp',
    avif: '/logo/dispora-sleman.avif',
    heightClass: 'h-7 sm:h-8'
  },
  {
    name: 'Puskesmas Sleman (Dinas Kesehatan)',
    shortName: 'Puskesmas Sleman',
    category: 'Kesehatan Publik',
    webp: '/logo/puskesmas-sleman.webp',
    avif: '/logo/puskesmas-sleman.avif',
    heightClass: 'h-8 sm:h-9'
  },
  {
    name: 'Puskesmas Gamping Sleman',
    shortName: 'Puskesmas Gamping',
    category: 'Kesehatan Publik',
    webp: '/logo/puskesmas-gamping.webp',
    avif: '/logo/puskesmas-gamping.avif',
    heightClass: 'h-8 sm:h-9'
  },
  {
    name: 'SMK Muhammadiyah 3 Yogyakarta',
    shortName: 'SMK Muh 3 YK',
    category: 'Institusi Pendidikan',
    webp: '/logo/smk-muh-3-yk.webp',
    avif: '/logo/smk-muh-3-yk.avif',
    heightClass: 'h-8 sm:h-9'
  },
  {
    name: 'SMA Muhammadiyah 4 Yogyakarta',
    shortName: 'SMA Muh 4 YK',
    category: 'Institusi Pendidikan',
    webp: '/logo/smk-muh-4-yk.webp',
    avif: '/logo/smk-muh-4-yk.avif',
    heightClass: 'h-8 sm:h-9'
  }
]

export interface ProcurementApp {
  name: string
  shortName: string
  description: string
  webp: string
  avif: string
  heightClass?: string
}

export const procurementApps: ProcurementApp[] = [
  {
    name: 'LPSE — Layanan Pengadaan Secara Elektronik',
    shortName: 'LPSE',
    description: 'Sistem pengadaan elektronik kementerian, lembaga, dan pemerintah daerah',
    webp: '/aplikasi/lpse.webp',
    avif: '/aplikasi/lpse.avif',
    heightClass: 'h-8 sm:h-9'
  },
  {
    name: 'INAPROC — Portal Pengadaan Nasional LKPP',
    shortName: 'INAPROC',
    description: 'Pintu gerbang sistem pengadaan nasional LKPP RI',
    webp: '/aplikasi/inaproc.webp',
    avif: '/aplikasi/inaproc.avif',
    heightClass: 'h-8 sm:h-9'
  },
  {
    name: 'e-Procurement — Electronic Procurement BUMN & Korporat',
    shortName: 'e-Proc',
    description: 'Portal tender pengadaan barang dan jasa BUMN & korporasi',
    webp: '/aplikasi/eproc.webp',
    avif: '/aplikasi/eproc.avif',
    heightClass: 'h-7 sm:h-8'
  },
  {
    name: 'Mbizmarket — Mitra Toko Daring LKPP',
    shortName: 'Mbizmarket',
    description: 'B2B marketplace pengadaan barang & jasa pemerintah dan korporasi',
    webp: '/aplikasi/mbiz.webp',
    avif: '/aplikasi/mbiz.avif',
    heightClass: 'h-6 sm:h-7'
  }
]
