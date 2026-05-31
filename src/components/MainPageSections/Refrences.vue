<template>
    <section id="refrences" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                References
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5 lg:mt-0 mt-4">
            <div class="lg:flex gap-6">

                <div class="ref-card lg:w-1/2 lg:mb-0 mb-5">
                    <h2 class="font-bold text-xl">Marc Hoogvliet</h2>
                    <span class="text-violet-300 text-sm font-medium mt-0.5 block">Former CEO of Jilster B.V.</span>
                    <p class="mt-4 mb-5 text-slate-300 text-sm leading-relaxed">
                        As an IT developer, Ben was extremely good and reliable. He developed the cockpit at Jilster.
                        This cockpit was essential for improving the processes of the support staff. Because he had
                        worked there himself, he knew perfectly well what was needed. We were very sorry to see him
                        leave Jilster because of his studies in Utrecht, but were of course happy that he was going
                        to make this step. A step towards a great future.
                    </p>
                    <a target="_blank" class="fancy-link text-violet-400 text-sm mt-auto"
                        href="https://drive.google.com/file/d/1gIPQWY0u4R2tbPWc93ksyz7yLuwTZ6Of/view?usp=sharing"
                    >
                        Link to Full Text
                    </a>
                </div>

                <div class="ref-card lg:w-1/2">
                    <h2 class="font-bold text-xl">David Scheidt</h2>
                    <span class="text-violet-300 text-sm font-medium mt-0.5 block">Senior Software Developer at Humotion GmbH</span>
                    <div class="mt-4 text-slate-300 text-sm leading-relaxed flex flex-col gap-3">
                        <p>
                            During his internship, Mr. Rosenmöller has worked on a new web based editor tool to support
                            internal processes become more efficient. Mr. Rosenmöller's field of learning and tasks
                            included the following:
                        </p>
                        <ul class="dashed flex flex-col gap-1">
                            <li>Web App Development using Svelte, Tailwind CSS, REST APIs, JSON data structures</li>
                            <li>Version control using git</li>
                            <li>Continuous Deployment using GitLab CI/CD</li>
                        </ul>
                        <p>
                            For the internship supervisors and the entire team, the presence and collaboration of
                            Mr. Rosenmöller was a great enrichment.
                        </p>
                    </div>
                    <a target="_blank" class="fancy-link text-violet-400 text-sm mt-5"
                        href="https://drive.google.com/file/d/1iIWIOx3G0afCkJIhWGkTgj-v45vNTbCx/view?usp=sharing"
                    >
                        Link to Internship Certificate
                    </a>
                </div>

            </div>
        </div>

    </section>
</template>

<style scoped>
.ref-card {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
    border-radius: 0.75rem;
    padding: 1.5rem;
    transition: border-color 0.25s ease;
}
.ref-card:hover {
    border-color: rgba(167, 139, 250, 0.3);
}
</style>
