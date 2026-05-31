<template>
    <div class="min-h-screen">
        <div class="px-6 pt-6 flex items-center justify-between">
            <a href="/#projects" class="back-btn">
                <FontAwesomeIcon :icon="faArrowLeft" />
                <span class="hidden md:inline">Back to Projects</span>
            </a>
            <div class="hidden md:flex">
            <RouterLink v-if="nextProject" :to="nextProject.link" class="back-btn">
                <span>Next: {{ nextProject.title }}</span>
                <FontAwesomeIcon :icon="faArrowRight" />
            </RouterLink>
            </div>
        </div>

        <header class="flex flex-col items-center text-center pt-6 pb-10 px-6">
            <h1 class="font-extrabold sm:text-5xl text-3xl">{{ title }}</h1>
            <p class="mt-2 text-slate-400 font-light text-base">{{ subtitle }}</p>

            <a v-if="link" :href="link" target="_blank" class="github-btn mt-4">
                <FontAwesomeIcon :icon="faGithub" />
                <span>GitHub</span>
            </a>

            <p v-if="description"
               class="mx-auto mt-5 max-w-2xl text-slate-300 md:text-lg text-base leading-relaxed"
               v-html="description">
            </p>
        </header>

        <slot></slot>

        <div v-if="nextProject" class="flex justify-center py-16">
            <RouterLink :to="nextProject.link" class="next-btn">
                <span>Next: {{ nextProject.title }}</span>
                <FontAwesomeIcon :icon="faArrowRight" />
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { onBeforeMount } from 'vue';

const props = defineProps({
    title: String,
    description: String,
    subtitle: String,
    link: String,
});

const projectOrder = [
    { title: 'Liturnian', link: '/liturnian' },
    { title: 'Forensick!', link: '/forensick' },
    { title: 'Professor Bubble', link: '/professor-bubble' },
    { title: 'Voxelsmith', link: '/voxel-smith' },
    { title: 'Terrain Generation', link: '/terrain-generation' },
    { title: 'Enigma Escape', link: '/enigma-escape' },
];

const route = useRoute();

const nextProject = computed(() => {
    const idx = projectOrder.findIndex(p => p.link === route.path);
    if (idx === -1) return null;
    return projectOrder[(idx + 1) % projectOrder.length];
});

onBeforeMount(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
});
</script>

<style scoped>
.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    color: rgb(148, 163, 184);
    border: 1px solid rgba(148, 163, 184, 0.25);
    background: rgba(148, 163, 184, 0.05);
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    text-decoration: none;
}
.back-btn:hover {
    color: rgb(203, 213, 225);
    border-color: rgba(148, 163, 184, 0.5);
    background: rgba(148, 163, 184, 0.1);
}
.github-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 1.2rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    color: rgb(167, 139, 250);
    border: 1px solid rgba(167, 139, 250, 0.4);
    background: rgba(167, 139, 250, 0.06);
    transition: border-color 0.2s ease, background 0.2s ease;
    text-decoration: none;
}
.github-btn:hover {
    border-color: rgba(167, 139, 250, 0.7);
    background: rgba(167, 139, 250, 0.12);
}
.next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.65rem 1.6rem;
    border-radius: 9999px;
    font-size: 1rem;
    font-weight: 600;
    color: rgb(167, 139, 250);
    border: 1px solid rgba(167, 139, 250, 0.4);
    background: rgba(167, 139, 250, 0.06);
    transition: border-color 0.2s ease, background 0.2s ease;
    text-decoration: none;
}
.next-btn:hover {
    border-color: rgba(167, 139, 250, 0.7);
    background: rgba(167, 139, 250, 0.12);
}
</style>
