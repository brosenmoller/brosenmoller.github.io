<template>
    <section id="masterclasses" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                Masterclasses
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
        title: "Unity Project Setup",
        id: "masterclass-unity-project-setup",
        img: "Masterclass/RoomSystemGraduation_16_9_poster.jpg",
        link: "/masterclass-unity-project-setup",
        linkText: "Read Masterclass",
        linkType: 1,
        description: "A masterclass on setting up a Unity project in a fast and scalable way. Covering folder structure, assembly definitions, scene setup, C# conventions, and more."
    },
]);
</script>
