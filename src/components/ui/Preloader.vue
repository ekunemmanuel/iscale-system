<script setup lang="ts">
import { ref, onMounted } from 'vue';

const emit = defineEmits(['complete']);
const isVisible = ref(true);
const opacity = ref(1);

onMounted(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Show for a minimum time (e.g. 1.5s) then fade out
    setTimeout(() => {
        opacity.value = 0;
        setTimeout(() => {
            isVisible.value = false;
            // Unlock scroll
            document.body.style.overflow = '';
            emit('complete');
        }, 800); // Wait for transition to finish
    }, 1500);
});
</script>

<template>
    <div v-if="isVisible"
        class="fixed inset-0 z-100 flex items-center justify-center transition-opacity duration-1000 ease-out pointer-events-none bg-radial-gradient"
        :style="{ opacity: opacity }">

        <div class="relative flex flex-col items-center">
            <!-- Logo Image -->
            <!-- mix-blend-screen hides black background edges -->
            <div class="w-32 md:w-96 animate-pulse-slow">
                <img src="/iscale_logo.png" alt="iSCALE"
                    class="w-full h-auto object-contain mix-blend-screen" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-radial-gradient {
    /* Deep blue center fading to black */
    background: radial-gradient(circle at center, #0f172a 0%, #000000 100%);
}

.animate-pulse-slow {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
        filter: brightness(1.2);
    }

    50% {
        opacity: 0.8;
        transform: scale(0.95);
        filter: brightness(1);
    }
}
</style>
