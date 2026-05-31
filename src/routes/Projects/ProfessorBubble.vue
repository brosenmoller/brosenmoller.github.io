<template>
    <ProjectPage
        :title="'Professor Bubble'"
        :subtitle="'Team of 5 - 48 hours'"
        :description="'Professor Bubble\'s laboratory has been thrown into chaos! Navigate various platforming challenges in the lab and use bubbles to your advantage by freezing them into solid platforms for a short while.'"
    >
        <div class="flex justify-start flex-col gap-12 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">

            <!-- Call to action links -->
            <section class="flex flex-wrap justify-center gap-4 -mt-2 xl:px-0 px-5">
                <a class="itchio-button group" href="https://naxmaardur.itch.io/professor-bubble" target="_blank">
                    <FontAwesomeIcon :icon="faItchIo" class="text-2xl" />
                    <span>View on itch.io</span>
                </a>
            </section>

            <!-- About the project -->
            <section class="xl:px-0 px-5 text-center">
                <p class="mx-auto lg:w-3/4">
                    This is a game created in 48 hours for the "Global Game Jam" 2025 at HKU Netherlands. The theme was "Bubbles". The game got <strong>1st place</strong> in the jury vote and <strong>2nd place</strong> in the public vote.
                </p>
            </section>

            <!-- Trailer -->
            <section class="xl:px-0 px-5">
                <div class="rounded-xl overflow-hidden glow-frame max-w-4xl mx-auto">
                    <LiteYouTubeEmbed
                        id="_ZrKrIPhk3c"
                        title="Professor Bubble Trailer"
                    />
                </div>
            </section>

            <!-- Credits -->
            <CreditsGrid :credits="credits" />

            <!-- Gallery -->
            <ImageGallery :screenshots="screenshots" alt="Professor Bubble screenshot" />

        </div>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import ImageGallery from '../../components/ImageGallery.vue';
import CreditsGrid from '../../components/CreditsGrid.vue';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';
import 'vue-lite-youtube-embed/style.css';

const screenshots = [
    new URL('../../assets/ProfessorBubble/professor_bubble_1.jpg', import.meta.url).href,
    new URL('../../assets/ProfessorBubble/professor_bubble_2.jpg', import.meta.url).href,
    new URL('../../assets/ProfessorBubble/professor_bubble_3.jpg', import.meta.url).href,
    new URL('../../assets/ProfessorBubble/professor_bubble_4.jpg', import.meta.url).href,
    new URL('../../assets/ProfessorBubble/professor_bubble_5.jpg', import.meta.url).href,
];

const credits = [
    { name: 'Ben Rosenmöller', role: 'Game Developer', me: true },
    { name: 'Cas Wellink', role: 'Game Designer' },
    { name: 'Mia Vreven', role: 'Game Designer' },
    { name: 'Isabel Boogers', role: 'Game Artist' },
    { name: 'Yeo Hyun Jung', role: 'Game Artist' },
];
</script>

<style scoped>
.glow-frame {
    box-shadow: 0 0 35px rgba(167, 139, 250, 0.25), 0 0 0 1px rgba(167, 139, 250, 0.3);
}

.itchio-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.65rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    background: linear-gradient(135deg, #3a1a1a 0%, #5e2a1e 100%);
    box-shadow: 0 0 0 1px rgba(250, 92, 92, 0.4);
}

.itchio-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(250, 92, 92, 0.35);
}
</style>
