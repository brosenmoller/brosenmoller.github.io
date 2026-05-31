<template>
    <ProjectPage
        :title="'Liturnian'"
        :subtitle="'Team of 8 · 6 months'"
        :description="'Discover a strange world inhabited by living lights. Liturnian is a 3D Metroidvania with fluid movement, fights against strange creatures and exciting puzzles.'"
    >
        <div class="flex justify-start flex-col gap-12 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">

            <!-- Call to action links -->
            <section class="flex flex-wrap justify-center gap-4 -mt-2 xl:px-0 px-5">
                <a class="store-button group" href="https://store.steampowered.com/app/3829630/Liturnian/" target="_blank">
                    <FontAwesomeIcon :icon="faSteam" class="text-2xl" />
                    <span>View on Steam</span>
                </a>
                <a class="trailer-button group" href="https://www.youtube.com/watch?v=luhaYaFTsy0" target="_blank">
                    <FontAwesomeIcon :icon="faYoutube" class="text-2xl" />
                    <span>Watch Trailer</span>
                </a>
            </section>

            <!-- Hero: trailer -->
            <section class="xl:px-0 px-5">
                <div class="rounded-xl overflow-hidden glow-frame max-w-4xl mx-auto">
                    <LiteYouTubeEmbed
                        id="luhaYaFTsy0"
                        title="Liturnian Trailer"
                    />
                </div>
            </section>

            <!-- Story -->
            <section class="story-block xl:mx-0 mx-5">
                <h2 class="font-bold text-violet-300 uppercase tracking-[0.3em] text-sm mb-6">The Story</h2>
                <div class="flex flex-col gap-4 italic font-light lg:text-2xl text-xl leading-relaxed">
                    <p>All Light is Life and all Life is Light.</p>
                    <p>Every 100 years a darkness falls on Luxheim and the radiance of its inhabitants slowly fades away&hellip;</p>
                    <p class="text-violet-200 not-italic font-normal">Carry the Pilgrim's Light and save Luxheim.</p>
                </div>
            </section>

            <!-- Credits -->
            <CreditsGrid :credits="credits" />

            <!-- My role intro -->
            <section class="xl:px-0 px-5">
                <h2 class="font-bold text-3xl mb-4">My Role</h2>
                <p class="lg:w-3/4">
                    As co-founder I was involved in the conception and design of Liturnian, but my focus was on
                    <strong>development</strong>. Below are a few of the core systems I built for the game.
                    For all the level design in the game I also developed
                    <RouterLink to="/voxel-smith" class="fancy-link text-violet-400">VoxelSmith</RouterLink>,
                    a custom voxel-based level editing tool built specifically for this project.
                </p>
            </section>

            <!-- Feature: Room loading -->
            <section class="feature-card">
                <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                    <span class="feature-tag">Engine &amp; Architecture</span>
                    <h3 class="font-bold text-2xl mt-3 mb-4">Dynamic Room Loading System</h3>
                    <p>
                        One of my main focuses was creating a large, open 3D world the player could explore freely
                        without ever seeing a loading screen, keeping immersion fully intact. I achieved this with a
                        dynamic room loading system that additively loads and unloads the right Unity scenes in the
                        background, without the player ever noticing, while the player, UI and managers
                        stay live in their own scenes on top of the currently loaded levels.
                    </p>
                </div>
                <div class="lg:w-1/2 w-full min-h-[14rem]">
                    <GifPlayer :poster="roomSystemPoster" :gif="roomSystemGif"
                               alt="Dynamic room loading system" rounding="rounded-r-xl" />
                </div>
            </section>

            <!-- Feature: Save system & UI (image left) -->
            <section class="feature-card lg:flex-row-reverse">
                <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                    <span class="feature-tag">UI &amp; Persistence</span>
                    <h3 class="font-bold text-2xl mt-3 mb-4">Save System &amp; UI Implementation</h3>
                    <p>
                        I built the full save system together with all of the game's UI implementation. The interface
                        supports both controller and mouse input, while the save system features multiple save slots
                        and saving at dedicated savepoints throughout the world.
                    </p>
                </div>
                <div class="lg:w-1/2 w-full">
                    <img src="../../assets/Liturnian/save_sytem_showcase.jpg" alt="Save system showcase"
                         class="w-full h-full object-cover rounded-l-xl">
                </div>
            </section>

            <!-- Feature: Dynamic map unlock (full width with two images) -->
            <section class="feature-card-vertical">
                <div class="lg:px-8 p-5">
                    <span class="feature-tag">Shaders &amp; Tools</span>
                    <h3 class="font-bold text-2xl mt-3 mb-4">Dynamic Map Unlock</h3>
                    <p class="lg:w-3/4">
                        I hand-drew the in-game map myself. Using a custom shader, I sample the alpha channel of a
                        second texture to fade individual rooms, or parts of rooms, in and out based on
                        whether the player has actually been there, so the map reveals itself as you explore.
                    </p>
                </div>
                <div class="flex md:flex-row flex-col gap-4 lg:px-8 px-5 pb-6">
                    <figure class="md:w-1/2 w-full flex flex-col gap-2">
                        <img src="../../assets/Liturnian/map_showcase_in_game_incomplete_square.jpg" alt="In-game map while exploring"
                             class="rounded-lg w-full object-cover glow-frame-soft">
                        <figcaption class="italic text-sm text-slate-400 text-center">Revealed in-game while exploring</figcaption>
                    </figure>
                    <figure class="md:w-1/2 w-full flex flex-col gap-2">
                        <img src="../../assets/Liturnian/LiturniaMap_complete.png" alt="Complete hand-drawn map"
                             class="rounded-lg w-full object-cover glow-frame-soft">
                        <figcaption class="italic text-sm text-slate-400 text-center">The full hand-drawn map</figcaption>
                    </figure>
                </div>
            </section>

            <!-- Feature: Flying enemy -->
            <section class="feature-card">
                <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                    <span class="feature-tag">Gameplay &amp; AI</span>
                    <h3 class="font-bold text-2xl mt-3 mb-4">Flying Enemy Behaviour</h3>
                    <p>
                        The flying enemy uses raycast-based obstacle avoidance to navigate the world, and can follow,
                        circle and attack the player, shown here in an isolated test scene.
                    </p>
                </div>
                <div class="lg:w-1/2 w-full min-h-[14rem]">
                    <GifPlayer :poster="flyingEnemyPoster" :gif="flyingEnemyGif"
                               alt="Flying enemy behaviour test" rounding="rounded-r-xl" />
                </div>
            </section>

            <p class="xl:px-0 px-5 text-slate-300 -mt-4">
                &hellip; plus much more. The systems above are just a few examples of the work I did on Liturnian.
            </p>

            <!-- Gallery -->
            <ImageGallery :screenshots="screenshots" alt="Liturnian screenshot" />

        </div>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import GifPlayer from '../../components/GifPlayer.vue';
