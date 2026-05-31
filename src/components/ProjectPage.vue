<template>
    <div class="min-h-screen">
        <header class="flex flex-col items-center text-center pt-10 pb-10 px-6">
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
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { onBeforeMount } from 'vue';

const props = defineProps({
    title: String,
    description: String,
    subtitle: String,
    link: String,
});

onBeforeMount(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
});
</script>

<style scoped>
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
</style>
