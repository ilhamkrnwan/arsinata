<script setup lang="ts">
import { SITE, waLink, WA_DEFAULT_TEXT } from '~/utils/site'

interface Opt {
  label: string
  value: string
}

interface Step {
  key: string
  question: string
  hint: string
  options: Opt[]
}

const BINGUNG = 'Masih bingung — mau konsultasi dulu'

const need: Step = {
  key: 'need',
  question: 'Apa kebutuhan utama Anda?',
  hint: 'Pilih yang paling mendekati — kami menyesuaikan pertanyaan berikutnya',
  options: [
    { label: 'Renovasi interior (ruang & finishing)', value: 'Renovasi interior (ruang & finishing)' },
    { label: 'Renovasi MEP (listrik, plumbing, AC)', value: 'Renovasi MEP (listrik, plumbing, AC)' },
    { label: 'Bangun baru / konstruksi gedung', value: 'Bangun baru / konstruksi gedung' },
    { label: 'Konsultasi & perencanaan (RAB / BoQ)', value: 'Konsultasi & perencanaan (RAB / BoQ)' },
    { label: 'Perawatan & perbaikan', value: 'Perawatan & perbaikan' },
    { label: BINGUNG, value: BINGUNG }
  ]
}

// Percabangan kontekstual — pertanyaan kedua disesuaikan dengan jawaban pertama
const focusByNeed: Record<string, Step> = {
  'Renovasi interior (ruang & finishing)': {
    key: 'focus',
    question: 'Ruang atau area apa yang ingin dirombak?',
    hint: 'Kami menyiapkan tim sesuai area yang dikerjakan',
    options: [
      { label: 'Kitchen set & dapur', value: 'Kitchen set & dapur' },
      { label: 'Kamar tidur / ruang keluarga', value: 'Kamar tidur / ruang keluarga' },
      { label: 'Kantor / area kerja', value: 'Kantor / area kerja' },
      { label: 'Seluruh unit / rumah', value: 'Seluruh unit / rumah' },
      { label: 'Lainnya', value: 'Lainnya' }
    ]
  },
  'Renovasi MEP (listrik, plumbing, AC)': {
    key: 'focus',
    question: 'Bagian MEP mana yang menjadi prioritas?',
    hint: 'Bisa dipilih lebih dari satu pada catatan nanti',
    options: [
      { label: 'Instalasi listrik', value: 'Instalasi listrik' },
      { label: 'Plumbing & sanitasi', value: 'Plumbing & sanitasi' },
      { label: 'AC / ventilasi', value: 'AC / ventilasi' },
      { label: 'Semuanya sekaligus', value: 'Semuanya sekaligus' }
    ]
  },
  'Bangun baru / konstruksi gedung': {
    key: 'focus',
    question: 'Jenis bangunan yang akan dibangun?',
    hint: 'Membantu menyiapkan tim struktur yang sesuai',
    options: [
      { label: 'Rumah tinggal / ruko', value: 'Rumah tinggal / ruko' },
      { label: 'Kantor / perkantoran', value: 'Kantor / perkantoran' },
      { label: 'Gudang / logistik', value: 'Gudang / logistik' },
      { label: 'Fasilitas pendidikan / pemerintah', value: 'Fasilitas pendidikan / pemerintah' },
      { label: 'Lainnya', value: 'Lainnya' }
    ]
  },
  'Konsultasi & perencanaan (RAB / BoQ)': {
    key: 'focus',
    question: 'Fokus konsultasi apa yang Anda butuhkan?',
    hint: 'Kami susun dokumen yang transparan & siap diaudit',
    options: [
      { label: 'RAB / BoQ', value: 'RAB / BoQ' },
      { label: 'Jadwal & scheduling', value: 'Jadwal & scheduling' },
      { label: 'Studi kelayakan awal', value: 'Studi kelayakan awal' },
      { label: 'Desain & perencanaan awal', value: 'Desain & perencanaan awal' }
    ]
  },
  'Perawatan & perbaikan': {
    key: 'focus',
    question: 'Area apa yang perlu segera ditangani?',
    hint: 'Penanganan cepat mencegah kerusakan meluas',
    options: [
      { label: 'Kebocoran / kelembapan', value: 'Kebocoran / kelembapan' },
      { label: 'Dinding / lantai / plafon', value: 'Dinding / lantai / plafon' },
      { label: 'Penggantian material', value: 'Penggantian material' },
      { label: 'Lainnya', value: 'Lainnya' }
    ]
  }
}

