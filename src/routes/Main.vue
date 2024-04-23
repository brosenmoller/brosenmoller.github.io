<template>
    <main class="flex flex-1 flex-col font-normal text-wrap p-4">
        <Intro />
        <Projects />
        <Skills />
        <About />
        <Timeline />
        <Refrences />
        <Hobbies />
    </main>
</template>

<script setup>
    import Intro from "../components/MainPageSections/Intro.vue";
    import About from "../components/MainPageSections/About.vue";
    import Timeline from "../components/MainPageSections/Timeline.vue";
    import Refrences from "../components/MainPageSections/Refrences.vue";
    import Skills from "../components/MainPageSections/Skills.vue";
    import Projects from "../components/MainPageSections/Projects.vue";
    import Hobbies from "../components/MainPageSections/Hobbies.vue";
</script>
