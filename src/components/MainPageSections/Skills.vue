<template>
    <section id="skills" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                Skills
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5 lg:mt-0 mt-4 flex flex-wrap gap-x-10 gap-y-6">
            <div v-for="skill in skills">
                <p class="font-bold text-white text-sm uppercase tracking-wider mb-3">{{ skill.title }}</p>
                <ul class="flex flex-col gap-1.5">
                    <li v-for="child in skill.children" class="skill-tag">{{ child }}</li>
                </ul>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
    {
        title: "Coding Languages",
        children: [
            "C#",
            "C++",
            "Rust",
            "Java",
            "HLSL",
            "Python",
            "GDScript",
            "HTML",
            "JavaScript",
            "CSS",
            "PHP"
        ]
    },
    {
        title: "Engines / Frameworks",
        children: [
            "Unity",
            "Godot",
            "Bevy",
            "SFML",
            "Vue.js",
            "Laravel"
        ]
    },
    {
        title: "Tools",
        children: [
            "Git & Github/GitLab",
            "Miro",
            "Blender",
            "Krita",
            "Davinci Resolve"
        ]
    },
    {
        title: "Languages",
        children: [
            "Dutch - Native",
            "German - Native",
            "English - C1",
            "Swedish - B1",
        ]
    },
]);
</script>

<style scoped>
.skill-tag {
    font-size: 0.8rem;
    color: rgb(203, 213, 225);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    border-radius: 9999px;
    padding: 0.2rem 0.75rem;
    width: fit-content;
}
</style>
