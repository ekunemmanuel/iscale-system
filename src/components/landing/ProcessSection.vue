<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Section from '../ui/Section.vue';
import Container from '../ui/Container.vue';

const steps = [
    {
        number: "01",
        title: "The Diagnostic (Find the Leak)",
        description: "We dissect your business end-to-end: Sales, Delivery, Operations. We identify the exact constraint limiting growth. No opinions. No guessing. Just data."
    },
    {
        number: "02",
        title: "Infrastructure Build (Create the Second Brain)",
        description: "We design and install specific playbooks for onboarding, delivery, and reporting. Your business stops living in your head and starts running on code."
    },
    {
        number: "03",
        title: "The Growth Engine (Make It Predictable)",
        description: "We implement acquisition systems that bring qualified leads consistently and protect your margins. Growth without chaos."
    },
    {
        number: "04",
        title: "The Handover (Remove You)",
        description: "We train your Ops Lead or Sales Manager to run the system. You transition from Operator → Owner. The business works — whether you’re present or not."
    }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processSectionRef = ref<any>(null);
const lineHeight = ref(0);
const cardScales = ref<number[]>(new Array(steps.length).fill(0.8));
const activeStep = ref(-1);
const isVisible = ref(false);

const handleScroll = () => {
    if (!processSectionRef.value || !processSectionRef.value.$el) return;

    const rect = processSectionRef.value.$el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Line Fill Logic:
    const viewportCenter = windowHeight / 2;
    const sectionStart = rect.top;
    const sectionHeight = rect.height;

    const scrollDist = viewportCenter - sectionStart;
    const rawProgress = scrollDist / (sectionHeight * 0.9);
    lineHeight.value = Math.max(0, Math.min(100, rawProgress * 100));

    // Card Scale & Active State Logic
    const cardElements = processSectionRef.value.$el.querySelectorAll('.process-card-container');
    cardElements.forEach((el: Element, index: number) => {
        const cardRect = el.getBoundingClientRect();
        const cardEnterPoint = windowHeight * 0.9;
        const cardFullScalePoint = windowHeight * 0.4;

        const scaleRange = cardEnterPoint - cardFullScalePoint;
        const distFromEnter = cardEnterPoint - cardRect.top;

        const scaleProgress = Math.max(0, Math.min(1, distFromEnter / scaleRange));

        cardScales.value[index] = 0.8 + (0.2 * scaleProgress);

        if (lineHeight.value > (index / steps.length * 100)) {
            if (activeStep.value < index) activeStep.value = index;
        } else {
            if (activeStep.value >= index) activeStep.value = index - 1;
        }
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Entrance Animation Observer
    const observer = new IntersectionObserver((entries) => {
        if (entries?.[0]?.isIntersecting) {
            isVisible.value = true;
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    if (processSectionRef.value && processSectionRef.value.$el) {
        observer.observe(processSectionRef.value.$el);
    }
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <Section id="process" ref="processSectionRef" class="overflow-hidden">
        <Container>
            <div class="text-center mb-16">
                <span
                    class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block transform transition-all duration-700 ease-out"
                    :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                    We Don’t Give Advice. We Build.
                </span>
                <h2 class="text-3xl md:text-5xl font-bold mb-6 transform transition-all duration-700 ease-out delay-100"
                    :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                    We Don’t Give Advice. We Build the Machine.
                </h2>
                <p class="text-gray-400 max-w-2xl mx-auto transform transition-all duration-700 ease-out delay-200"
                    :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                    HANDS-ON INSTALLATION
                </p>
            </div>

            <div class="relative">
                <!-- Connector Line (Desktop) -->
                <!-- Base Gray -->
                <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2"></div>
                <!-- Active Blue Fill -->
                <div class="hidden md:block absolute left-1/2 top-0 w-1 bg-primary -translate-x-1/2 shadow-[0_0_15px_var(--color-primary)] transition-none will-change-[height]"
                    :style="{ height: `${lineHeight}%` }"></div>

                <div v-for="(step, idx) in steps" :key="idx"
                    class="process-card-container flex flex-col md:flex-row items-center gap-8 mb-16 relative"
                    :class="[idx % 2 === 0 ? '' : 'md:flex-row-reverse']">

                    <!-- Number Content (Cards from Left) -->
                    <div class="flex-1 w-full md:w-1/2 text-center md:text-right"
                        :class="idx % 2 === 0 ? 'md:text-right' : 'md:text-left'">
                        <!-- Wrapper for Entrance Animation -->
                        <div class="transform transition-all duration-1000 ease-out" :class="[
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0',
                            `delay-${(idx + 1) * 100}`
                        ]">
                            <div class="p-8 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/50 transition-all duration-100 ease-out origin-center"
                                :style="{ transform: `scale(${cardScales[idx] || 0.8})`, opacity: Math.max(0.4, cardScales[idx] || 0.8) }">

                                <h3 class="text-xl font-bold text-white mb-2 relative z-10">{{ step.title }}</h3>
                                <p class="text-gray-400 relative z-10">{{ step.description }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Center Point (Numbers from Right) -->
                    <!-- Wrapper for Entrance Animation -->
                    <div
                        class="relative z-10 w-12 h-12 flex items-center justify-center transform transition-all duration-1000 ease-out">
                        <div class="w-full h-full rounded-full bg-surface border-4 transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                            :class="[lineHeight > ((idx / steps.length) * 100) + 5 ? 'border-primary bg-primary text-black scale-110' : 'border-white/10 text-white/50']">
                            <span class="font-bold">{{ step.number }}</span>
                        </div>
                    </div>

                    <span class="text-6xl font-black text-white/5 absolute top-4"
                        :class="idx % 2 === 0 ? 'right-8' : 'left-8'">{{ step.number }}</span>

                    <!-- Empty Space for Grid Balance -->
                    <div class="flex-1 w-full md:w-1/2"></div>
                </div>
            </div>
        </Container>
    </Section>
</template>
