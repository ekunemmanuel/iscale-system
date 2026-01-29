<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Button from '../ui/Button.vue';

const isHidden = ref(false); // true = shrunk state
const isMobileOpen = ref(false);
const lastScrollY = ref(0);

const links = [
    { name: 'About', href: '#founder' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' }
];

const handleScroll = () => {
    // Mobile menu open? Don't manipulate scroll state
    if (isMobileOpen.value) return;

    const currentScrollY = window.scrollY;

    // Determine if we are at the top
    if (currentScrollY < 50) {
        isHidden.value = false;
    } else {
        // Determine scroll direction
        if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
            // Scrolling Down -> Shrink
            isHidden.value = true;
        } else if (currentScrollY < lastScrollY.value) {
            // Scrolling Up -> Expand (User wants to nav)
            isHidden.value = false;
        }
    }

    lastScrollY.value = currentScrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav :class="[
            'pointer-events-auto bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden',
            isMobileOpen ? 'rounded-3xl' : 'rounded-full',
            isMobileOpen ? 'w-full max-w-sm p-6' :
                (isHidden ? 'w-[200px] py-3 px-3' : 'w-full max-w-5xl py-4 px-6')
        ]">

            <!-- Navbar Header Row -->
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <a href="#"
                    class="flex items-center gap-2 text-xl font-bold font-heading tracking-tight text-white shrink-0 pl-2">
                    <span>iSCALE<span class="text-primary">.</span></span>
                </a>

                <!-- Desktop Links Container -->
                <div class="hidden md:flex items-center overflow-hidden transition-all duration-500"
                    :class="isHidden ? 'max-w-0 opacity-0' : 'max-w-xl opacity-100 ml-8'">
                    <div class="flex items-center gap-8 whitespace-nowrap">
                        <a v-for="link in links" :key="link.name" :href="link.href"
                            class="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {{ link.name }}
                        </a>
                    </div>
                </div>

                <!-- Right Side Actions -->
                <div class="flex items-center gap-2 ml-4">
                    <!-- Desktop: Context aware button -->
                    <transition name="fade" mode="out-in">
                        <!-- Shrunk State: Icon Button -->
                        <div v-if="!isMobileOpen && isHidden" key="icon-btn">
                            <Button href="https://link.mercanovus.com/widget/booking/x8Vg2MfJkin737a2nIYm"
                                variant="primary"
                                class="rounded-full! w-10! h-10! p-0! flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-4 h-4 text-black">
                                    <path fill-rule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </Button>
                        </div>

                        <!-- Expanded / Mobile State: Full Button -->
                        <div v-else key="full-btn">
                            <Button href="https://link.mercanovus.com/widget/booking/x8Vg2MfJkin737a2nIYm"
                                variant="primary" class="py-2! px-4! text-sm">
                                <span class="hidden sm:inline">Book a Call</span>
                                <span class="sm:hidden">Book</span>
                            </Button>
                        </div>
                    </transition>

                    <!-- Mobile Menu Toggle -->
                    <button class="md:hidden text-white p-2" @click="isMobileOpen = !isMobileOpen">
                        <span v-if="!isMobileOpen" class="text-xl">☰</span>
                        <span v-else class="text-xl">✕</span>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu Dropdown (Grid Transition) -->
            <div class="md:hidden grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                :class="isMobileOpen ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/10' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-none'">
                <div class="overflow-hidden min-h-0">
                    <div class="flex flex-col space-y-4">
                        <a v-for="link in links" :key="link.name" :href="link.href"
                            class="block text-lg font-medium text-gray-300 hover:text-white pl-2"
                            @click="isMobileOpen = false">
                            {{ link.name }}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
