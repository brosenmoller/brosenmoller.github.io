<template>
    <section class="xl:px-0 px-5">
        <h2 class="font-bold text-3xl mb-6">Gallery</h2>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <img v-for="(shot, i) in screenshots" :key="shot"
                 :src="shot" :alt="alt"
                 class="gallery-img"
                 @click="openLightbox(i, $event)">
            <slot />
        </div>
    </section>

    <Transition name="lightbox-fade">
        <div v-if="lightboxIndex !== null" class="lightbox-overlay" @click.self="closeLightbox">
            <div class="lightbox-content" :style="lightboxContentStyle">
                <button class="lightbox-close" aria-label="Close" @click="closeLightbox">
                    <FontAwesomeIcon :icon="faXmark" />
                </button>
                <button v-if="screenshots.length > 1"
                        class="lightbox-nav lightbox-nav-prev" aria-label="Previous image"
                        @click="prev">
                    <FontAwesomeIcon :icon="faChevronLeft" />
                </button>
                <img :src="screenshots[lightboxIndex]" :alt="alt + ' enlarged'"
                     class="lightbox-img" @load="onLightboxImgLoad">
                <button v-if="screenshots.length > 1"
                        class="lightbox-nav lightbox-nav-next" aria-label="Next image"
                        @click="next">
                    <FontAwesomeIcon :icon="faChevronRight" />
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    screenshots: { type: Array, required: true },
    alt: { type: String, default: 'Screenshot' },
});

const lightboxIndex = ref(null);
const lightboxAspect = ref(16 / 9);

const lightboxContentStyle = computed(() => ({
    aspectRatio: String(lightboxAspect.value),
    '--aspect': String(lightboxAspect.value),
}));

function openLightbox(index, event) {
    const target = event?.currentTarget;
    if (target && target.naturalWidth && target.naturalHeight) {
        lightboxAspect.value = target.naturalWidth / target.naturalHeight;
    }
    lightboxIndex.value = index;
}

function closeLightbox() {
    lightboxIndex.value = null;
}

function prev() {
    lightboxIndex.value = (lightboxIndex.value - 1 + props.screenshots.length) % props.screenshots.length;
}

function next() {
    lightboxIndex.value = (lightboxIndex.value + 1) % props.screenshots.length;
}

function onLightboxImgLoad(e) {
    const img = e.target;
    if (img.naturalWidth && img.naturalHeight) {
        lightboxAspect.value = img.naturalWidth / img.naturalHeight;
    }
}

function onKeydown(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
}

watch(lightboxIndex, (value) => {
    if (value !== null) {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeydown);
    } else {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKeydown);
    }
});

onUnmounted(() => {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.gallery-img:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(167, 139, 250, 0.3);
    border-color: rgba(167, 139, 250, 0.5);
}

.lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgba(2, 6, 23, 0.85);
    backdrop-filter: blur(4px);
}

.lightbox-content {
    position: relative;
    width: min(90vw, calc(90vh * var(--aspect)));
    max-width: 90vw;
    max-height: 90vh;
}

.lightbox-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(167, 139, 250, 0.35), 0 0 0 1px rgba(167, 139, 250, 0.4);
}

.lightbox-close {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 2;
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
    border-radius: 9999px;
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.25);
    transition: background 0.2s ease, transform 0.2s ease;
}

.lightbox-close:hover {
    background: rgba(167, 139, 250, 0.4);
    transform: translate(50%, -50%) rotate(90deg);
}

.lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: white;
    border-radius: 9999px;
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.25);
    transition: background 0.2s ease, transform 0.2s ease;
}

.lightbox-nav:hover {
    background: rgba(167, 139, 250, 0.4);
    transform: translateY(-50%) scale(1.1);
}

.lightbox-nav-prev {
    left: 0.5rem;
}

.lightbox-nav-next {
    right: 0.5rem;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
    transition: opacity 0.2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
    opacity: 0;
}
</style>
