<template>
    <ProjectPage
        :title="'Forensick!'"
        :subtitle="'Team of 3 - 6 months'"
        :description="'Forensick! is a chaotic, casual game in which you play as Maurice, a new, neurotic forensic investigator who must uncover the identity of each killer by examining corpses.'"
    >
        <div class="flex justify-start flex-col gap-12 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">

            <!-- Hero: trailer -->
            <section class="xl:px-0 px-5">
                <div class="rounded-xl overflow-hidden glow-frame max-w-4xl mx-auto">
                    <LiteYouTubeEmbed
                        id="VMo_abxVc3I"
                        title="Forensick! Trailer"
                    />
                </div>
            </section>

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
            <CreditsGrid :credits="credits" />

            <!-- Gallery -->
            <ImageGallery :screenshots="screenshots" alt="Forensick! screenshot">
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
            </ImageGallery>

        </div>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import ImageGallery from '../../components/ImageGallery.vue';
import CreditsGrid from '../../components/CreditsGrid.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';
import { ref } from 'vue';

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

</style>
