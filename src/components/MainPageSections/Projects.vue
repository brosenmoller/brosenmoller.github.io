<template>
    <section id="projects" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                    Projects
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5 lg:mt-0 mt-4">
            <ProjectPanel class="mb-5" v-for="project in projects" 
                :title="project.title" 
                :img="project.img" 
                :link="project.link"
                :description="project.description"
            />
        </div>
        
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectPanel from "./Subcomponents/ProjectPanel.vue";

const projects = ref([
    {
        title: "Voxelsmith",
        img: "VoxelSmithCover.jpg",
        link: "",
        description: "Voxelsmith is a voxel based level editor which allows you to add paint voxels, use nested prefabs, import from minecraft, export to OBJ and export to UnityPrefabs. It was build in <strong>C#</strong> and <strong>Rust</strong> using the Godot Game Engine"
    },
    {
        title: "Enigma Escape",
        img: "EnigmaEscape.jpg",
        link: "",
        description: "Enigma Escape is a 2D puzzle platformer where the puzzle comes from physically assembling your controller. This project was created using C++ with Arduino and C# with Unity."
    },
    {
        title: "Terrain Generation",
        img: "ECTTPCover.jpg",
        link: "",
        description: "In this project I Created an infinite terrain generator using Unity, C# and HLSL compute shaders."
    },
    {
        title: "Paint over War",
        img: "PaintOverWarCover.jpg",
        link: "",
        description: "Paint over a war is a story driven 3D puzzle game in which you play as a time traveling soldier dicovering an old military base. It was created after our school trip to Berlin and was based of the 'Teufelsberg'. The project was created in Unity using C#."
    },
    {
        title: "Under Our Wing",
        img: "UnderOurWingCover.jpg",
        link: "https://nebaj.itch.io/under-our-wing",
        description: "This project was commissioned by the municipality of Utrecht. In this game you play as a pigeon who is going around gathering stories from local refugees. When you publish the stories you might see the city change."
    },
    // {
    //     title: "Rootscape",
    //     img: "RootscapeCover.jpg",
    //     link: "",
    //     description: "Place Holder text"
    // },
]);

</script>