<template>
    <main class="flex flex-1 flex-col font-normal text-wrap p-4">
        <Intro />
        <About />
        <Skills />
        <Projects/>
    </main>
</template>

<script setup>
    import Intro from "../components/Intro.vue";
    import About from "../components/About.vue";
    import Skills from "../components/Skills.vue";
    import Projects from "../components/Projects.vue";
</script>
