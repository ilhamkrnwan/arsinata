<script setup lang="ts">
defineProps<{
  index?: string
  title?: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}>()
</script>

<template>
  <div :class="[align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl']">
    <span
      v-if="index"
      class="spec"
      :class="align === 'center' ? 'justify-center' : ''"
    >
      <span
        class="h-px w-8 shrink-0"
        :class="tone === 'dark' ? 'bg-white/60' : 'bg-ink/40'"
      />
      {{ index }}
    </span>

    <h2
      class="mt-4 font-display text-4xl leading-[1.04] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
      :class="tone === 'dark' ? 'text-canvas' : 'text-ink'"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-6 text-lg leading-relaxed"
      :class="align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'"
    >
      <span :class="tone === 'dark' ? 'text-canvas/70' : 'text-ink/70'">
        {{ description }}
      </span>
    </p>
  </div>
</template>
