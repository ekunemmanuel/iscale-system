<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Section from '../ui/Section.vue';
import Container from '../ui/Container.vue';
import Button from '../ui/Button.vue';

// Image handled in template via public path

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const founderSectionRef = ref<any>(null);
const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries?.[0]?.isIntersecting) {
            isVisible.value = true;
            observer.disconnect();
        }
    }, { threshold: 0.2 });

    if (founderSectionRef.value && founderSectionRef.value.$el) {
        observer.observe(founderSectionRef.value.$el);
    }
});
</script>

<template>
    <Section id="founder" class="bg-surface/20 overflow-hidden" ref="founderSectionRef">
        <Container>
            <div class="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <!-- Text Content - Staggered from Left -->
                <div class="flex-1 order-2 md:order-1">
                    <h2 class="text-3xl md:text-5xl font-bold mb-6 transform transition-all duration-700 ease-out"
                        :class="[isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0']">
                        "I Built This Because I Needed It."
                    </h2>
                    <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p class="transform transition-all duration-700 ease-out delay-100"
                            :class="[isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0']">
                            I scaled my first agency to <span class="text-white font-bold">$50k/mo</span> and was
                            miserable. To the outside world, I was crushing it. Inside, I was a glorified employee of my
                            own company.
                        </p>
                        <div class="pl-4 border-l-4 border-primary/30 transform transition-all duration-700 ease-out delay-200"
                            :class="[isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0']">
                            <p class="mb-4">
                                I spent 2 years and $150k documenting, systemizing, and refining the operations of the
                                world's fastest-growing companies to build the <strong class="text-white">iScale
                                    Operating System</strong>.
                            </p>
                            <p>
                                Since then, we’ve installed this same system into over 50+ high-level consulting firms,
                                helping them add millions in ARR while their founders work <em>less</em>.
                            </p>
                        </div>
                        <p class="transform transition-all duration-700 ease-out delay-300"
                            :class="[isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0']">
                            This isn't theory. It's the playbook.
                        </p>
                    </div>
                </div> <!-- Image - Scale from 0 to 1 -->
                <div class="flex-1 order-1 md:order-2 transform transition-all duration-1000 cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    :class="[isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0']">
                    <div class="relative group">
                        <div
                            class="absolute -inset-4 bg-linear-to-r from-primary to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500">
                        </div>
                        <img src="/founder_djeffson.png" alt="Founder Djeffson"
                            class="relative rounded-2xl shadow-2xl w-full md:max-w-md mx-auto transition-all duration-500" />

                        <div
                            class="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-white/10">
                            <p class="text-white font-bold">Djeffson</p>
                            <p class="text-sm text-primary">Founder, iScale System</p>
                        </div>
                    </div>

                </div>
            </div>


        </Container>
    </Section>
</template>
