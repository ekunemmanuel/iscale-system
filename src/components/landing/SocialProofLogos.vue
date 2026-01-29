<script setup lang="ts">
import Container from '../ui/Container.vue';

// Placeholder logos - in a real implementation these would be actual client logos
const logos = [
  { name: 'Google Review', text: '7k+ Reviews' },
  { name: 'Forbes', text: 'Featured' },
  { name: 'Inc 5000', text: 'Fastest Growing' },
  { name: 'Entrepreneur', text: 'Top 10' }
];
</script>

<template>
  <div class="border-y border-white/5 bg-white/2">
    <Container class="py-8">
      <div
        class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div v-for="logo in logos" :key="logo.name" class="flex flex-col items-center">
          <span class="text-2xl font-bold font-heading text-white">{{ logo.name }}</span>
          <span class="text-xs text-gray-500 tracking-widest uppercase">{{ logo.text }}</span>
        </div>
      </div>
    </Container>
  </div>
</template>
