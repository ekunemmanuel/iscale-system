<script setup lang="ts">
defineProps<{
  id?: string;
  className?: string; // Additional classes
}>();
</script>

<template>
  <section :id="id" :class="['py-20 md:py-32 relative overflow-hidden', className]">
    <slot />
  </section>
</template>
