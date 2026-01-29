<script setup lang="ts">
defineProps<{
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  isFull?: boolean;
}>();
</script>

<template>
  <a 
    v-if="href"
    :href="href"
    :class="[
      'inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-bold transition-all duration-300 uppercase tracking-wide',
      variant === 'primary' || !variant ? 'bg-primary text-black hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]' : '',
      variant === 'outline' ? 'border-2 border-primary text-primary hover:bg-primary/10' : '',
      isFull ? 'w-full' : '',
      className
    ]"
  >
    <slot />
  </a>
  <button 
    v-else
    :class="[
      'inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-bold transition-all duration-300 uppercase tracking-wide cursor-pointer',
      variant === 'primary' || !variant ? 'bg-primary text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]' : '',
      variant === 'outline' ? 'border-2 border-primary text-primary hover:bg-primary/10' : '',
      isFull ? 'w-full' : '',
      className
    ]"
  >
    <slot />
  </button>
</template>
