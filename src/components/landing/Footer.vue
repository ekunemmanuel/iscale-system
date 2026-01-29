<script setup lang="ts">
import Container from '../ui/Container.vue';
import Button from '../ui/Button.vue';
</script>

<template>
    <footer class="relative bg-black py-20 border-t border-white/10 overflow-hidden">
        <!-- Giant Watermark Text -->
        <div
            class="absolute left-0 right-0 bottom-0 flex items-center justify-center select-none pointer-events-none whitespace-nowrap opacity-[0.03] overflow-hidden">
            <h1 class="font-bold font-heading leading-none text-white tracking-tighter text-[25vw]">
                iSCALE
            </h1>
        </div>

        <Container class="relative z-10 text-center">
            <div class="max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Your Business Shouldn’t Collapse Without You.</h2>
                <p class="text-gray-400 mb-8">
                    If you’re doing $20k+/month and want to scale to $100k+ without burning out, apply for a system
                    installation.
                </p>
                <Button href="https://link.mercanovus.com/widget/booking/x8Vg2MfJkin737a2nIYm">Book Your Audit
                    Call</Button>
                <p class="mt-4 text-xs text-gray-500">Applications reviewed manually · Limited availability</p>
            </div>

            <div class="flex justify-center gap-6 mb-8 text-gray-500">
                <a href="https://www.instagram.com/athis_djeffson" target="_blank" rel="noopener noreferrer"
                    class="hover:text-primary transition-colors">Instagram</a>
                <a href="https://www.youtube.com/@djeffsonathisbusiness" target="_blank" rel="noopener noreferrer"
                    class="hover:text-primary transition-colors">YouTube</a>
            </div>

            <p class="text-gray-600 text-sm">
                © 2025 iScale System. All rights reserved.
            </p>
        </Container>
    </footer>
</template>
