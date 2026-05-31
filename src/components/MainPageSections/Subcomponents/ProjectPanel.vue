<template>
    <div :id="project.id" class="project-panel cursor-pointer" @click="handlePanelClick">
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
                <div v-if="project.linkType !== 0 || project.secondaryLink" class="flex justify-between items-center">
                    <div>
                        <RouterLink v-if="project.linkType == 1"
                            :to="project.link"
                            class="fancy-link text-violet-400 text-sm font-semibold"
                            @click.stop
                        >
                            {{ project.linkText }} →
                        </RouterLink>
                        <a v-else-if="project.linkType == 2"
                            :href="project.link" target="_blank"
                            class="fancy-link text-violet-400 text-sm font-semibold"
                            @click.stop
                        >
                            {{ project.linkText }} →
                        </a>
                    </div>
                    <a v-if="project.secondaryLink"
                        :href="project.secondaryLink" target="_blank"
                        class="secondary-link"
                        @click.stop
                    >
                        <FontAwesomeIcon :icon="getSecondaryIcon()" class="text-lg" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSteam, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    project: Object
});

const router = useRouter();

function handlePanelClick() {
    if (props.project.linkType === 1) {
        router.push(props.project.link);
    } else if (props.project.linkType === 2) {
        window.open(props.project.link, '_blank');
    }
}

function getImageUrl() {
    return new URL(`../../../assets/${props.project.img}`, import.meta.url);
}

function getSecondaryIcon() {
    const url = props.project.secondaryLink ?? '';
    if (url.includes('steampowered')) return faSteam;
    if (url.includes('itch.io')) return faItchIo;
    return faArrowUpRightFromSquare;
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

.secondary-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    color: rgb(148, 163, 184);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}
.secondary-link:hover {
    color: rgb(196, 181, 253);
    border-color: rgba(167, 139, 250, 0.5);
    background: rgba(167, 139, 250, 0.08);
}
</style>
