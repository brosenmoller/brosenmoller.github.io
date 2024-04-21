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

        <h2 class="text-2xl">Begin</h2>

        <section class="flex justify-between xl:flex-row flex-col lg:gap-8 gap-4 mb-5">
           <div class="xl:w-1/3">
                <div class="lg:text-lg text-base mb-4 xl:px-0 px-5">
                    <p class="">
                        I started with some simple Perlin noise on a generated plane.
                    </p>
                </div>
                
                <div class="xl:px-0 px-5 object-contain flex justify-start flex-col gap-4">
                    <img src="../../assets/TerrainGeneration/ECTTP1.gif" alt="">
                </div>
           </div>
           <div class="xl:w-1/3">
                <div class="lg:text-lg text-base mb-4 xl:px-0 px-5">
                    <p class="">
                        Then I added octaves of noise on top of that to generate some mountains.
                    </p>
                </div>
                
                <div class="xl:px-0 px-5 object-contain flex justify-start flex-col gap-4">
                    <img src="../../assets/TerrainGeneration/ECTTP2.jpg" alt="">
                </div>
           </div>
           <div class="xl:w-1/3">
                <div class="lg:text-lg text-base mb-4 xl:px-0 px-5">
                    <p class="">
                        Finally, I turned the generation into an infinite world.
                    </p>
                </div>
                
                <div class="xl:px-0 px-5 object-contain flex justify-start flex-col gap-4">
                    <img src="../../assets/TerrainGeneration/ECTTP3.jpg" alt="">
                </div>
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
            <ul class="dashed text-white">
                <li>
                    <a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400" target="_blank">
                        MeshGeneration by Brackeys
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=64NblGkAabk" class="fancy-link text-violet-400" target="_blank">
                        Procedural Terrain by Brackeys
                    </a>
                </li>
                <li>
                    <a href="https://paulbourke.net/geometry/polygonise/" class="fancy-link text-violet-400" target="_blank">
                        RMarching cubes Table
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/playlist?list=PLFt_AvWsXl0eBW2EiBtl_sxmDtSgZBxB3" class="fancy-link text-violet-400" target="_blank">
                        Procedural Generation by Sebastian Lague
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=v7yyZZjF1z4&list=PLFt_AvWsXl0eZgMK_DT5_biRkWXftAOf9" class="fancy-link text-violet-400" target="_blank">
                        Procedural Cave generation by Sebastian Lague
                    </a>
                </li>
            </ul>
        </section>

    </div>


    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';

</script>