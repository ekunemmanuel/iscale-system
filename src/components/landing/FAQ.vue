<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Section from '../ui/Section.vue';
import Container from '../ui/Container.vue';

const faqs = [
    {
        q: "Do you run my ads for me?",
        a: "No. We’re not a marketing agency. We build the systems that allow marketing to scale profitably."
    },
    {
        q: "How much of my time does this take?",
        a: "Less than fixing broken systems yourself. We build. You approve."
    },
    {
        q: "What if it doesn’t work?",
        a: "If we don’t identify and fix a measurable growth constraint, we work for free until we do."
    }
];

const openIndex = ref<number | null>(null);

const toggleFaq = (idx: number) => {
    openIndex.value = openIndex.value === idx ? null : idx;
};

// Animation Logic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const faqSectionRef = ref<any>(null);
const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries?.[0]?.isIntersecting) {
            isVisible.value = true;
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    if (faqSectionRef.value && faqSectionRef.value.$el) {
        observer.observe(faqSectionRef.value.$el);
    }
});
</script>

<template>
    <Section id="faq" ref="faqSectionRef" class="overflow-hidden">
        <Container class="max-w-4xl">
            <h2 class="text-3xl md:text-5xl font-bold text-center mb-12 transform transition-all duration-700 ease-out"
                :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
                Questions That Might Be Bothering You...
            </h2>

            <div class="space-y-4">
                <div v-for="(faq, idx) in faqs" :key="idx"
                    class="border border-white/10 rounded-lg bg-surface/20 overflow-hidden transform transition-all duration-700 ease-out"
                    :class="[
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
                        `delay-${(idx + 1) * 100}`
                    ]">
                    <button @click="toggleFaq(idx)"
                        class="w-full flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-colors text-left focus:outline-none">
                        <span class="font-bold text-lg pr-8">{{ faq.q }}</span>
                        <span class="transform transition-transform duration-300 text-primary text-xl shrink-0"
                            :class="openIndex === idx ? 'rotate-180' : 'rotate-0'">
                            ▼
                        </span>
                    </button>

                    <div class="grid transition-[grid-template-rows] duration-500 ease-out"
                        :class="openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                        <div class="overflow-hidden">
                            <div class="p-6  text-gray-400 leading-relaxed border-t border-white/5">
                                {{ faq.a }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>
