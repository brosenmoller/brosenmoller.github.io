<template>
    <ProjectPage 
        :title="'Voxel Smith'"
        :description="''"
        :subtitle="'Solo Project - 2 months part time'"
        :link="'https://github.com/brosenmoller/VoxelSmith'"
    >

    <div class="flex justify-start flex-col gap-8 w-full xl:px-20 md:px-10 p-2">
        
        <section class="xl:flex xl:justify-between lg:gap-8 gap-4">
            
            <div class="lg:text-lg text-base xl:w-2/4 mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    Voxel Smith is a 3D level editor based on voxels. The editor includes a subwindow in which you can control a character that allows you to walk/fly through the world. You can place and break voxels from your palette. You can also use the cube and line tool two drag between two points and fill or break the selection. This palette is fully customizable and also supports linking Unity Prefabs. 
                </p>

                <p class="mt-5">
                    Furthermore, you can import a project from Minecraft via the ".schematic" file format. When finished, you can export both as a 3D model (OBJ) and also directly to a Unity Prefab. The Unity Prefab export will then ensure that all your loaded prefabs are also exported with it.
                </p>
            </div>

            <img class="xl:w-2/4 xl:pr-10 xl:px-0 px-5 object-contain object-top" src="../../assets/VoxelSmith/VoxelSmith8.jpg" alt="">
        </section>

        <h2 class="font-bold text-3xl">Process</h2>
        
        <div class="lg:text-lg text-base mb-8 xl:mb-0 xl:px-0 px-5">
            <p class="">
                I started this project on request of two designers I was going to work with 2 months later in a school project. With this tool, they wanted to speed up the creation of 3D level design to quickly test and iterate the design. During the development, I frequently went back to them to get feedback on the current state of the tool. 
            </p>
        </div>

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

    </div>
        
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

</script>