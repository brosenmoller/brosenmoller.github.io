<template>
    <ProjectPage
        :title="'VoxelSmith'"
        :subtitle="'Solo Project · 2 months part time'"
        :description="''"
        :link="'https://github.com/brosenmoller/VoxelSmith'"
    >
    <div class="flex justify-start flex-col gap-12 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">

        <!-- Overview -->
        <section class="feature-card">
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                <span class="feature-tag">Overview</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">A Custom Voxel Level Editor</h3>
                <p class="text-slate-300">
                    VoxelSmith is a 3D level editor based on voxels. The editor includes a subwindow in which you can
                    control a character that allows you to walk/fly through the world. You can place and break voxels
                    from your palette. You can also use the cube and line tool to drag between two points and fill or
                    break the selection. This palette is fully customizable and also supports linking Unity Prefabs.
                </p>
                <p class="mt-4 text-slate-300">
                    Furthermore, you can import a project from Minecraft via the ".schematic" file format. When
                    finished, you can export both as a 3D model (OBJ) and also directly to a Unity Prefab. The Unity
                    Prefab export will then ensure that all your loaded prefabs are also exported with it.
                </p>
            </div>
            <div class="lg:w-1/2 w-full min-h-[16rem]">
                <img src="../../assets/VoxelSmith/VoxelSmith8.jpg" alt="VoxelSmith editor overview"
                     class="w-full h-full object-cover">
            </div>
        </section>

        <!-- Process intro -->
        <section class="xl:px-0 px-5">
            <h2 class="font-bold text-3xl mb-4">Process</h2>
            <p class="lg:w-3/4 text-slate-300">
                I started this project on request of two designers I was going to work with 2 months later in a school
                project. With this tool, they wanted to speed up the creation of 3D level design to quickly test and
                iterate the design. During the development, I frequently went back to them to get feedback on the
                current state of the tool.
            </p>
        </section>

        <!-- Rust, OBJ & NBT -->
        <section class="feature-card">
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                <span class="feature-tag">Rust · OBJ · NBT</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">Rust, OBJ and NBT</h3>
                <p class="text-slate-300">
                    Initially, I started this project in Native Rust, this was because I like working in Rust and
                    because it offers a lot of speed and stability by itself. In addition, for Rust I was able to find
                    the package fastNBT2 that allowed me to easily import Minecraft Schematic files. From here, I first
                    wanted to translate it to a 3D model. For this, I chose WaveFront OBJ files because it is an
                    easy-to-read and write file format supported in almost every game engine. In these images, you can
                    see the steps I took to get this to work.
                </p>
            </div>
            <div class="lg:w-1/2 w-full flex flex-col gap-4 lg:p-6 p-5 justify-center">
                <img src="../../assets/VoxelSmith/VoxelSmith2.jpg" alt="OBJ export step 1"
                     class="w-full rounded-lg">
                <img src="../../assets/VoxelSmith/VoxelSmith3.jpg" alt="OBJ export step 2"
                     class="w-full rounded-lg">
            </div>
        </section>

        <!-- Godot & Unity Prefabs -->
        <section class="feature-card lg:flex-row-reverse">
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                <span class="feature-tag">Godot · Unity Prefabs</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">Godot &amp; Unity Prefabs</h3>
                <p class="text-slate-300">
                    After rethinking the project, I ported the codebase to Godot to make use of the 3D capabilities
                    and easy UI integration the engine provided.
                </p>
                <p class="mt-4 text-slate-300">
                    Starting the export to Unity Prefabs was challenging due to Unity's closed code and lack of
                    official documentation on ".prefab" files. After researching serialization IDs from several
                    isolated forums and blogposts, I successfully exported a functional prefab. This image illustrates
                    the process, where orange voxels are translated into instances of TestSphere.prefab.
                </p>
            </div>
            <div class="lg:w-1/2 w-full min-h-[16rem]">
                <img src="../../assets/VoxelSmith/VoxelSmith1.jpg" alt="Godot and Unity Prefab export"
                     class="w-full h-full object-cover">
            </div>
        </section>

    </div>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
</script>
