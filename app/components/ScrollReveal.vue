<script setup lang="ts">
const props = defineProps<{
  delay?: number
}>()

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.12 }
  )
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-700 ease-out will-change-transform"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
    :style="props.delay ? { transitionDelay: `${props.delay}ms` } : undefined"
  >
    <slot />
  </div>
</template>
