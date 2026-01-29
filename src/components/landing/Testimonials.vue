<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Section from '../ui/Section.vue';
import Container from '../ui/Container.vue';
import Card from '../ui/Card.vue';

const testimonials = [
    {
        name: "Reggie H",
        role: "Agency Founder",
        quote: "We broke our all-time revenue record in Month 2 — while I was on vacation.",
        rating: 5.0,
        rotation: '-rotate-2',
        offset: 'translate-y-0'
    },
    {
        name: "Lauren F",
        role: "Program Owner",
        quote: "Revenue stayed the same. Profit doubled. Stress disappeared.",
        rating: 5.0,
        rotation: 'rotate-1',
        offset: 'md:translate-y-8'
    },
    {
        name: "Nadia R",
        role: "Consultant",
        quote: "For the first time, my business runs without me. That alone was worth the investment.",
        rating: 5.0,
        rotation: '-rotate-1',
        offset: 'md:translate-y-4'
    }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testimonialsSectionRef = ref<any>(null);
const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries?.[0]?.isIntersecting) {
            isVisible.value = true;
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    if (testimonialsSectionRef.value && testimonialsSectionRef.value.$el) {
        observer.observe(testimonialsSectionRef.value.$el);
    }
});
</script>

<template>
    <Section id="testimonials" class="bg-surface/30 overflow-hidden" ref="testimonialsSectionRef">
        <Container>
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6 transform transition-all duration-700 ease-out"
                    :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                    Results You Can Measure — And Feel.
                </h2>
                <div class="flex items-center justify-center gap-2 text-yellow-500 transform transition-all duration-700 ease-out delay-100"
                    :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                    <span class="text-lg">★★★★★</span>
                    <span class="text-white font-bold">4.3/5 Average Rating</span>
                    <span class="text-gray-500 text-sm">(7k+ Reviews)</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 perspectives-container pb-12">
                <div v-for="(client, idx) in testimonials" :key="idx"
                    class="transform transition-all duration-700 ease-out" :class="[
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
                        `delay-${(idx + 2) * 100}`
                    ]">
                    <Card
                        className="flex flex-col h-full hover:rotate-0 hover:translate-y-0 transition-transform duration-500 origin-center shadow-lg hover:shadow-2xl border-white/5 bg-surface/80 backdrop-blur-sm"
                        :class="[client.rotation, client.offset]">
                        <div class="flex items-center gap-1 text-yellow-500 mb-4">
                            <span v-for="i in 5" :key="i">★</span>
                        </div>
                        <p class="text-gray-300 italic mb-6 grow">"{{ client.quote }}"</p>
                        <div class="flex items-center gap-4 mt-auto border-t border-white/5 pt-4">
                            <div
                                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                                {{ client.name.charAt(0) }}
                            </div>
                            <div>
                                <p class="font-bold text-white">{{ client.name }}</p>
                                <p class="text-xs text-primary">{{ client.role }}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Container>
    </Section>
</template>
