<template>
    <section id="projects" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                    Projects
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5">
            <ProjectPanel class="mb-5" v-for="project in projects" :title="project.title" :img="project.img" :description="project.description" />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectPanel from "./ProjectPanel.vue"

const projects = ref([
    {
        title: "Project 1",
        img: "/assets/BenRosenmollerPortrait.jpg",
        description: "alksjdf;kajs;dfjl;kasjdl; fjal;ksjdflk;jaslk;djfl;kjaslk; dfj;lkajsl;dkfjl;aksjdlk;f alk;sdjf;lhasgkjha;os oi ao;ihgo ;ah;ohs;ohgoa;hsdf;oihaois;df;oiahso;dgh;oaig"
    },
    {
        title: "Project 2",
        img: "/assets/BenRosenmollerPortrait.jpg",
        description: "alksjdf;kajs;dfjl;kasjdl;kfjal;ksjd flk;jaslk;djfl;kjaslk;dfj;lkajsl;dkfjl; aksjdlk;fjalk;sdj f;lhasgkjha;os oiao;i hgo;ah;ohs;ohgoa;hsdf;oihaois;df;oiahso;dgh;oaig"
    },
    {
        title: "Project 3",
        img: "/assets/BenRosenmollerPortrait.jpg",
        description: "alksjdf;kajs;dfjl;kasjdl;kfja l;ksjdflk;jaslk;djfl;kjaslk;dfj;lkaj sl;dkfjl;aksjdlk;fjalk;sdjf;lhas gkjha;os oia o;ihgo;ah;ohs;ohgoa;hsdf;oihaois;df;oiahso;dgh;oaig"
    },
]);

</script>