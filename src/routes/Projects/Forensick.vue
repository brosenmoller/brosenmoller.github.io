<template>
    <ProjectPage
        :title="'Forensick!'"
        :subtitle="'Solo Project · Developer & Game Feel Designer'"
        :description="'Forensick! is a chaotic, casual single-player &quot;party&quot; game in which you play as Maurice, a new, neurotic forensic investigator who must uncover the identity of each killer by examining corpses.'"
    >
        <div class="flex justify-start flex-col gap-12 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">

            <!-- Call to action links -->
            <!-- <section class="flex flex-wrap justify-center gap-4 -mt-2 xl:px-0 px-5">
                <a class="trailer-button group" href="https://youtu.be/VMo_abxVc3I" target="_blank">
                    <FontAwesomeIcon :icon="faYoutube" class="text-2xl" />
                    <span>Watch Trailer</span>
                </a>
            </section> -->

            <!-- Hero: trailer -->
            <section class="xl:px-0 px-5">
                <div class="rounded-xl overflow-hidden glow-frame max-w-4xl mx-auto">
                    <LiteYouTubeEmbed
                        id="VMo_abxVc3I"
                        title="Forensick! Trailer"
                    />
                </div>
            </section>

            <!-- Main photo -->
            <!-- <section class="xl:px-0 px-5">
                <img :src="mainPhoto" alt="Forensick!"
                     class="rounded-xl w-full object-cover glow-frame-soft max-w-4xl mx-auto">
            </section> -->

            <!-- My role -->
            <section class="xl:px-0 px-5">
                <h2 class="font-bold text-3xl mb-4">My Role</h2>
                <p class="lg:w-3/4">
                    I was the <strong>sole developer</strong> on this project, building all of the features and
                    systems. My focus was on setting up a codebase that could easily be adapted to incorporate new
                    feedback from playtests. Beyond that I worked and tested a lot of the game's
                    <strong>game feel</strong>; different effects, player movement, selection system tweaking
                    and more.
                </p>
            </section>

            <!-- Credits -->
            <section class="xl:px-0 px-5">
                <h2 class="font-bold text-3xl mb-6">The Team</h2>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
                    <div v-for="member in credits" :key="member.name"
                         class="credit-row" :class="{ 'credit-row-me': member.me }">
                        <div class="flex flex-col">
                            <span class="font-semibold">
                                {{ member.name }}
                                <span v-if="member.me" class="text-violet-300 font-normal text-sm">(me)</span>
                            </span>
                            <span class="text-sm text-slate-400">{{ member.role }}</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Gallery -->
            <section class="xl:px-0 px-5">
                <h2 class="font-bold text-3xl mb-6">Gallery</h2>
                <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    <img v-for="shot in screenshots" :key="shot"
                         :src="shot" alt="Forensick! screenshot"
                         class="gallery-img"
                         @click="openLightbox(shot, $event)">

                    <!-- Intro cutscene video (loads only when clicked) -->
                    <div class="gallery-video">
                        <div v-if="!videoPlaying" class="video-thumb" @click="playVideo">
                            <img :src="cutscenePoster" alt="Intro cutscene"
                                 class="w-full h-full object-cover">
                            <button type="button" class="video-overlay" aria-label="Play intro cutscene">
                                <span class="video-play-circle">
                                    <FontAwesomeIcon :icon="faPlay" class="video-play-icon" />
                                </span>
                            </button>
                        </div>
                        <video v-else :src="cutsceneVideo" controls autoplay
                               class="w-full h-full object-cover"></video>
                    </div>
                </div>
            </section>

        </div>

        <!-- Lightbox overlay -->
        <Transition name="lightbox-fade">
            <div v-if="lightboxImage" class="lightbox-overlay" @click.self="closeLightbox">
                <div class="lightbox-content" :style="lightboxContentStyle">
                    <button class="lightbox-close" aria-label="Close" @click="closeLightbox">
                        <FontAwesomeIcon :icon="faXmark" />
                    </button>
                    <img :src="lightboxImage" alt="Forensick! screenshot enlarged" class="lightbox-img">
                </div>
            </div>
        </Transition>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';
