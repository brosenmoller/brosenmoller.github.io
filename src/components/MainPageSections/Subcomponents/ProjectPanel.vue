<template>
    <div :id="project.id" class="w-full border-2 border-white rounded-lg p-5 lg:mt-0 mt-4">
        <h1 class="font-extrabold lg:text-2xl md:text-xl text-lg mb-4">{{ project.title }}</h1>
        <div class="sm:flex sm:justify-between sm:space-x-5 sm:space-y-0 space-y-5">

            <img :src="getImageUrl()" class="sm:w-2/5 object-contain rounded">
            <div class="sm:w-3/5 pr-5 flex flex-col justify-between">
              <p class="overflow-hidden" v-html="project.description"></p>
              <div class="pt-2">

                <RouterLink v-if="project.linkType == 1"
                  :to="project.link" class="fancy-link text-violet-400"
                >
                  {{ project.linkText }}
                </RouterLink>

                <a v-else-if="project.linkType == 2"
                  :href="project.link" target="_blank" class="fancy-link text-violet-400"
                >
                  {{ project.linkText }}
                </a>

              </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  project: Object
});

function getImageUrl() {
  return new URL(`../../../assets/${props.project.img}`, import.meta.url);
}

</script>