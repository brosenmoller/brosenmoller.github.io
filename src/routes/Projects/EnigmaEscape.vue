<template>
    <ProjectPage 
        :title="'Enigma Escape'"
        :description="''"
        :subtitle="'Team of 5'"
    >
        <div class="flex justify-between md:flex-row flex-col gap-8 p-5">

            <p class="text-lg md:w-1/2">
                Enigma Escape is a 2D puzzle platformer where the puzzle comes from physically assembling your controller. This project was created using C++ with Arduino and C# with Unity.
            </p>

            <div class="md:w-1/2">
                <LiteYouTubeEmbed
                    id="NIxikwfLS8Y"
                    title="Enigma Escape Trailer Video"
                />
            </div>
        </div>
        
        
        <div class="mb-20"></div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess1.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess2.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess3.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess4.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess5.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess6.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess7.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess8.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess9.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess10.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess11.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess11.jpg" alt="">
                </div>
            </div>
        </div>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

</script>