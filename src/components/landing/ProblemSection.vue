<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Section from '../ui/Section.vue';
import Container from '../ui/Container.vue';
import Card from '../ui/Card.vue';

const problems = [
    {
        number: "1",
        title: "The Founder Trap",
        description: "You’re still the best closer, the best operator, the final decision-maker. Every new client adds stress instead of leverage.",
        rotation: '-rotate-1',
        offset: 'translate-y-0'
    },
    {
        number: "2",
        title: "The Revenue Rollercoaster",
        description: "You sprint for leads → get overwhelmed → disappear → repeat. Inconsistent cash flow, reactive decisions.",
        rotation: 'rotate-1',
        offset: 'md:translate-y-8'
    },
    {
        number: "3",
        title: "The Talent Breakdown",
        description: "You hire people, but they need constant correction. You stop delegating. You stop trusting. You stay stuck in ops.",
        rotation: '-rotate-2',
        offset: 'md:translate-y-4'
    },
    {
        number: "4",
        title: "The Profit Illusion",
        description: "Revenue goes up. Profit doesn’t. More work. Same take-home. Less freedom.",
        rotation: 'rotate-2',
        offset: 'md:translate-y-12'
    }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const problemSectionRef = ref<any>(null);
const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries?.[0]?.isIntersecting) {
            isVisible.value = true;
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    if (problemSectionRef.value && problemSectionRef.value.$el) {
        observer.observe(problemSectionRef.value.$el);
    }
});
</script>

<template>
    <Section id="problems" ref="problemSectionRef" class="overflow-hidden">
        <Container>
            <div class="text-center mb-16">
                <span
                    class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block transform transition-all duration-700 ease-out"
                    :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                    The Brutal Truth
                </span>
                <h2 class="text-3xl md:text-5xl font-bold mb-6 transform transition-all duration-700 ease-out delay-100"
                    :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                    Why Most Agencies Stall at $50k/Month
                </h2>
                <p class="text-gray-400 max-w-3xl mx-auto transform transition-all duration-700 ease-out delay-200"
                    :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                    It’s not a leads problem. It’s what happens when growth outpaces structure. Growth introduces
                    complexity. Without systems, complexity destroys momentum.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 perspectives-container pb-12">
                <div v-for="(problem, idx) in problems" :key="idx"
                    class="transform transition-all duration-700 ease-out" :class="[
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
                        `delay-${(idx + 3) * 100}`
                    ]">
                    <Card
                        class="h-full hover:rotate-0 hover:translate-y-0 transition-transform duration-500 origin-center shadow-lg hover:shadow-2xl border-red-500/20 bg-red-500/5 hover:border-red-500/40 p-8"
                        :class="[problem.rotation, problem.offset]">
                        <div
                            class="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-2xl mb-6">
                            {{ problem.number }}
                        </div>
                        <h3 class="text-xl font-bold mb-3">{{ problem.title }}</h3>
                        <p class="text-gray-400 leading-relaxed">{{ problem.description }}</p>
                    </Card>
                </div>
            </div>
            <div class="text-center mt-12 transform transition-all duration-700 ease-out delay-500"
                :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                <p class="text-xl md:text-2xl font-bold text-white">More effort won’t fix this. Only systems will.</p>
            </div>
        </Container>
    </Section>
</template>
