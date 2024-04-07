<template>
    <div class="w-full border-4 border-white rounded-lg p-5">
        <h1 class="font-extrabold text-2xl mb-4">{{ title }}</h1>
        <div class="flex justify-between space-x-5">
            <img :src="img" class="w-1/5">
            <p class="w-4/5 pr-5">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
  title: String,
  img: String,
  description: String
})

</script>