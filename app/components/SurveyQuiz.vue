<script setup lang="ts">
import { SITE, waLink, WA_DEFAULT_TEXT } from '~/utils/site'

interface QuizOption {
  label: string
  value: string
}

interface QuizStep {
  id: 'need' | 'property' | 'budget' | 'timeline'
  question: string
  hint: string
  options: QuizOption[]
}

const steps: QuizStep[] = [
  {
    id: 'need',
    question: 'Apa kebutuhan utama Anda?',
    hint: 'Pilih salah satu yang paling mendekati',
    options: [
      { label: 'Renovasi fasilitas (interior & finishing)', value: 'Renovasi fasilitas (interior & finishing)' },
      { label: 'Renovasi MEP (listrik, plumbing, AC)', value: 'Renovasi MEP (listrik, plumbing, AC)' },
      { label: 'Bangun baru / konstruksi gedung', value: 'Bangun baru / konstruksi gedung' },
      { label: 'Desain & perencanaan (RAB / BoQ)', value: 'Desain & perencanaan (RAB / BoQ)' },
      { label: 'Perawatan & perbaikan', value: 'Perawatan & perbaikan' },
      { label: 'Masih bingung — mau konsultasi dulu', value: 'Masih bingung — mau konsultasi dulu' }
    ]
  },
  {
    id: 'property',
    question: 'Jenis properti apa yang akan dikerjakan?',
    hint: 'Ini membantu kami menyiapkan tim yang sesuai',
    options: [
      { label: 'Rumah tinggal / ruko', value: 'Rumah tinggal / ruko' },
      { label: 'Kantor / perkantoran', value: 'Kantor / perkantoran' },
      { label: 'Sekolah / fasilitas pendidikan', value: 'Sekolah / fasilitas pendidikan' },
      { label: 'Gudang / logistik', value: 'Gudang / logistik' },
      { label: 'Fasilitas pemerintah / institusi', value: 'Fasilitas pemerintah / institusi' },
      { label: 'Lainnya', value: 'Lainnya' }
    ]
  },
  {
    id: 'budget',
    question: 'Berapa perkiraan budget proyek?',
    hint: 'Jangan khawatir — estimasi kasar saja, untuk menyusun RAB',
    options: [
      { label: 'Kurang dari Rp 25 juta', value: 'Kurang dari Rp 25 juta' },
      { label: 'Rp 25 – 100 juta', value: 'Rp 25 – 100 juta' },
      { label: 'Rp 100 – 500 juta', value: 'Rp 100 – 500 juta' },
      { label: 'Lebih dari Rp 500 juta', value: 'Lebih dari Rp 500 juta' },
      { label: 'Belum tahu — butuh estimasi', value: 'Belum tahu — butuh estimasi' }
    ]
  },
  {
    id: 'timeline',
    question: 'Kapan Anda ingin mulai?',
    hint: 'Kami akan menyesuaikan jadwal eksekusi',
    options: [
      { label: 'Segera (minggu ini)', value: 'Segera (minggu ini)' },
      { label: '1–3 bulan ke depan', value: '1–3 bulan ke depan' },
      { label: '3–6 bulan ke depan', value: '3–6 bulan ke depan' },
      { label: 'Masih survei & membandingkan', value: 'Masih survei & membandingkan' }
    ]
  }
]

const current = ref(0)
const answers = reactive<Record<QuizStep['id'], string>>({
  need: '',
  property: '',
  budget: '',
  timeline: ''
})
const name = ref('')
const ready = ref(false)
const sent = ref(false)

const total = steps.length
const progress = computed(() => ((current.value + 1) / total) * 100)
const currentStep = computed<QuizStep>(() => steps[current.value]!)

