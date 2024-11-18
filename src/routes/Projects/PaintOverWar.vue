<template>
    <ProjectPage 
        :title="'Paint Over War'"
        :description="''"
        :subtitle="'Team of 6 - 2 months part time'"
    >
        <div class="flex justify-start flex-col gap-8 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">
            <section class="xl:flex xl:justify-between lg:gap-8 gap-4">
                
                <div class=" xl:w-1/2 mb-8 xl:mb-0 xl:px-0 px-5">
                    <p class="">
                        Paint over a war is a story driven 3D puzzle game in which you play as a time travelling soldier discovering an old military base. It was created after our school trip to Berlin and was based off the 'Teufelsberg'. I lead a team of 6 members to create this project consisting of me, Cas Wellink, Ralf Zeilstra, Kirsten Westerhuis, Taran van Stel en Dominique Zonneveld. It was created in Unity using C#.
                    </p>
                </div>

                <div class="xl:w-1/2 xl:px-0 px-5">
                    <LiteYouTubeEmbed
                        id="h54rSwuc2eo"
                        title="Enigma Escape Trailer Video"
                    />
                </div>
            </section>

            <h2 class="font-bold text-3xl">Process</h2>

            <div class="lg:text-lg text-base mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    For this project, I worked together with Ralf Zeilstra on the codebase. Because it was a puzzle game, it was important to develop tools for the designers that would allow them to quickly create and iterate on the designs. We created an interaction and sequence system that the designers could use to create for example buttons, triggers, sequences, items and doors. These can then be connected to several events.
                </p>
                <p class="mt-5">
                    It was very important to work iteratively, so I made sure to have a new build of the project every week that we could use to test with our target audience. Furthermore, it made it very easy to look back at our progress and work as a motivation to keep pushing forward.
                </p>
            </div>

            <section class="flex justify-between lg:flex-row flex-col xl:px-0 px-5 gap-4">
                <div class="lg:w-1/3 flex flex-col gap-1">
                    <img src="../../assets/PaintOverWar/ProjectVrij_Progress1.jpg" alt="">
                    <span class="italic">Week 1</span>
                </div>
                <div class="lg:w-1/3 flex flex-col gap-1">
                    <img src="../../assets/PaintOverWar/ProjectVrij_Progress3.jpg" alt="">
                    <span class="italic">Week 3</span>
                </div>
                <div class="lg:w-1/3 flex flex-col gap-1">
                    <img src="../../assets/PaintOverWar/ProjectVrij_Progress5.jpg" alt="">
                    <span class="italic">Week 5</span>
                </div>
            </section>
        </div>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';

</script>