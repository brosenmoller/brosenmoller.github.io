<template>
    <section id="projects" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                    Projects
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5 lg:mt-0 mt-4">
            <ProjectPanel class="mb-5" v-for="project in projects" :title="project.title" :img="project.img" :description="project.description" />
        </div>
        
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectPanel from "./ProjectPanel.vue";

const projects = ref([
    {
        title: "Project 1",
        img: "BenRosenmollerPortrait.jpg",
        description: "f"
    },
    {
        title: "Project 2",
        img: "BenRosenmollerPortrait.jpg",
        description: "asdfasdf;la s;djf;la sjdl;kfj al;ksjdfl; kajsl;kdf las sjdlf j al;skdj f;lajsd l;k fjl;aks dlfj asl;dfj l;asjd j;lfja;l skd jfl;kas kdjf;lasj d;l kfkj al;ksjd fl;kaj sl;kdjfl asldj fl;ajsl; djf;lkajs dl;kfj;a"
    },
    {
        title: "Project 3",
        img: "BenRosenmollerPortrait.jpg",
        description: "f"
    },
]);

</script>