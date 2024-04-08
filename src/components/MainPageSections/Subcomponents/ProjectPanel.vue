<template>
    <div class="w-full border-2 border-white rounded-lg p-5 lg:mt-0 mt-4">
        <h1 class="font-extrabold lg:text-2xl md:text-xl text-lg mb-4">{{ title }}</h1>
        <div class="sm:flex sm:justify-between sm:space-x-5 sm:space-y-0 space-y-5">

            <img :src="getImageUrl()" class="sm:w-2/5 object-contain rounded">
            <div class="sm:w-3/5 pr-5 flex flex-col justify-between">
              <p class="overflow-hidden" v-html="description"></p>
              <div>
                <a :href="link" class="fancy-link text-violet-400" target="_blank">To Page</a>
              </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  img: String,
  link: String,
  description: String
});

function getImageUrl() {
  return new URL(`../../../assets/${props.img}`, import.meta.url);
}

</script>