<template>
    <ProjectPage 
        :title="'Enigma Escape'"
        :description="''"
        :subtitle="'Team of 5'"
    >
        <div class="flex justify-start flex-col gap-8 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">
            <section class="xl:flex xl:justify-between lg:gap-8 gap-4">
            
                <div class=" xl:w-1/2 mb-8 xl:mb-0 xl:px-0 px-5">
                    <p class="">
                        Enigma Escape is a game I developed with a team of 5 for Project Hybrid of the second year Games and Interaction at HKU. In this, we had to bring the digital and physical worlds together. 
                    </p>
                    <p class="mt-5">
                        We did this by developing a game in which you play a digital 2D platformer controlled by a physical puzzle. The physical puzzle consists of a grid and different shaped blocks. These blocks can be placed in the grid like a jigsaw puzzle from when they act as buttons to control the game. Each block is associated with one particular action. The puzzle consists of recognizing which actions are needed in a level and then placing those blocks together on the grid. This project was created using C++ with Arduino and C# with Unity.
                    </p>
                    <p class="mt-5">
                        Here you can see a trailer we created for this project posted to the YouTube channel of one of the group members.
                    </p>
                </div>

                <div class="xl:w-1/2 xl:px-0 px-5">
                    <LiteYouTubeEmbed
                        id="NIxikwfLS8Y"
                        title="Enigma Escape Trailer Video"
                    />
                </div>
            </section>

            <h2 class="font-bold text-3xl">Process</h2>

            <!-- <div class="lg:text-lg text-base mb-8 xl:mb-0 xl:px-0 px-5">
                <p class="">
                    Together with one of my team meetings I worked on the technical part of this project, I mostly on code and electronics and she on creating the structure of the device. The most important challenge I had to overcome was developing a system that could detect a specific block on any place on the board and then detect a click from that block. We considered several different options, such as, shape recognition, translucent coloured blocks & colour sensor, resistors (each block has a different resistance), barcodes, RFID tags, radio transceivers or recognition by number of pins. After some initial testing I went for the solution using different resistors, as it would be cheap, easy to implement and small.  
                </p>
            </div> -->

            <section class="flex justify-between xl:flex-row flex-col lg:gap-8 gap-4 xl:mb-5">
                <div class="lg:text-lg text-base xl:w-2/4 mb-8 xl:mb-0 xl:px-0 px-5">
                    <p class="">
                        Together with one of my team meetings I worked on the technical part of this project, I mostly on code and electronics and she on creating the structure of the device. 
                    </p>
                    <p class="mt-5">
                        The most important challenge I had to overcome was developing a system that could detect a specific block on any place on the board and then detect a click from that block. We considered several different options, such as, shape recognition, translucent coloured blocks & colour sensor, resistors (each block has a different resistance), barcodes, RFID tags, radio transceivers or recognition by number of pins. After some initial testing I went for the solution using different resistors, as it would be cheap, easy to implement and small.  
                    </p>
                </div>
                
                <div class="xl:w-2/4 xl:pr-10 xl:px-0 px-5 flex justify-end flex-row gap-4">
                    <img class="" src="../../assets/EnigmaEscape/EnigmaEscapeProcess14.jpg" alt="">
                </div>
            </section>

            <h2 class="text-2xl">Developing the technology</h2>

            <section class="flex justify-between xl:flex-row flex-col lg:gap-8 gap-4 xl:mb-5">
                <div class="lg:text-lg text-base xl:w-2/5 mb-8 xl:mb-0 xl:px-0 px-5">
                    <p class="">
                        First, I created a virtual prototype in TinkerCAD in which I wanted to test whether I could measure how much resistance goes through an Analog Pin. The calculation works by using a reference resistor and then connecting the Analog Pin between the two resistors. Based on the reduction in voltage, you can then calculate the other resistor.
                    </p>
                    <p class="mt-5">
                        When building it with real electronics, I noticed that we had to take an error margin into account because the measurements are not always accurate. I already had many different resistors lying around so I chose 100 kOhm for the reference resistor and then 5.1, 10, 20, 51, 68 and 100 kOh for the 6 different player actions.
                    </p>
                </div>
                
                <div class="xl:w-3/5 xl:pr-10 xl:px-0 px-5 flex justify-start flex-row gap-4">
                    <img class="object-contain object-top w-1/2" src="../../assets/EnigmaEscape/EnigmaEscapeProcess12.jpg" alt="">
                    <img class="object-contain object-top w-1/2" src="../../assets/EnigmaEscape/EnigmaEscapeProcess13.jpg" alt="">
                </div>
            </section>

            <h2 class="text-2xl">Assembling the Device</h2>

            <section class="flex justify-between xl:flex-row flex-col lg:gap-8 gap-4">    
                <div class="xl:w-1/2 xl:pr-10 xl:px-0 px-5 object-contain flex justify-start flex-row gap-4">
                    <img class="object-contain object-top w-1/2" src="../../assets/EnigmaEscape/EnigmaEscapeProcess15.jpg" alt="">
                    <img class="object-contain object-top w-1/2" src="../../assets/EnigmaEscape/EnigmaEscapeProcess16.jpg" alt="">
                </div>

                <div class="lg:text-lg text-base xl:w-1/2 mb-8 xl:mb-0 xl:px-0 px-5">
                    <p class="">
                        To assemble the device, we used copper tape for the connection points between the blocks and the device. This way, the players could easily put the blocks on the tape and wouldn’t have to click something into place. Although this solution worked we did have some trouble with louse connection sometimes.
                    </p>

                    <p class="mt-5">
                        Because we had 15 grid cells and only 6 analog pins on the arduino I coded a solution in c++ to use a multiplexer that could switch between the different cells and read all of them separately. Here you can see an image of the plan and then below several images about the build process.
                    </p>
                </div>
            </section>
            
            <h2 class="text-2xl">Build Process</h2>

            <section>
                <div class="grid grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1 gap-4">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess2.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess3.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess4.jpg" alt="">
                </div>
                <div class="grid grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1 gap-4">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess17.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess1.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess5.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess6.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess7.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess8.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess9.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess10.jpg" alt="">
                    <img class="h-auto max-w-full rounded-lg" src="../../assets/EnigmaEscape/EnigmaEscapeProcess11.jpg" alt="">
                </div>
            </section>

        </div>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

</script>