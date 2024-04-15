<template>
    <ProjectPage 
        :title="'Enigma Escape'"
        :description="'Enigma Escape is a 2D puzzle platformer where the puzzle comes from physically assembling your controller. This project was created using C++ with Arduino and C# with Unity.'"
        :subtitle="'Team of 5'"
    >
        <div class="flex justify-between h-80">

            <p class="text-lg md:w-1/2 md:h-1/2">
                laksjdfljas df;lajsljfl;kajsd;l jflasjdl fjal;sk dj;flja sldjf l;aj sdljf ;lasjdl;fj l;ajsdlkfjlk;asdj ;flajsl;djf l;kasj d;lfjal;s d jfl;asj dl;kfj a;lskjd l;fja l;sddj fl;ajsl;d jfl;asjd ;ljf;l asjdl;fj alsdj f;ljkasdf
            </p>

            <LiteYouTubeEmbed
                id="NIxikwfLS8Y"
                title="Enigma Escape Trailer Video"
            />
        </div>
        

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
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

<style scoped>
.youtube-iframe {
    @apply md:w-56 md:h-56
}
</style>