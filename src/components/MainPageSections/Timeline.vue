<template>
    <section id="timeline" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                    Timeline
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5 lg:mt-0 mt-4 flex flex-wrap lg:flex-nowrap lg:justify-start">
            
            <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                <TimelineElement v-for="element in timelineElements"
                    :time="element.time"
                    :title="element.title"
                    :description="element.description"
                />
            </ol>

        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';
import TimelineElement from "./Subcomponents/TimelineElement.vue";

const timelineElements = ref([
    {
        time: "2015 - 2021",
        title: "Visser 't Hoofd Lyceum Leiden",
        description: "This was my secondary school, where I studied VWO (Dutch for Gymnasium). Here I followed courses specializing in nature and engineering."
    },
    {
        time: "2019 - 2021",
        title: "Jilster - Customer Service",
        description: "In 2019, I got my first job. I became a customer service agent for the company Jilster. They wanted to reach German audiences and because I am bilingual I could help the German customers. I really liked my time at this company and I am thankful for the experience to work in such a nice team."
    },
    {
        time: "2021 - 2023",
        title: "Jilster - Web Developer",
        description: "After working at Jilster for two years, they noticed that I was interested in programming and asked me to join their development team. Here I created a full stack application for the service supporters to look up information about the users and incoming orders. During this time, I learned more about collaboration in a development team and using Git and Scrum."
    },
    {
        time: "December 2021",
        title: "Humotion - Development Intern",
        description: "In my gap year after high school, I managed to get an internship position at the German company Humotion. There I worked with international colleagues to create a web tool, they could use to create map data for their mobile app. I found it fascinating to see how they operated."
    },
    {
        time: "2022 - Present",
        title: "HKU - Game Development",
        description: "In september of 2022 I started studying at HKU. This allows me to focus on leaning game development and make connection with like minded people. I hope to graduate in 2026."
    },
]);


</script>