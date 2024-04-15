<template>
    <div class="min-h-screen">
        <h1 class="font-extrabold sm:text-5xl text-2xl flex justify-center">{{ title }}</h1>
        <span class="font-thin text-lg flex justify-center">{{ subtitle }}</span>

        <p class="md:text-xl text-lg flex justify-center md:w-2/4 md:mx-auto mx-5 my-5">
          {{ description }}
        </p>

        <slot></slot>
        
    </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  subtitle: String,
});


</script>
