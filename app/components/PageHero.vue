<script setup lang="ts">
import { SITE } from '~/utils/site'

defineProps<{
  title?: string
  description?: string
  breadcrumb?: { label: string, to?: string }[]
}>()
</script>

<template>
  <section class="relative overflow-hidden border-b border-ink/8">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-32 -top-36 aspect-square w-80 rounded-full bg-stone-100/70 blur-3xl"
    />

    <div class="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
      <nav
        v-if="breadcrumb?.length"
        class="mb-8 flex items-center gap-2 text-sm text-ink/70"
      >
        <template
          v-for="(item, i) in breadcrumb"
          :key="i"
        >
          <NuxtLink
            v-if="item.to"
            :to="item.to"
            class="transition hover:text-stone-800"
          >{{ item.label }}</NuxtLink>
          <span
            v-else
            class="text-ink/75"
          >{{ item.label }}</span>
          <span
            v-if="i < breadcrumb.length - 1"
            class="text-ink/45"
          >/</span>
        </template>
      </nav>

      <div class="max-w-3xl">
        <h1 class="font-display text-4xl leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70"
        >
          {{ description }}
        </p>
        <p class="mt-6 font-semibold text-stone-600">
          <span class="spec">
            <span class="h-px w-8 shrink-0 bg-ink/40" />
            {{ SITE.company }} · Sleman, Yogyakarta
          </span>
        </p>
      </div>
    </div>
  </section>
</template>
