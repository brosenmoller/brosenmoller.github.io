<template>
    <ProjectPage 
        :title="'Terrain Generation'"
        :description="''"
        :subtitle="'Solo project'"
    >

    <div class="flex justify-start flex-col gap-8 w-full xl:px-20 md:px-10 p-2">
        
        <section class="xl:flex xl:justify-between lg:gap-8 gap-4">
            
            <div class="text-base xl:w-2/4 mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    This project was created for this first programming class in my school. Because I had previous experience in programming, I was allowed to set my own goal for the lessons. I was very happy about this opportunity and took it to challenge myself. My plan was to experiment with several different procedural generation algorithms to increase my knowledge of this field and improve my general coding skills.
                </p>

                <p class="mt-5">
                    After the project I had created an infinite terrain generator using Unity, C# and HLSL compute shaders. With nature object spawning and dynamic blending textures on the terrain. With variations for 2d cave generations with cellular automata for tilemaps and 3D cave generation with 3D perlin noise. 
                </p>
            </div>

            <img class="xl:w-2/4 xl:pr-10 xl:px-0 px-5 object-contain object-top" src="../../assets/TerrainGeneration/ECTTP4.jpg" alt="">
        </section>

        <h2 class="font-bold text-3xl">Process</h2>

        <h2 class="text-2xl">Rust, Obj and NBT</h2>

        <section class="flex justify-between xl:flex-row flex-col-reverse lg:gap-8 gap-4 mb-5">
            <div class="lg:text-lg text-base xl:w-2/5 mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    Initially, I started this project in Native Rust, this was because I like working in Rust and because it offers a lot of speed and stability by itself. In addition, for Rust I was able to find the package fastNBT2 that allowed me to easily import Minecraft Schematic files. From here, I first wanted to translate it to a 3D model. For this, I chose WaveFront OBJ files because it is an easy-to-read and write file format supported in almost every game engine. In these images, you can see the steps I took to get this to work. 
                </p>
            </div>
            
            <div class="xl:w-3/5 xl:pr-10 xl:px-0 px-5 object-contain flex justify-start flex-col gap-4">
                <img src="../../assets/VoxelSmith/VoxelSmith2.jpg" alt="">
                <img src="../../assets/VoxelSmith/VoxelSmith3.jpg" alt="">
            </div>
        </section>

        <h2 class="text-2xl">Godot & Unity Prefabs</h2>

        <section class="flex justify-between xl:flex-row flex-col lg:gap-8 gap-4">    
            <div class="xl:w-1/2 xl:pr-10 xl:px-0 px-5 object-contain flex justify-start flex-col gap-4">
                <img src="../../assets/VoxelSmith/VoxelSmith1.jpg" alt="">
            </div>

            <div class="lg:text-lg text-base xl:w-1/2 mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    After rethinking the project, I ported the codebase to Godot to make use of the 3D capabilities and easy UI integration the engine provided. 
                </p>

                <p class="mt-5">
                    Starting the export to Unity Prefabs was challenging due to Unity's closed code and lack of official documentation on ".prefab" files. After researching serialization IDs from several isolated forums and blogposts, I successfully exported a functional prefab. This image illustrates the process, where orange voxels are translated into instances of TestSphere.prefab.
                </p>
            </div>
        </section>

        <h2 class="text-2xl">Learning Sources</h2>
        
        <section class="ml-10">
            <ul class="text-white dashed">
                <li><a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400">MeshGeneration by Brackeys</a></li>
                <li><a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400">MeshGeneration by Brackeys</a></li>
                <li><a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400">MeshGeneration by Brackeys</a></li>
                <li><a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400">MeshGeneration by Brackeys</a></li>
                <li><a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400">MeshGeneration by Brackeys</a></li>
                <li><a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400">MeshGeneration by Brackeys</a></li>
                <li><a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400">MeshGeneration by Brackeys</a></li>
            </ul>
        </section>

    </div>


    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';

</script>

<style scoped>

ul.dashed {
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
}
ul.dashed > li:before {
    display: inline-block;
    content: "-";
    width: 1em;
    margin-left: -1em;
}

</style>