const budget: Step = {
  key: 'budget',
  question: 'Berapa perkiraan budget proyek?',
  hint: 'Estimasi kasar saja — untuk menyusun RAB yang sesuai',
  options: [
    { label: 'Kurang dari Rp 25 juta', value: 'Kurang dari Rp 25 juta' },
    { label: 'Rp 25 – 100 juta', value: 'Rp 25 – 100 juta' },
    { label: 'Rp 100 – 500 juta', value: 'Rp 100 – 500 juta' },
    { label: 'Lebih dari Rp 500 juta', value: 'Lebih dari Rp 500 juta' },
    { label: 'Belum tahu — butuh estimasi', value: 'Belum tahu — butuh estimasi' }
  ]
}

const timeline: Step = {
  key: 'timeline',
  question: 'Kapan Anda ingin mulai?',
  hint: 'Kami menyesuaikan jadwal eksekusi',
  options: [
    { label: 'Segera (minggu ini)', value: 'Segera (minggu ini)' },
    { label: '1–3 bulan ke depan', value: '1–3 bulan ke depan' },
    { label: '3–6 bulan ke depan', value: '3–6 bulan ke depan' },
    { label: 'Masih survei & membandingkan', value: 'Masih survei & membandingkan' }
  ]
}

// Alur dinamis: langkah “detail” dilewati bila klien masih bingung
const flow = computed<Step[]>(() => {
  const steps: Step[] = [need]
  if (answers.need && answers.need !== BINGUNG) {
    const f = focusByNeed[answers.need]
    if (f) steps.push(f)
  }
  steps.push(budget, timeline)
  return steps
})

const answers = reactive<Record<string, string>>({})
const name = ref('')
const note = ref('')
const current = ref(0)
const ready = ref(false)
const sent = ref(false)

const currentStep = computed<Step>(() => flow.value[current.value]!)
const progress = computed(() => ((current.value + 1) / flow.value.length) * 100)
const focusLabel = computed(() => {
  switch (answers.need) {
    case 'Renovasi interior (ruang & finishing)':
      return 'Area yang dirombak'
    case 'Renovasi MEP (listrik, plumbing, AC)':
      return 'Prioritas MEP'
    case 'Bangun baru / konstruksi gedung':
      return 'Jenis bangunan'
    case 'Konsultasi & perencanaan (RAB / BoQ)':
      return 'Fokus konsultasi'
    case 'Perawatan & perbaikan':
      return 'Area perbaikan'
    default:
      return 'Detail'
  }
})

const recap = computed(() => {
  const rows = [
    { label: 'Kebutuhan', value: answers.need },
    ...(answers.focus ? [{ label: focusLabel.value, value: answers.focus }] : []),
    { label: 'Estimasi budget', value: answers.budget },
    { label: 'Timeline', value: answers.timeline }
  ]
  return rows.filter(r => r.value)
})

const waMessage = computed(() => {
  const lines = recap.value.map(r => `• ${r.label}: ${r.value}`)
  if (name.value.trim()) lines.push(`• Nama: ${name.value.trim()}`)
  if (note.value.trim()) lines.push(`• Catatan: ${note.value.trim()}`)
  return ['Halo Arsinata! Saya ingin konsultasi proyek.', '', ...lines, '', 'Mohon info lebih lanjut. Terima kasih.'].join('\n')
})

