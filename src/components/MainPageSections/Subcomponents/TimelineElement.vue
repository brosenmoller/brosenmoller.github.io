<template>
    <li class="mb-8 ms-4">
        <div class="absolute w-2.5 h-2.5 rounded-full mt-1.5 -start-1.5 bg-violet-500 ring-2 ring-slate-900"></div>
        <time class="mb-1 text-sm font-normal text-slate-500 block">{{ time }}</time>
        <h3 class="font-bold text-white mb-1">{{ title }}</h3>
        <p class="text-sm text-slate-400 leading-relaxed">{{ description }}</p>
    </li>
</template>

<script setup>
const props = defineProps({
    time: String,
    title: String,
    description: String
});
</script>