import { ref, computed, watch, onUnmounted } from 'vue';

const mainPhoto = new URL('../../assets/Forensic!/Forensic_MainPhoto.jpg', import.meta.url).href;
const cutscenePoster = new URL('../../assets/Forensic!/forensickposter.jpg', import.meta.url).href;
const cutsceneVideo = new URL('../../assets/Forensic!/forensic_intro_cutscene.mp4', import.meta.url).href;

const screenshots = [
    new URL('../../assets/Forensic!/forensic_Photo1.jpg', import.meta.url).href,
    new URL('../../assets/Forensic!/Forensic_Photo2.jpg', import.meta.url).href,
    new URL('../../assets/Forensic!/Forensic_Photo3.jpg', import.meta.url).href,
];

const videoPlaying = ref(false);
function playVideo() {
    videoPlaying.value = true;
}

const lightboxImage = ref(null);
const lightboxAspect = ref(16 / 9);

const lightboxContentStyle = computed(() => ({
    aspectRatio: String(lightboxAspect.value),
    width: `min(80vw, ${80 * lightboxAspect.value}vh)`,
}));

function openLightbox(src, event) {
    const target = event?.currentTarget;
    if (target && target.naturalWidth && target.naturalHeight) {
        lightboxAspect.value = target.naturalWidth / target.naturalHeight;
    }
    lightboxImage.value = src;
}

function closeLightbox() {
    lightboxImage.value = null;
}

function onKeydown(e) {
    if (e.key === 'Escape') closeLightbox();
}

// Lock background scroll and enable Escape-to-close while the lightbox is open
watch(lightboxImage, (value) => {
    if (value) {
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

const credits = [
    { name: 'Ben Rosenmöller', role: 'Developer & Game Feel Designer', me: true },
    { name: 'Cas Wellink', role: 'Game Designer' },
    { name: 'Nick Schuttevaer', role: 'Game Artist' },
];
</script>

<style scoped>
.trailer-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.65rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    background: linear-gradient(135deg, #3a1c1c 0%, #5e2a2a 100%);
    box-shadow: 0 0 0 1px rgba(244, 102, 102, 0.4);
}

.trailer-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(244, 102, 102, 0.35);
}

.glow-frame {
    box-shadow: 0 0 35px rgba(167, 139, 250, 0.25), 0 0 0 1px rgba(167, 139, 250, 0.3);
}

.glow-frame-soft {
    box-shadow: 0 0 0 1px rgba(167, 139, 250, 0.25);
}

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

.gallery-video {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-thumb {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.video-thumb:hover {
    box-shadow: 0 0 25px rgba(167, 139, 250, 0.3);
}

.video-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(2, 6, 23, 0.35);
    transition: background 0.25s ease;
}

.video-thumb:hover .video-overlay {
    background: rgba(2, 6, 23, 0.2);
}

.video-play-circle {
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

.video-thumb:hover .video-play-circle {
    transform: scale(1.08);
    background: rgba(167, 139, 250, 1);
}

.video-play-icon {
    font-size: 1.6rem;
    color: white;
    margin-left: 0.15rem;
}

.lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: rgba(2, 6, 23, 0.85);
    backdrop-filter: blur(4px);
}

.lightbox-content {
    position: relative;
    max-width: 80vw;
    max-height: 80vh;
}

.lightbox-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(167, 139, 250, 0.35), 0 0 0 1px rgba(167, 139, 250, 0.4);
}

.lightbox-close {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 1;
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

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
    transition: opacity 0.2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
    opacity: 0;
}

.credit-row {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
}

.credit-row-me {
    border-color: rgba(167, 139, 250, 0.5);
    background: rgba(167, 139, 250, 0.08);
}
</style>
