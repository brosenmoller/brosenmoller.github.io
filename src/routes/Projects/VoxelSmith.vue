<template>
    <ProjectPage 
        :title="'Voxel Smith'"
        :description="''"
        :subtitle="'Solo Project'"
    >

    <div class="flex justify-start flex-col gap-8 w-full xl:px-20 md:px-10 p-2">
        
        <section class="xl:flex xl:justify-between gap-8">
            
            <div class="text-lg text-justify xl:w-2/4 mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    Voxel Smith is a 3D level editor based on voxels. The editor includes a subwindow in which you can control a character that allows you to walk/fly through the world. You can place and break voxels from your palette. You can also use the cube and line tool two drag between two points and fill or break the selection. This palette is fully customizable and also supports linking Unity Prefabs. 
                </p>

                <p class="mt-5">
                    Furthermore, you can import a project from Minecraft via the ".schematic" file format. When finished, you can export both as a 3D model (OBJ) and also directly to a Unity Prefab. The Unity Prefab export will then ensure that all your loaded prefabs are also exported with it.
                </p>
            </div>
            

            <img class="xl:w-2/4 xl:pr-10 xl:px-0 px-5 object-contain object-top" src="../../assets/VoxelSmith/VoxelSmith8.jpg" alt="">
        </section>

        <h2 class="font-bold text-2xl">Process</h2>

        <section class="xl:flex xl:justify-between gap-8">
            <div class="text-lg text-justify xl:w-2/4 mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    Voxel Smith is a 3D level editor based on voxels. The editor includes a subwindow in which you can control a character that allows you to walk/fly through the world. You can place and break voxels from your palette. You can also use the cube and line tool two drag between two points and fill or break the selection. This palette is fully customizable and also supports linking Unity Prefabs. 
                </p>

                <p class="mt-5">
                    Furthermore, you can import a project from Minecraft via the ".schematic" file format. When finished, you can export both as a 3D model (OBJ) and also directly to a Unity Prefab. The Unity Prefab export will then ensure that all your loaded prefabs are also exported with it.
                </p>
            </div>
            

            <img class="xl:w-2/4 xl:pr-10 xl:px-0 px-5 object-contain object-top" src="../../assets/VoxelSmith/VoxelSmith8.jpg" alt="">
        </section>

    </div>
        
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';

</script>