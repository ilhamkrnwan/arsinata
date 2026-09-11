<script setup lang="ts">
const route = useRoute()
const open = ref(false)

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Layanan', to: '/services' },
  { label: 'Portofolio', to: '/portfolio' },
  { label: 'Tentang', to: '/about' },
  { label: 'Kontak', to: '/contact' }
]

watch(
  () => route.fullPath,
  () => {
    open.value = false
  }
)

function isActive(to: string) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

watch(open, (v) => {
  if (v) document.addEventListener('keydown', onKeydown)
  else document.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-ink/8 bg-canvas/85 backdrop-blur">
    <div class="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <AppLogo />

      <nav
        class="hidden items-center gap-1 lg:flex"
        aria-label="Navigasi utama"
      >
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="relative rounded-tick px-4 py-2 text-sm font-semibold transition"
          :class="isActive(l.to) ? 'text-stone-800' : 'text-ink/70 hover:text-ink'"
          :aria-current="isActive(l.to) ? 'page' : undefined"
        >
          {{ l.label }}
          <span
            v-if="isActive(l.to)"
            class="absolute inset-x-4 -bottom-0.5 h-0.5 bg-ink"
            aria-hidden="true"
          />
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="#konsultasi"
          class="btn-solid hidden px-4 py-2 text-sm sm:inline-flex"
        >
          Mulai Konsultasi
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4"
          />
        </a>
        <button
          type="button"
          class="grid size-10 place-items-center rounded-tick border border-ink/10 text-ink transition hover:bg-ink/5 lg:hidden"
          :aria-expanded="open"
          :aria-controls="open ? 'mobile-menu' : undefined"
          :aria-label="open ? 'Tutup menu' : 'Buka menu'"
          @click="open = !open"
        >
          <UIcon
            :name="open ? 'i-lucide-x' : 'i-lucide-menu'"
            class="size-5"
          />
        </button>
      </div>
    </div>

    <!-- Panel mobile -->
    <Transition name="fade">
      <div
        v-if="open"
        id="mobile-menu"
        class="border-t border-ink/8 bg-canvas shadow-ambient-lg lg:hidden"
      >
        <nav
          class="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
          aria-label="Navigasi mobile"
        >
          <NuxtLink
            v-for="l in links"
            :key="l.to"
            :to="l.to"
            class="rounded-tick px-4 py-3 text-sm font-semibold transition"
            :class="isActive(l.to) ? 'border-s-2 border-stone-800 bg-stone-50 text-ink' : 'text-ink/75 hover:bg-ink/5 hover:text-ink'"
            :aria-current="isActive(l.to) ? 'page' : undefined"
          >
            {{ l.label }}
          </NuxtLink>
          <a
            href="#konsultasi"
            class="btn-solid mt-2 px-6 py-3 text-sm"
            @click="open = false"
          >
            Mulai Konsultasi
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4"
            />
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
