<script setup lang="ts">
import Container from '../ui/Container.vue';
import Button from '../ui/Button.vue';
import { ref, onMounted } from 'vue';

defineProps<{ startAnimation?: boolean }>();

const morphIcons = ref(false);

onMounted(() => {
  // Trigger morph loop
  setInterval(() => {
    morphIcons.value = !morphIcons.value;
  }, 3000);
});
</script>

<template>
  <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" :class="{ 'animate-start': startAnimation }">
    <!-- Background Effects -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-10 blur-[100px]">
    </div>

    <Container class="relative z-10 text-center">
      <!-- Tagline -->
      <div
        class="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hero-item"
        style="animation-delay: 0ms">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span class="text-xs font-medium tracking-wide text-gray-300 uppercase">FOR FOUNDERS STUCK BETWEEN
          $20K–$100K/MONTH
        </span>
      </div>

      <!-- Heading - Split into 2 lines for staggering -->
      <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 flex flex-col items-center">
        <span
          class="hero-item text-white flex flex-wrap items-center justify-center transition-all duration-1000 ease-in-out"
          :class="morphIcons ? 'gap-2' : 'gap-px'" style="animation-delay: 150ms">
          <span>Sc</span>
          <!-- 'a' -> Target Icon -->
          <span
            class="relative inline-flex items-center justify-center h-[1em] transition-all duration-1000 ease-in-out"
            :class="morphIcons ? 'w-[1.1em]' : 'w-[0.6em]'">
            <span :class="{ 'opacity-0 scale-50': morphIcons, 'opacity-100 scale-100': !morphIcons }"
              class="absolute transition-all duration-1000 ease-in-out origin-center">a</span>
            <svg :class="{ 'opacity-100 scale-100': morphIcons, 'opacity-0 scale-50': !morphIcons }"
              class="w-full h-full absolute transition-all duration-1000 ease-in-out text-primary origin-center"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </span>
          <!-- 'l' -> Graph Icon -->
          <span
            class="relative inline-flex items-center justify-center h-[1em] transition-all duration-1000 ease-in-out"
            :class="morphIcons ? 'w-[0.8em]' : 'w-[0.3em]'">
            <span :class="{ 'opacity-0 scale-50': morphIcons, 'opacity-100 scale-100': !morphIcons }"
              class="absolute transition-all duration-1000 ease-in-out origin-center">l</span>
            <svg :class="{ 'opacity-100 scale-100': morphIcons, 'opacity-0 scale-50': !morphIcons }"
              class="w-full h-full absolute transition-all duration-1000 ease-in-out text-primary origin-center"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </span>
          <span>e </span>
          <span>$100k+/Month.</span>
        </span>
        <span class="hero-item text-white" style="animation-delay: 300ms">
          With <span class="text-primary">Predictability.</span>
        </span>
      </h1>

      <!-- Subheading -->
      <p class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 hero-item" style="animation-delay: 450ms">
        Install the iScale System. The exact infrastructure our clients use to scale to $100k+/month without burning
        out.
        <br class="hidden md:block" />
        <span class="block mt-4 text-white font-medium">No coaching. Just hands-on installation.</span>
      </p>

      <!-- CTA -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 hero-item" style="animation-delay: 600ms">
        <Button href="https://link.mercanovus.com/widget/booking/x8Vg2MfJkin737a2nIYm" variant="primary"
          class="w-full md:w-auto shadow-lg shadow-primary/20">
          ⚡ Apply for a System Installation
        </Button>
      </div>

      <!-- Guarantee/Trust -->
      <p class="mt-6 text-sm text-gray-500 hero-item" style="animation-delay: 750ms">
        100% No B.S. Guarantee. We reject more founders than we accept.
      </p>
    </Container>
  </section>
</template>

<style scoped>
/* Initial state: Hidden and moved down */
.hero-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* When parent has .animate-start, trigger animations */
.animate-start .hero-item {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