function select(option: QuizOption) {
  answers[currentStep.value.id] = option.value
  if (current.value < total - 1) {
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
  answers.need = ''
  answers.property = ''
  answers.budget = ''
  answers.timeline = ''
}

const recap = computed(() =>
  [
    { label: 'Kebutuhan', value: answers.need },
    { label: 'Jenis properti', value: answers.property },
    { label: 'Estimasi budget', value: answers.budget },
    { label: 'Timeline', value: answers.timeline }
  ]
)

const waMessage = computed(() => {
  const lines = recap.value.map(r => `• ${r.label}: ${r.value}`)
  if (name.value.trim()) lines.push(`• Nama: ${name.value.trim()}`)
  return [
    'Halo Arsinata! Saya ingin konsultasi proyek.',
    '',
    ...lines,
    '',
    'Mohon info lebih lanjut. Terima kasih.'
  ].join('\n')
})

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
  <div class="w-full border border-ink/10 border-t-4 border-t-ink bg-white p-6 sm:p-8 lg:p-10">
    <!-- Masthead -->
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-3.5">
        <span class="grid size-11 shrink-0 place-items-center rounded-tick bg-ink text-white">
          <UIcon
            name="i-simple-icons-whatsapp"
            class="size-5"
          />
        </span>
        <div>
          <p class="font-display text-lg leading-tight tracking-tight text-ink sm:text-xl">
            Survey Konsultasi Cepat
          </p>
          <p class="mt-0.5 text-xs font-semibold text-ink/60">
            ± 30 detik · ringkasan langsung terkirim ke WhatsApp
          </p>
        </div>
      </div>
      <span
        class="spec text-ink/55"
        aria-live="polite"
      >
        <span class="h-px w-6 bg-ink/40" />
        {{ ready ? 'Selesai' : `${String(current + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}` }}
      </span>
    </div>

    <!-- Progress -->
    <div
      v-if="!ready"
      class="mt-6 h-1 bg-ink/8"
    >
      <div
        class="h-full bg-ink transition-all duration-500"
        :style="{ width: `${progress}%` }"
      />
    </div>

    <!-- Pertanyaan -->
    <div
      v-if="!ready"
      class="mt-8"
    >
      <transition
        name="fade"
        mode="out-in"
        @after-leave="focusQuestion"
      >
        <div :key="currentStep.id">
          <h3
            ref="questionEl"
            tabindex="-1"
            class="font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl"
          >
            {{ currentStep.question }}
          </h3>
          <p class="mt-2 text-sm font-semibold text-ink/60">
            {{ currentStep.hint }}
          </p>

          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              v-for="(option, i) in currentStep.options"
              :key="option.value"
              type="button"
              class="group flex items-center gap-4 rounded-tick border border-ink/10 bg-white px-5 py-4 text-left text-base font-semibold text-ink/75 transition hover:border-ink/40 hover:bg-stone-50"
              @click="select(option)"
            >
              <span
                class="font-display text-sm tabular-nums text-stone-400 transition group-hover:text-stone-700"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="flex-1">{{ option.label }}</span>
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 shrink-0 text-ink/30 transition group-hover:translate-x-0.5 group-hover:text-stone-700"
              />
            </button>
          </div>

          <button
            v-if="current > 0 || ready"
            type="button"
            class="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink/60 transition hover:text-ink"
            @click="back"
          >
            <UIcon
              name="i-lucide-arrow-left"
              class="size-4"
            />
            Kembali
          </button>
        </div>
      </transition>
    </div>

    <!-- Ringkasan & kirim -->
    <div
      v-else
      class="mt-8"
    >
      <div class="flex items-center gap-4">
        <span class="grid size-12 shrink-0 place-items-center rounded-tick bg-ink text-white">
          <UIcon
            name="i-lucide-check"
            class="size-6"
          />
        </span>
        <h3 class="font-display text-2xl tracking-tight text-ink">
          Terima kasih! Ringkasan kebutuhan Anda:
        </h3>
      </div>

      <ul class="mt-6 space-y-2.5">
        <li
          v-for="r in recap"
          :key="r.label"
          class="flex items-center justify-between gap-4 rounded-tick border border-ink/8 bg-stone-50/60 px-4 py-3"
        >
          <span class="text-xs font-bold uppercase tracking-wider text-ink/60">{{ r.label }}</span>
          <span class="text-right text-sm font-bold text-ink">{{ r.value }}</span>
        </li>
      </ul>

      <div class="mt-6">
        <label
          for="quiz-name"
          class="text-xs font-bold uppercase tracking-wider text-ink/60"
        >
          Nama Anda <span class="font-semibold normal-case tracking-normal text-ink/60">(opsional)</span>
        </label>
        <input
          id="quiz-name"
          v-model="name"
          type="text"
          autocomplete="name"
          placeholder="cth: Budi Santoso"
          class="mt-1.5 w-full rounded-tick border border-ink/10 px-4 py-3 text-sm font-semibold text-ink outline-none transition caret-stone-700 placeholder:font-normal placeholder:text-ink/55 focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
        >
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
    <div class="mt-8 flex flex-col items-center gap-1.5 border-t border-dashed border-ink/10 pt-6 text-center">
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

    <p class="mt-4 text-[11px] leading-relaxed text-ink/60">
      Data hanya digunakan untuk membantu kebutuhan proyek Anda via WhatsApp ({{ SITE.phoneDisplay }}). Tanpa spam, tanpa pihak ketiga.
    </p>
  </div>
</template>
