<template>
    
    <section :id="id" class="section-main">

        <div class="lg:w-1/5 pr-5">
            <h1 class="flex lg:justify-end justify-start font-extrabold text-2xl uppercase text-violet-400">
                    {{ title }}
            </h1>
        </div>

        <div class="lg:w-4/5 pl-5 lg:mt-0 mt-4 flex flex-wrap lg:flex-nowrap lg:justify-start">
            <slot></slot>

        </div>

    </section>

</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
});

</script>