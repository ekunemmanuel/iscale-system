<script setup lang="ts">
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import Preloader from './components/ui/Preloader.vue';
import FloatingNav from './components/layout/FloatingNav.vue';
import Hero from './components/landing/Hero.vue';

import SocialProofLogos from './components/landing/SocialProofLogos.vue';
import FilterSection from './components/landing/FilterSection.vue';
import ProblemSection from './components/landing/ProblemSection.vue';
import FounderStory from './components/landing/FounderStory.vue';
import ProcessSection from './components/landing/ProcessSection.vue';
import Testimonials from './components/landing/Testimonials.vue';
import FAQ from './components/landing/FAQ.vue';
import Footer from './components/landing/Footer.vue';

const isLoaded = ref(false);

const handlePreloaderComplete = () => {
  isLoaded.value = true;
};
</script>

<template>
  <main class="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
    <Preloader @complete="handlePreloaderComplete" />
    <FloatingNav />
    <Hero :start-animation="isLoaded" />
    <SocialProofLogos />
    <FilterSection />
    <ProblemSection />
    <FounderStory />
    <ProcessSection />
    <Testimonials />
    <FAQ />
    <Footer />
  </main>
</template>