function select(opt: Opt) {
  answers[currentStep.value.key] = opt.value
  if (current.value < flow.value.length - 1) {
    current.value++
  } else {
    ready.value = true
  }
}

function back() {
  if (ready.value) {
    ready.value = false
  } else if (current.value > 0) {
    current.value--
  }
}

function restart() {
  current.value = 0
  ready.value = false
  sent.value = false
  name.value = ''
  note.value = ''
  answers.need = ''
  answers.focus = ''
  answers.budget = ''
  answers.timeline = ''
}

function sendWhatsApp() {
  window.open(waLink(waMessage.value), '_blank', 'noopener')
  sent.value = true
}

const questionEl = ref<HTMLElement | null>(null)
function focusQuestion() {
  if (!ready.value) {
    nextTick(() => questionEl.value?.focus())
  }
}
</script>

<template>
  <div class="w-full border border-ink/10 border-t-4 border-t-ink bg-white p-6 sm:p-8">
    <!-- Header -->
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="grid size-11 shrink-0 place-items-center rounded-tick bg-ink text-white">
          <UIcon
            name="i-simple-icons-whatsapp"
            class="size-5"
          />
        </span>
        <div>
          <p class="font-display text-xl tracking-tight text-ink">
            Survey Kebutuhan Konsultasi
          </p>
          <p class="text-xs font-semibold text-ink/60">
            ± 30 detik · hasil langsung ke WhatsApp
          </p>
        </div>
      </div>
      <span
        class="rounded-tick bg-stone-100 px-3 py-1 text-xs font-extrabold text-stone-700"
        aria-live="polite"
      >
        {{ ready ? 'Selesai' : `${current + 1}/${flow.length}` }}
      </span>
    </div>

    <!-- Progress -->
    <div
      v-if="!ready"
      class="mt-5 h-1.5 bg-ink/8"
    >
      <div
        class="h-full bg-stone-500 transition-all duration-500"
        :style="{ width: `${progress}%` }"
      />
    </div>

    <!-- Pertanyaan -->
    <div
      v-if="!ready"
      class="mt-6"
    >
      <Transition
        name="fade"
        mode="out-in"
        @after-leave="focusQuestion"
      >
        <div :key="currentStep.key">
          <h3
            ref="questionEl"
            tabindex="-1"
            class="font-display text-xl tracking-tight text-ink"
          >
            {{ currentStep.question }}
          </h3>
          <p class="mt-1 text-xs font-semibold text-ink/60">
            {{ currentStep.hint }}
          </p>

          <div
            class="mt-5 grid gap-2.5"
            :class="currentStep.options.length > 5 ? '' : 'sm:grid-cols-2'"
          >
            <button
              v-for="option in currentStep.options"
              :key="option.value"
              type="button"
              class="group flex items-center justify-between gap-3 rounded-tick border border-ink/10 bg-white px-4 py-3.5 text-left text-sm font-semibold text-ink/75 transition hover:border-stone-400 hover:bg-stone-50"
              @click="select(option)"
            >
              {{ option.label }}
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 shrink-0 text-ink/30 transition group-hover:translate-x-0.5 group-hover:text-stone-700"
              />
            </button>
          </div>

          <button
            v-if="current > 0 || ready"
            type="button"
            class="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink/60 transition hover:text-ink"
            @click="back"
          >
            <UIcon
              name="i-lucide-arrow-left"
              class="size-4"
            />
            Kembali
          </button>
        </div>
      </Transition>
    </div>

    <!-- Ringkasan & kirim -->
    <div
      v-else
      class="mt-6"
    >
      <span class="grid size-12 place-items-center rounded-tick bg-stone-100 text-stone-800">
        <UIcon
          name="i-lucide-check"
          class="size-6"
        />
      </span>
      <h3 class="mt-4 font-display text-xl tracking-tight text-ink">
        Terima kasih! Ringkasan kebutuhan Anda:
      </h3>

      <ul class="mt-5 space-y-2">
        <li
          v-for="r in recap"
          :key="r.label"
          class="flex items-center justify-between gap-4 rounded-tick border border-ink/8 bg-stone-50/60 px-4 py-2.5"
        >
          <span class="text-xs font-bold uppercase tracking-wider text-ink/60">{{ r.label }}</span>
          <span class="text-right text-sm font-bold text-ink">{{ r.value }}</span>
        </li>
      </ul>

      <div class="mt-4">
        <label
          for="survey-name"
          class="text-xs font-bold uppercase tracking-wider text-ink/60"
        >
          Nama Anda <span class="font-semibold normal-case tracking-normal text-ink/60">(opsional)</span>
        </label>
        <input
          id="survey-name"
          v-model="name"
          type="text"
          autocomplete="name"
          placeholder="cth: Budi Santoso"
          class="mt-1.5 w-full rounded-tick border border-ink/10 px-4 py-3 text-sm font-semibold text-ink outline-none transition caret-stone-700 placeholder:font-normal placeholder:text-ink/55 focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
        >
      </div>

      <div class="mt-4">
        <label
          for="survey-note"
          class="text-xs font-bold uppercase tracking-wider text-ink/60"
        >
          Catatan tambahan <span class="font-semibold normal-case tracking-normal text-ink/60">(opsional)</span>
        </label>
        <textarea
          id="survey-note"
          v-model="note"
          rows="2"
          placeholder="Lokasi, estimasi luas, atau detail lain yang ingin Anda sampaikan…"
          class="mt-1.5 w-full resize-none rounded-tick border border-ink/10 px-4 py-3 text-sm font-semibold text-ink outline-none transition placeholder:font-normal placeholder:text-ink/55 focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
        />
      </div>

      <button
        type="button"
        class="btn-solid mt-5 w-full px-6 py-4 text-base"
        @click="sendWhatsApp"
      >
        <UIcon
          name="i-simple-icons-whatsapp"
          class="size-5"
        />
        {{ sent ? 'Buka WhatsApp Lagi' : 'Kirim ke WhatsApp' }}
      </button>

      <p class="mt-3 text-center text-xs text-ink/60">
        <span v-if="!sent">
          Tim kami fast response — biasanya membalas dalam hitungan menit pada jam kerja.
        </span>
        <span v-else>
          WhatsApp telah dibuka dengan ringkasan Anda. Kirim pesannya dan tim kami akan segera membalas.
        </span>
      </p>

      <div class="mt-4 flex items-center justify-center gap-4 text-xs font-bold">
        <button
          type="button"
          class="text-ink/60 transition hover:text-ink"
          @click="back"
        >
          Ubah Jawaban
        </button>
        <span class="text-ink/20">·</span>
        <button
          type="button"
          class="text-ink/60 transition hover:text-ink"
          @click="restart"
        >
          Ulangi Survey
        </button>
      </div>
    </div>

    <!-- Aksi WA langsung — hanya pada nomor HP -->
    <div class="mt-6 flex flex-col items-center gap-1.5 border-t border-dashed border-ink/10 pt-6 text-center">
      <p class="text-xs font-semibold text-ink/60">
        Lebih suka langsung? Ketuk nomor WhatsApp di bawah.
      </p>
      <a
        :href="waLink(WA_DEFAULT_TEXT)"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 font-display text-xl tabular-nums text-ink transition hover:text-stone-700"
      >
        <UIcon
          name="i-simple-icons-whatsapp"
          class="size-4.5"
        />
        {{ SITE.phoneDisplay }}
      </a>
    </div>

    <p class="mt-4 border-t border-dashed border-ink/10 pt-4 text-[11px] leading-relaxed text-ink/60">
      Data hanya digunakan untuk membantu kebutuhan proyek Anda via WhatsApp ({{ SITE.phoneDisplay }}). Tanpa spam, tanpa pihak ketiga.
    </p>
  </div>
</template>
