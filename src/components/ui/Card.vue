<script setup lang="ts">
defineProps<{
  className?: string;
}>();
</script>

<template>
  <div 
    :class="[
      'bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300',
      className
    ]"
  >
    <slot />
  </div>
</template>
