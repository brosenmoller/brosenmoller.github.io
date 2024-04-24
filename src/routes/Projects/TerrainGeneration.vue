<template>
    <ProjectPage 
        :title="'Terrain Generation'"
        :description="''"
        :subtitle="'Solo project - 1 month part time'"
        :link="'https://github.com/brosenmoller/ECTTP_MeshGeneration/'"
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

        <h2 class="text-2xl">Mesh Generation</h2>

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

        <h2 class="text-2xl">Terrain Shader & Object placement</h2>

        <section class="flex justify-between xl:flex-row flex-col lg:gap-8 gap-4">
            <div class="lg:text-lg text-base xl:w-1/2 mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    To get textures on the terrain, I wrote a terrain shader with Shader Graph and HLSL to apply it to the generated mesh. The shader uses the dot product between the terrain normal and the up vector to calculate the steepness, and together with the terrain height it interpolates and blends between several different textures. For this purpose, I wanted to have a function that would smooth out to both sides. You can see the function I ended up with in the image. 
                </p>

                <p class="mt-5">
                    After all the generation, an object placer script spreads objects like trees, rock and bushes over the map. This also keeps into account the height and steepness of the terrain. You can see the end result and the top of this page.
                </p>
            </div>

            <div class="xl:w-1/2 xl:pr-10 xl:px-0 px-5 object-contain flex justify-start flex-col gap-4">
                <img src="../../assets/TerrainGeneration/ECTTP6.jpg" alt="">
                <img src="../../assets/TerrainGeneration/ECTTP5.jpg" alt="">
            </div>
        </section>

        <h2 class="text-2xl">2D Caves with Celluar Automate </h2>

        <section class="flex justify-between flex-col lg:gap-8 gap-4">
            <div class="lg:text-lg text-base mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    Using cellular automata, I created a script that can generate an infinite number of cave layouts. It runs on the GPU using an HLSL compute shader for performance. It consists of several different steps and iterations laid out in these images.
                </p>
            </div>

            <div class="xl:pr-10 xl:px-0 px-5 grid lg:grid-rows-1 lg:grid-cols-5 grid-rows-3 grid-cols-2 gap-4">
                <div class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap1.jpg" alt="">
                    <span>1. Noisemap</span>
                </div>
                <div class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap2.jpg" alt="">
                    <span>2. Cellular Automata</span>
                </div>
                <div class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap3.jpg" alt="">
                    <span>3. Map Cleanup</span>
                </div>
                <div class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap4.jpg" alt="">
                    <span>4. Remove Small Rooms</span>
                </div>
                <div class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap5.jpg" alt="">
                    <span>5. Make Connections</span>
                </div>
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