<template>
    <div class="flex md:flex-row flex-col-reverse justify-between md:my-10 my-2 mx-auto md:w-3/5 lg:text-xl text-lg">
        <div class="md:block flex flex-col md:flex-row justify-center">
            <span class="md:block flex justify-center">Contact me at </span>
            <a href="mailto:rosenmollerben@gmail.com" target="_blank" class="text-violet-400 fancy-link">
                rosenmollerben@gmail.com
            </a>
        </div>
        <div class="flex md:justify-end justify-center space-x-5">
            <a href="https://github.com/brosenmoller" target="_blank">
                <FontAwesomeIcon :icon="faGithub" />
            </a>
            <a href="https://www.linkedin.com/in/benrosenmoller/" target="_blank">
                <FontAwesomeIcon :icon="faLinkedin" />
            </a>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

</script>