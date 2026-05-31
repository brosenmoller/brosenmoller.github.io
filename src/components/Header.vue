<template>
    <header class="sticky z-[5] top-0 duration-200 px-6 flex items-center justify-between
     border border-solid py-6 bg-slate-900 border-transparent"
     @mouseleave="HideAllMenus()">
        
        <a href="/" class="font-medium flex items-center gap-2.5 group duration-200">
            <FontAwesomeIcon :icon="faHouse" class="text-violet-400 text-sm group-hover:text-violet-300 duration-200" />
            <span class="group-hover:text-violet-400 duration-200"><b class="font-bold">Ben</b> Rosenmöller</span>
        </a>

        <HeaderLinksDesktop :tabs="tabs" :tabsWithChildren="tabsWithChildren" />
        <HeaderLinksMobile :tabs="tabs" :tabsWithChildren="tabsWithChildren" />

    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faHouse } from '@fortawesome/free-solid-svg-icons';
    import HeaderLinksDesktop from './HeaderLinksDesktop.vue';
    import HeaderLinksMobile from './HeaderLinksMobile.vue';

    const tabs = ref([
        {
            name: 'Intro', 
            link: '/#intro' 
        },
        {
            name: 'Skills', 
            link: '/#skills' 
        },
        {
            name: 'Background', 
            link: '/#about' 
        },
        {
            name: 'Timeline', 
            link: '/#timeline' 
        },
        {
            name: 'References', 
            link: '/#refrences' 
        },
    ]);

    const tabsWithChildren = ref([
        {
            active: false,
            name: 'Projects', 
            link: '/#projects',
            children: [
                {
                    name: 'Liturnian',
                    link: "/liturnian"
                },
                {
                    name: 'Forensick!',
                    link: "/forensick"
                },
                {
                    name: 'Professor Bubble',
                    link: "/professor-bubble"
                },
                {
                    name: 'Voxel Smith',
                    link: "/voxel-smith"
                },
                {
                    name: 'Terrain Generation',
                    link: "/terrain-generation"
                },
                {
                    name: 'Enigma Escape',
                    link: "/enigma-escape"
                },
                // {
                //     name: 'Paint Over War',
                //     link: "/paint-over-war"
                // },
                // {
                //     name: 'Under Our Wing',
                //     link: "/#under-our-wing"
                // },
            ]
        },
        {
            active: false,
            name: 'Hobbies', 
            link: '/#hobbies',
            children: [
                {
                    name: 'Nevas Buildings',
                    link: "/#nevas-buildings"
                },
                {
                    name: 'Music',
                    link: "/#hobby-music"
                },
            ]
        },
    ]);
    
    function HideAllMenus(){
        for (let i = 0; i < tabsWithChildren.value.length; i++) {
            const element = tabsWithChildren.value[i];
            element.active = false;
        }
    }
    
</script>