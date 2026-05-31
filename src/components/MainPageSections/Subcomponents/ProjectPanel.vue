<template>
    <div :id="project.id" class="project-panel">
        <div class="flex sm:flex-row flex-col">
            <div class="sm:w-2/5 shrink-0 min-h-[12rem] sm:max-h-none max-h-52 overflow-hidden">
                <img :src="getImageUrl()"
                     class="w-full h-full object-cover">
            </div>
            <div class="sm:w-3/5 p-5 flex flex-col justify-between gap-4">
                <div>
                    <h2 class="font-extrabold lg:text-xl text-lg mb-3">{{ project.title }}</h2>
                    <p class="text-slate-300 text-sm leading-relaxed" v-html="project.description"></p>
                </div>
                <div v-if="project.linkType !== 0">
                    <RouterLink v-if="project.linkType == 1"
                        :to="project.link"
                        class="fancy-link text-violet-400 text-sm font-semibold"
                    >
                        {{ project.linkText }} →
                    </RouterLink>
                    <a v-else-if="project.linkType == 2"
                        :href="project.link" target="_blank"
                        class="fancy-link text-violet-400 text-sm font-semibold"
                    >
                        {{ project.linkText }} →
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    project: Object
});

function getImageUrl() {
    return new URL(`../../../assets/${props.project.img}`, import.meta.url);
}
</script>

<style scoped>
.project-panel {
    border-radius: 0.75rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.project-panel:hover {
    border-color: rgba(167, 139, 250, 0.4);
    box-shadow: 0 0 25px rgba(167, 139, 250, 0.1);
}
</style>
