<template>
    <figure class="w-full">
        <div
            class="relative w-full rounded-lg border-2 border-dashed border-violet-400/40 bg-slate-800/40
                   flex flex-col items-center justify-center text-center gap-3 p-6
                   transition-colors hover:border-violet-400/70"
            :style="{ aspectRatio: ratio }"
        >
            <span class="absolute top-3 right-3 text-[0.65rem] uppercase tracking-widest font-bold
                         text-violet-300/80 bg-violet-400/10 rounded px-2 py-1">
                {{ typeLabel }} placeholder
            </span>

            <FontAwesomeIcon :icon="icon" class="text-4xl text-violet-400/60" />

            <p class="lg:text-base text-sm text-slate-300 max-w-md px-2">
                {{ label }}
            </p>

            <span v-if="dimensions" class="text-xs font-mono text-slate-500">
                {{ dimensions }}
            </span>
        </div>
        <figcaption v-if="caption" class="mt-2 text-center text-sm text-slate-400 italic">
            {{ caption }}
        </figcaption>
    </figure>
</template>

<script setup>
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faImage, faVideo, faFilm } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
    label: String,
    caption: String,
    type: {
        type: String,
        default: 'image', // 'image' | 'gif' | 'video'
    },
    ratio: {
        type: String,
        default: '16 / 9',
    },
    dimensions: String,
});

const icon = computed(() => {
    switch (props.type) {
        case 'video': return faVideo;
        case 'gif': return faFilm;
        default: return faImage;
    }
});

const typeLabel = computed(() => {
    switch (props.type) {
        case 'video': return 'Video';
        case 'gif': return 'GIF';
        default: return 'Image';
    }
});
</script>
