<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Section from '../ui/Section.vue';
import Container from '../ui/Container.vue';
import Card from '../ui/Card.vue';

const forYou = [
  "You’re Already Winning: You’re consistently doing $20k–$100k/month.",
  "You Are the Bottleneck: Sales, delivery, approvals, decisions all run through you.",
  "You Want a Business — Not a Job: You want to operate as the owner, not the firefighter."
];

const notForYou = [
  "You’re Early: You’re under $20k/month or still validating your offer.",
  "You’re Chasing Shortcuts: You want scripts, hacks, or “the next funnel”.",
  "You Need Control to Feel Important: You don’t trust processes or people."
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const filterSectionRef = ref<any>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries?.[0]?.isIntersecting) {
      isVisible.value = true;
      observer.disconnect();
    }
  }, { threshold: 0.2 });

  if (filterSectionRef.value && filterSectionRef.value.$el) {
    observer.observe(filterSectionRef.value.$el);
  }
});
</script>

<template>
  <!-- Remove global v-fade-in to use custom directional animations -->
  <Section id="who-this-is-for" class="bg-surface/30 overflow-hidden" ref="filterSectionRef">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 transform transition-all duration-700 ease-out"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          This Is Not Advice. This Is Infrastructure.
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto transform transition-all duration-700 ease-out delay-100"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          We are very selective. We only work with a few founders each quarter to ensure results.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 perspectives-container">
        <!-- For You - Comes from LEFT, Tilted Left -->
        <div class="transform transition-all duration-1000 ease-out"
          :class="[isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[100px] opacity-0']">
          <Card
            class="border-green-500/20 bg-green-500/5 hover:border-green-500/40 -rotate-2 hover:rotate-0 transition-transform duration-500 origin-bottom-right shadow-2xl">
            <h3 class="text-2xl font-bold text-green-400 mb-8 border-b border-green-500/20 pb-4">
              This IS for you if...
            </h3>
            <ul class="space-y-4">
              <li v-for="(item, idx) in forYou" :key="idx" class="flex items-start gap-3">
                <span class="mt-1 shrink-0 text-green-400">✔️</span>
                <span class="text-gray-200">{{ item }}</span>
              </li>
            </ul>
          </Card>
        </div>

        <!-- Not For You - Comes from RIGHT, Tilted Right -->
        <div class="transform transition-all duration-1000 ease-out delay-200"
          :class="[isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0']">
          <Card
            class="border-red-500/20 bg-red-500/5 hover:border-red-500/40 rotate-2 hover:rotate-0 transition-transform duration-500 origin-bottom-left shadow-2xl opacity-90">
            <h3 class="text-2xl font-bold text-red-400 mb-8 border-b border-red-500/20 pb-4">
              This is NOT for you if...
            </h3>
            <ul class="space-y-4">
              <li v-for="(item, idx) in notForYou" :key="idx" class="flex items-start gap-3">
                <span class="mt-1 shrink-0 text-red-400">❌</span>
                <span class="text-gray-400">{{ item }}</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </Container>
  </Section>
</template>
