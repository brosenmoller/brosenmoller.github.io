<template>
    <ProjectPage
        :title="'Terrain Generation'"
        :subtitle="'Solo project · 1 month part time'"
        :description="''"
        :link="'https://github.com/brosenmoller/ECTTP_MeshGeneration/'"
    >
    <div class="flex justify-start flex-col gap-12 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">

        <!-- Overview -->
        <section class="feature-card">
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                <span class="feature-tag">Overview</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">Infinite Procedural Terrain</h3>
                <p class="text-slate-300">
                    This project was created for my first programming class in school. Because I had previous
                    experience in programming, I was allowed to set my own goal for the lessons. I was very happy
                    about this opportunity and took it to challenge myself. My plan was to experiment with several
                    different procedural generation algorithms to increase my knowledge of this field and improve my
                    general coding skills.
                </p>
                <p class="mt-4 text-slate-300">
                    After the project I had created an infinite terrain generator using Unity, C# and HLSL compute
                    shaders. With nature object spawning and dynamic blending textures on the terrain. With variations
                    for 2D cave generation with cellular automata for tilemaps and 3D cave generation with 3D Perlin
                    noise.
                </p>
            </div>
            <div class="lg:w-1/2 w-full min-h-[16rem]">
                <img src="../../assets/TerrainGeneration/ECTTP4.jpg" alt="Terrain generation overview"
                     class="w-full h-full object-cover">
            </div>
        </section>

        <!-- Mesh Generation process -->
        <section class="feature-card-vertical">
            <div class="lg:px-8 p-5">
                <span class="feature-tag">Engine &amp; Architecture</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">Mesh Generation</h3>
            </div>
            <div class="flex lg:flex-row flex-col gap-6 lg:px-8 px-5 pb-6">
                <figure class="lg:w-1/3 w-full flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTP1.gif" alt="Perlin noise on a generated plane"
                         class="w-full rounded-lg">
                    <figcaption class="text-sm text-slate-400 italic">I started with simple Perlin noise on a generated plane.</figcaption>
                </figure>
                <figure class="lg:w-1/3 w-full flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTP2.jpg" alt="Octave noise for mountains"
                         class="w-full rounded-lg">
                    <figcaption class="text-sm text-slate-400 italic">Then I added octaves of noise on top of that to generate some mountains.</figcaption>
                </figure>
                <figure class="lg:w-1/3 w-full flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTP3.jpg" alt="Infinite world generation"
                         class="w-full rounded-lg">
                    <figcaption class="text-sm text-slate-400 italic">Finally, I turned the generation into an infinite world.</figcaption>
                </figure>
            </div>
        </section>

        <!-- Terrain Shader & Object Placement -->
        <section class="feature-card">
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                <span class="feature-tag">Shaders &amp; Placement</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">Terrain Shader &amp; Object Placement</h3>
                <p class="text-slate-300">
                    To get textures on the terrain, I wrote a terrain shader with Shader Graph and HLSL to apply it
                    to the generated mesh. The shader uses the dot product between the terrain normal and the up
                    vector to calculate the steepness, and together with the terrain height it interpolates and blends
                    between several different textures. For this purpose, I wanted to have a function that would
                    smooth out to both sides. You can see the function I ended up with in the image.
                </p>
                <p class="mt-4 text-slate-300">
                    After all the generation, an object placer script spreads objects like trees, rock and bushes over
                    the map. This also keeps into account the height and steepness of the terrain. You can see the end
                    result at the top of this page.
                </p>
            </div>
            <div class="lg:w-1/2 w-full flex flex-col gap-4 lg:p-6 p-5 justify-center">
                <img src="../../assets/TerrainGeneration/ECTTP6.jpg" alt="Terrain shader"
                     class="w-full rounded-lg">
                <img src="../../assets/TerrainGeneration/ECTTP5.jpg" alt="Object placement"
                     class="w-full rounded-lg">
            </div>
        </section>

        <!-- 2D Caves with Cellular Automata -->
        <section class="feature-card-vertical">
            <div class="lg:px-8 p-5">
                <span class="feature-tag">Procedural Generation</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">2D Caves with Cellular Automata</h3>
                <p class="lg:w-3/4 text-slate-300">
                    Using cellular automata, I created a script that can generate an infinite number of cave layouts.
                    It runs on the GPU using an HLSL compute shader for performance. It consists of several different
                    steps and iterations laid out in these images.
                </p>
            </div>
            <div class="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 lg:px-8 px-5 pb-6">
                <figure class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap1.jpg" alt="Step 1: Noisemap"
                         class="w-full rounded-lg">
                    <figcaption class="text-xs text-slate-400 text-center">1. Noisemap</figcaption>
                </figure>
                <figure class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap2.jpg" alt="Step 2: Cellular Automata"
                         class="w-full rounded-lg">
                    <figcaption class="text-xs text-slate-400 text-center">2. Cellular Automata</figcaption>
                </figure>
                <figure class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap3.jpg" alt="Step 3: Map Cleanup"
                         class="w-full rounded-lg">
                    <figcaption class="text-xs text-slate-400 text-center">3. Map Cleanup</figcaption>
                </figure>
                <figure class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap4.jpg" alt="Step 4: Remove Small Rooms"
                         class="w-full rounded-lg">
                    <figcaption class="text-xs text-slate-400 text-center">4. Remove Small Rooms</figcaption>
                </figure>
                <figure class="flex flex-col gap-2">
                    <img src="../../assets/TerrainGeneration/ECTTPNoiseMap5.jpg" alt="Step 5: Make Connections"
                         class="w-full rounded-lg">
                    <figcaption class="text-xs text-slate-400 text-center">5. Make Connections</figcaption>
                </figure>
            </div>
        </section>

        <!-- Learning Sources -->
        <section class="xl:px-0 px-5">
            <h2 class="font-bold text-2xl mb-4 text-slate-200">Learning Sources</h2>
            <ul class="dashed flex flex-col gap-2 text-slate-300">
                <li>
                    <a href="https://www.youtube.com/watch?v=eJEpeUH1EMg" class="fancy-link text-violet-400" target="_blank">
                        Mesh Generation by Brackeys
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=64NblGkAabk" class="fancy-link text-violet-400" target="_blank">
                        Procedural Terrain by Brackeys
                    </a>
                </li>
                <li>
                    <a href="https://paulbourke.net/geometry/polygonise/" class="fancy-link text-violet-400" target="_blank">
                        Marching Cubes Table
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/playlist?list=PLFt_AvWsXl0eBW2EiBtl_sxmDtSgZBxB3" class="fancy-link text-violet-400" target="_blank">
                        Procedural Generation by Sebastian Lague
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=v7yyZZjF1z4&list=PLFt_AvWsXl0eZgMK_DT5_biRkWXftAOf9" class="fancy-link text-violet-400" target="_blank">
                        Procedural Cave Generation by Sebastian Lague
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
