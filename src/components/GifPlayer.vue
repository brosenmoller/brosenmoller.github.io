<template>
    <div class="gif-player" :class="rounding" @click="play">
        <img :src="loaded ? gif : poster" :alt="alt"
             class="w-full h-full object-cover" :class="rounding">

        <!-- Play overlay (hidden once the gif has loaded) -->
        <button v-if="!loaded" type="button" class="gif-overlay" :aria-label="`Play ${alt}`">
            <span class="gif-play-circle">
                <FontAwesomeIcon v-if="!loading" :icon="faPlay" class="gif-play-icon" />
                <FontAwesomeIcon v-else :icon="faSpinner" class="gif-play-icon animate-spin" />
            </span>
            <span class="gif-play-hint">{{ loading ? 'Loading…' : 'Play' }}</span>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlay, faSpinner } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    poster: { type: String, required: true },
    gif: { type: String, required: true },
    alt: { type: String, default: '' },
    // Tailwind rounding classes to match the surrounding layout (e.g. 'rounded-r-xl')
    rounding: { type: String, default: '' },
});

const loaded = ref(false);
const loading = ref(false);

function play() {
    if (loaded.value || loading.value) return;
    loading.value = true;
    // Preload the full gif in the background so the poster stays visible until
    // it is fully decoded, then swap it in so the animation plays from frame 1.
    const img = new Image();
    img.onload = () => {
        loaded.value = true;
        loading.value = false;
    };
    img.onerror = () => {
        loading.value = false;
    };
    img.src = props.gif;
}
</script>

<style scoped>
.gif-player {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
}

.gif-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: rgba(2, 6, 23, 0.35);
    transition: background 0.25s ease;
}

.gif-player:hover .gif-overlay {
    background: rgba(2, 6, 23, 0.2);
}

.gif-play-circle {
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background: rgba(167, 139, 250, 0.85);
    box-shadow: 0 0 30px rgba(167, 139, 250, 0.5);
    transition: transform 0.2s ease, background 0.2s ease;
}

.gif-player:hover .gif-play-circle {
    transform: scale(1.08);
    background: rgba(167, 139, 250, 1);
}

.gif-play-icon {
    font-size: 1.6rem;
    color: white;
    margin-left: 0.15rem;
}

.gif-play-hint {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: white;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}
</style>
