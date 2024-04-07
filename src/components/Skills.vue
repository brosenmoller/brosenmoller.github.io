<template>
    <section id="skills" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                    Skills
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5 flex flex-wrap lg:flex-nowrap lg:justify-start">
            <div v-for="skill in skills" class="mr-8 lg:mt-0 mt-4">
                <span class="font-bold">{{skill.title}}</span>
                <ul>
                    <li v-for="child in skill.children" class="font-normal">
                        {{child}}
                    </li>
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
