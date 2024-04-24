<template>
    <div class="min-h-screen">
        <h1 class="font-extrabold sm:text-5xl text-2xl flex justify-center">{{ title }}</h1>
        <span class="font-thin text-lg flex justify-center">{{ subtitle }}</span>

        <section v-if="link != null && link.length > 0" class="flex justify-center text-2xl py-2">
            <a class="flex text-violet-400 fancy-link" :href="link" target="_blank">
                <FontAwesomeIcon :icon="faGithub" />
                <span class="mx-4 -mt-1">GitHub Page</span>
            </a>
        </section>

        <div class="flex justify-center md:w-2/4 md:mx-auto mx-5 my-5">
          <p class="md:text-xl text-lg" v-html="description"></p>
        </div>


        <slot></slot>
        
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const props = defineProps({
  title: String,
  description: String,
  subtitle: String,
  link: String,
});


</script>
