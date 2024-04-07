<script>
    let skills = [
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
            title: "Game Engines",
            children: [
                "Unity",
                "Godot",
                "Bevy",
                "SFML",
            ]
        },
        {
            title: "Tools",
            children: [
                "Git & Github/GitLab",
                "Miro",
                "Blender",
                "Krita",
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
    ]
</script>

<section id="skills" class="lg:flex justify-center lg:p-20 text-lg min-h-screen pt-8">

    <div class="lg:w-1/5 pr-5">
        <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                Skills
        </h1>
    </div>

    <div class="lg:w-4/5 pl-5 flex flex-wrap lg:flex-nowrap lg:justify-start">
        {#each skills as skill}
            <div class="mr-8 lg:mt-0 mt-4">
                <span class="font-bold">{skill.title}</span>
                <ul>
                    {#each skill.children as child}
                        <li class="font-normal">
                            {child}
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

</section>