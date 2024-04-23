<template>
    <section id="projects" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                    Projects
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
        title: "Voxelsmith",
        id: "voxel-smith",
        img: "VoxelSmithCover.jpg",
        link: "/voxel-smith",
        linkText: "To Page",
        linkType: 1,
        description: "Voxelsmith is a voxel based level editor which allows you to add paint voxels, use nested prefabs, import from minecraft, export to OBJ and export to UnityPrefabs. It was build in <strong>C#</strong> and <strong>Rust</strong> using the Godot Game Engine"
    },
    {
        title: "Enigma Escape",
        id: "enigma-escape",
        img: "EnigmaEscape.jpg",
        link: "/enigma-escape",
        linkText: "To Page",
        linkType: 1,
        description: "Enigma Escape is a 2D puzzle platformer where the puzzle comes from physically assembling your controller. This project was created using C++ with Arduino and C# with Unity."
    },
    {
        title: "Terrain Generation",
        id: "terrain-generation",
        img: "ECTTPCover.jpg",
        link: "/terrain-generation",
        linkText: "To Page",
        linkType: 1,
        description: "In this project I created an infinite terrain generator using Unity, C# and HLSL compute shaders."
    },
    {
        title: "Paint over War",
        id: "paint-over-war",
        img: "PaintOverWarCover.jpg",
        link: "/paint-over-war",
        linkText: "To Page",
        linkType: 1,
        description: "Paint over a war is a story driven 3D puzzle game in which you play as a time travelling soldier discovering an old military base. It was created after our school trip to Berlin and was based off the 'Teufelsberg'. I lead a team of 6 members to create this project. It was created in Unity using C#."
    },
    {
        title: "Under Our Wing",
        id: "under-our-wing",
        img: "UnderOurWingCover.jpg",
        link: "https://nebaj.itch.io/under-our-wing",
        linkText: "To Itch.io",
        linkType: 2,
        description: "This project was commissioned by the municipality of Utrecht. In this game you play as a pigeon who is going around gathering stories from local refugees. This project was created in a cross school team of 8 members using Unity and C#"
    },
    // {
    //     title: "Rootscape",
    //     img: "RootscapeCover.jpg",
    //     link: "",
    //     description: "Place Holder text"
    // },
]);

</script>