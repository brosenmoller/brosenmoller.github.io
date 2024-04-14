<template>
    <section id="hobbies" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                    Hobbies
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5 lg:mt-0 mt-4">
            <ProjectPanel class="mb-5" v-for="project in projects" 
                :project="project"
            />
        </div>
        
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectPanel from "./Subcomponents/ProjectPanel.vue";

// linkType (0 = None, 1 = Internal, 2 = External)
const projects = ref([
    {
        title: "Nevas Buildings",
        img: "NevasBuildingsCover.jpg",
        link: "https://www.youtube.com/@NevasBuildings",
        linkText: "To Youtube",
        linkType: 2,
        description: "Nevas Buildings is a Youtube channel I started with a friend of mine. We come together to build historically inspired buildings and I edit them to post to the channel."
    },
    {
        title: "Music",
        img: "PianoCover.jpg",
        link: "#",
        linkText: "To Page",
        linkType: 0,
        description: "I love music, listening, playing and composing. I play the piano, trumpet and I used to play the flute as well. It is something that can always calm me down in stressfull times."
    },
]);

</script>