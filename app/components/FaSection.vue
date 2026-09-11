<script setup lang="ts">
import { faqs } from '~/utils/data'

const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="bg-white/60 py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
      <!-- Kiri -->
      <ScrollReveal class="lg:col-span-2">
        <div class="lg:sticky lg:top-28">
          <SectionHeading
            align="left"
            index="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Masih ada pertanyaan lain? Tim kami siap menjawab — cukup hubungi kami via WhatsApp."
          />
          <NuxtLink
            to="#konsultasi"
            class="btn-solid mt-8 px-6 py-3 text-sm"
          >
            Tanya via Survey Konsultasi
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4"
            />
          </NuxtLink>
        </div>
      </ScrollReveal>

      <!-- Kanan: daftar akordeon -->
      <div class="lg:col-span-3">
        <ScrollReveal>
          <div class="divide-y divide-ink/10 border border-ink/10 bg-white px-6 sm:px-8">
            <div
              v-for="(f, i) in faqs"
              :key="f.q"
            >
              <button
                :id="`faq-${i}`"
                type="button"
                class="flex w-full items-center justify-between gap-6 py-5 text-left"
                :aria-expanded="openIndex === i"
                :aria-controls="`faq-panel-${i}`"
                @click="toggle(i)"
              >
                <span class="font-display text-lg tracking-tight text-ink sm:text-xl">
                  {{ f.q }}
                </span>
                <span
                  class="grid size-8 shrink-0 place-items-center rounded-tick border transition duration-300"
                  :class="openIndex === i ? 'rotate-180 border-stone-700 bg-stone-700 text-white' : 'border-ink/15 text-ink/50'"
                >
                  <UIcon
                    name="i-lucide-chevron-down"
                    class="size-4"
                  />
                </span>
              </button>
              <div
                :id="`faq-panel-${i}`"
                class="grid transition-all duration-300 ease-out"
                :class="openIndex === i ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <p class="text-base leading-relaxed text-ink/70">
                    {{ f.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
