<template>
    <ProjectPage
        :title="'Enigma Escape'"
        :subtitle="'Team of 5 · 1 month full time'"
        :description="''"
    >
    <div class="flex justify-start flex-col gap-12 w-full xl:px-20 md:px-5 p-2 lg:text-lg text-base">

        <!-- Hero: trailer -->
        <section class="xl:px-0 px-5">
            <div class="rounded-xl overflow-hidden glow-frame max-w-4xl mx-auto">
                <LiteYouTubeEmbed
                    id="NIxikwfLS8Y"
                    title="Enigma Escape Trailer Video"
                />
            </div>
        </section>

        <!-- Overview text -->
        <section class="xl:px-0 px-5">
            <h2 class="font-bold text-3xl mb-4">Overview</h2>
            <p class="lg:w-3/4 text-slate-300">
                Enigma Escape is a game I developed with a team of 5 for Project Hybrid of the second year
                Games and Interaction at HKU. In this, we had to bring the digital and physical worlds together.
                The team consisted of me, Nina Buurman, Erik van der Meer, Dominique van Fliert and Cas Wellink.
            </p>
            <p class="lg:w-3/4 text-slate-300 mt-4">
                We did this by developing a game in which you play a digital 2D platformer controlled by a
                physical puzzle. The physical puzzle consists of a grid and different shaped blocks. These blocks
                can be placed in the grid like a jigsaw puzzle, from then on they act as buttons to control the
                game. Each block is associated with one particular action. The puzzle consists of recognizing
                which actions are needed in a level and then placing those blocks together on the grid. This
                project was created using C++ with Arduino and C# with Unity.
            </p>
        </section>

        <!-- Process -->
        <section class="feature-card lg:flex-row-reverse">
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                <span class="feature-tag">Design &amp; Electronics</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">Process</h3>
                <p class="text-slate-300">
                    Together with Nina Buurman, I worked on the technical part of this project, I mostly on code and
                    electronics and she on creating the structure of the device.
                </p>
                <p class="mt-4 text-slate-300">
                    The most important challenge I had to overcome was developing a system that could detect a specific
                    block on any place on the board and then detect a click from that block. We considered several
                    different options, such as shape recognition, translucent coloured blocks &amp; colour sensor,
                    resistors, barcodes, RFID tags, radio transceivers or recognition by number of pins. After some
                    initial testing I went for the solution using different resistors, as it would be cheap, easy to
                    implement and small.
                </p>
            </div>
            <div class="lg:w-1/2 w-full min-h-[16rem]">
                <img src="../../assets/EnigmaEscape/EnigmaEscapeProcess14.jpg" alt="Enigma Escape build overview"
                     class="w-full h-full object-cover">
            </div>
        </section>

        <!-- Developing the technology -->
        <section class="feature-card">
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                <span class="feature-tag">Electrical Engineering</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">Developing the Technology</h3>
                <p class="text-slate-300">
                    First, I created a virtual prototype in TinkerCAD in which I wanted to test whether I could
                    measure how much resistance goes through an Analog Pin. The calculation works by using a reference
                    resistor and then connecting the Analog Pin between the two resistors. Based on the reduction in
                    voltage, you can then calculate the other resistor.
                </p>
                <p class="mt-4 text-slate-300">
                    When building it with real electronics, I noticed that we had to take an error margin into account
                    because the measurements are not always accurate. I already had many different resistors lying
                    around so I chose 100 kΩ for the reference resistor and then 5.1, 10, 20, 51, 68 and 100 kΩ for
                    the 6 different player actions.
                </p>
            </div>
            <div class="lg:w-1/2 w-full flex flex-row gap-4 lg:p-6 p-5 justify-center items-start">
                <img src="../../assets/EnigmaEscape/EnigmaEscapeProcess12.jpg" alt="TinkerCAD prototype"
                     class="w-1/2 rounded-lg object-contain">
                <img src="../../assets/EnigmaEscape/EnigmaEscapeProcess13.jpg" alt="Resistor setup"
                     class="w-1/2 rounded-lg object-contain">
            </div>
        </section>

        <!-- Assembling the Device -->
        <section class="feature-card lg:flex-row-reverse">
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:px-8 p-5">
                <span class="feature-tag">Hardware Assembly</span>
                <h3 class="font-bold text-2xl mt-3 mb-4">Assembling the Device</h3>
                <p class="text-slate-300">
                    To assemble the device, we used copper tape for the connection points between the blocks and the
                    device. This way, the players could easily put the blocks on the tape and wouldn't have to click
                    something into place. Although this solution worked we did have some trouble with loose connections
                    sometimes.
                </p>
                <p class="mt-4 text-slate-300">
                    Because we had 15 grid cells and only 6 analog pins on the Arduino, I coded a solution in C++ to
                    use a multiplexer that could switch between the different cells and read all of them separately.
                    Here you can see an image of the plan and then below several images about the build process.
                </p>
            </div>
            <div class="lg:w-1/2 w-full flex flex-row gap-4 lg:p-6 p-5 justify-center items-start">
                <img src="../../assets/EnigmaEscape/EnigmaEscapeProcess18.jpg" alt="Device assembly plan"
                     class="w-1/2 rounded-lg object-contain">
                <img src="../../assets/EnigmaEscape/EnigmaEscapeProcess16.jpg" alt="Device assembly photo"
                     class="w-1/2 rounded-lg object-contain">
            </div>
        </section>

        <!-- Gallery -->
        <ImageGallery :screenshots="screenshots" alt="Enigma Escape build process" />

    </div>
    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../../components/ProjectPage.vue';
import ImageGallery from '../../components/ImageGallery.vue';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';

import p1  from '../../assets/EnigmaEscape/EnigmaEscapeProcess1.jpg?url';
import p5  from '../../assets/EnigmaEscape/EnigmaEscapeProcess5.jpg?url';
import p6  from '../../assets/EnigmaEscape/EnigmaEscapeProcess6.jpg?url';
import p7  from '../../assets/EnigmaEscape/EnigmaEscapeProcess7.jpg?url';
import p8  from '../../assets/EnigmaEscape/EnigmaEscapeProcess8.jpg?url';
import p9  from '../../assets/EnigmaEscape/EnigmaEscapeProcess9.jpg?url';
import p10 from '../../assets/EnigmaEscape/EnigmaEscapeProcess10.jpg?url';
import p11 from '../../assets/EnigmaEscape/EnigmaEscapeProcess11.jpg?url';
import p17 from '../../assets/EnigmaEscape/EnigmaEscapeProcess17.jpg?url';

const screenshots = [p17, p1, p5, p6, p7, p8, p9, p10, p11];
</script>

<style scoped>
.glow-frame {
    box-shadow: 0 0 35px rgba(167, 139, 250, 0.25), 0 0 0 1px rgba(167, 139, 250, 0.3);
}
</style>