import ImageGallery from '../../components/ImageGallery.vue';
import CreditsGrid from '../../components/CreditsGrid.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSteam, faYoutube } from '@fortawesome/free-brands-svg-icons';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import { RouterLink } from 'vue-router';
import 'vue-lite-youtube-embed/style.css';

import roomSystemGif from '../../assets/Masterclass/RoomSystemGraduation_16_9.gif';
import roomSystemPoster from '../../assets/Masterclass/RoomSystemGraduation_16_9_poster.jpg';
import flyingEnemyGif from '../../assets/Liturnian/FlyingEnemy.gif';
import flyingEnemyPoster from '../../assets/Liturnian/FlyingEnemy_poster.jpg';

const screenshotModules = import.meta.glob(
    '../../assets/Liturnian/SteamScreenshots/*.jpg',
    { eager: true, query: '?url', import: 'default' }
);
const screenshots = Object.keys(screenshotModules).sort().map(key => screenshotModules[key]);

const credits = [
    { name: 'Ben Rosenmöller', role: 'Lead Developer · Systems & Gameplay', me: true },
    { name: 'Dominique van de Fliert', role: 'Lead Artist · Concept & 3D Art' },
    { name: 'Mia Vreven', role: 'Lead Designer · Level & Gameplay Design' },
    { name: 'Cas Wellink', role: 'Lead Designer · Interface & Narrative Design' },
    { name: 'Ralf Zeilstra', role: 'Systems Developer' },
    { name: 'Amy Tange', role: '3D Artist · Props & Environments' },
    { name: 'Floor Kortleven', role: '3D Artist · Props & Environments' },
    { name: 'Sten Kloot', role: 'Audio Designer' },
];
</script>

<style scoped>
.store-button,
.trailer-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.65rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.store-button {
    background: linear-gradient(135deg, #1b2838 0%, #2a475e 100%);
    box-shadow: 0 0 0 1px rgba(102, 192, 244, 0.4);
}

.trailer-button {
    background: linear-gradient(135deg, #3a1c1c 0%, #5e2a2a 100%);
    box-shadow: 0 0 0 1px rgba(244, 102, 102, 0.4);
}

.store-button:hover,
.trailer-button:hover {
    transform: translateY(-2px);
}

.store-button:hover {
    box-shadow: 0 6px 20px rgba(102, 192, 244, 0.35);
}

.trailer-button:hover {
    box-shadow: 0 6px 20px rgba(244, 102, 102, 0.35);
}

.glow-frame {
    box-shadow: 0 0 35px rgba(167, 139, 250, 0.25), 0 0 0 1px rgba(167, 139, 250, 0.3);
}

.glow-frame-soft {
    box-shadow: 0 0 0 1px rgba(167, 139, 250, 0.25);
}

.story-block {
    position: relative;
    border-left: 2px solid rgba(167, 139, 250, 0.6);
    padding: 1.5rem 2rem;
    background: radial-gradient(ellipse at left, rgba(167, 139, 250, 0.08), transparent 70%);
    border-radius: 0 0.75rem 0.75rem 0;
}

.feature-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.feature-card:hover {
    border-color: rgba(167, 139, 250, 0.45);
    box-shadow: 0 0 30px rgba(167, 139, 250, 0.12);
}

.feature-card-vertical {
    overflow: hidden;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
    padding-top: 1.25rem;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.feature-card-vertical:hover {
    border-color: rgba(167, 139, 250, 0.45);
    box-shadow: 0 0 30px rgba(167, 139, 250, 0.12);
}

@media (min-width: 1024px) {
    .feature-card {
        flex-direction: row;
    }
}

.feature-tag {
    align-self: flex-start;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
    color: rgb(196, 181, 253);
    background: rgba(167, 139, 250, 0.12);
    border: 1px solid rgba(167, 139, 250, 0.35);
    padding: 0.25rem 0.7rem;
    border-radius: 9999px;
}

</style>
