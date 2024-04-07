<template>
    <header class="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between
     border border-solid py-6 bg-slate-900 border-transparent">
        
        <h1 class="font-medium ">
            <b class="font-bold">Ben</b> Rosenmöller
        </h1>
        
        <div class="sm:flex items-center gap-4 hidden">
            <a v-for="tab in tabs" :href="tab.link" class="duration-200 hover:text-violet-400">
                <p>{{tab.name}}</p>
            </a>
        </div>

    </header>
</template>

<script setup>
    import { ref } from 'vue'

    const tabs = ref([
        { name: 'Intro', link: '#intro' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
    ])
</script>
