<template>
    <header class="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between
     border border-solid py-6 bg-slate-900 border-transparent"
     @mouseleave="HideAllMenus()">
        
        <a href="/" class="font-medium ">
            <b class="font-bold">Ben</b> Rosenmöller
        </a>
        

        <div class="sm:flex items-center gap-4 hidden">
            <a v-for="tab in tabs" @mouseenter="HideAllMenus()" :href="'/' + tab.link" class="duration-200 hover:text-violet-400 flex justify-between">
                <p>{{tab.name}}</p>
            </a>


            <div v-for="(tab, index) in tabsWithChildren">
                <button @mouseenter="ShowMenu(index)" class="duration-200 hover:text-violet-400 flex justify-between">
                    <p>{{tab.name}}</p>
                    <FontAwesomeIcon :icon="faCaretUp" class="my-auto ml-2 transition-transform ease-in-out duration-500" :class="tab.active ? 'rotate-180' : ''"/>

                </button>

                <div 
                    :id="tab.name"
                    :class="!tab.active ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'"
                    class="transition ease-in-out duration-500 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-700 shadow-lg ring-1 
                        ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                >
                    
                    <div class="py-1" role="none">

                        <a :href="'/' + tab.link" class="text-white block px-4 py-2 text-sm hover:bg-slate-600 focus:bg-slate-500 font-bold" >
                            All {{ tab.name }}
                        </a>

                        <div class="border-t-2 border-slate-400"></div>

                        <a 
                            v-for="child in tab.children"
                            :href="child.link"
                            class="text-white block px-4 py-2 text-sm hover:bg-slate-600 focus:bg-slate-500" 
                        >
                            {{ child.name }}
                        </a>

                    </div>

                </div>
            </div>
        </div>



    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

    const tabs = ref([
        { 
            name: 'Intro', 
            link: '#intro' 
        },
        { 
            name: 'About', 
            link: '#about' 
        },
        { 
            name: 'Timeline', 
            link: '#timeline' 
        },
        { 
            name: 'Skills', 
            link: '#skills' 
        },
    ]);

    const tabsWithChildren = ref([
        {
            active: false,
            name: 'Projects', 
            link: '#projects',
            children: [
                {
                    name: 'Voxel Smith',
                    link: "/voxel-smith"
                },
                {
                    name: 'Enigma Escape',
                    link: "/voxel-smith"
                },
                {
                    name: 'Terrain Generation',
                    link: "/voxel-smith"
                },
                {
                    name: 'Paint Over War',
                    link: "/voxel-smith"
                },
                {
                    name: 'Under Our Wing',
                    link: "/voxel-smith"
                },
            ]
        },
        {
            active: false,
            name: 'Hobbies', 
            link: '#hobbies',
            children: [
                {
                    name: 'Nevas Buildings',
                    link: "/voxel-smith"
                },
                {
                    name: 'Music',
                    link: "/voxel-smith"
                },
            ]
        },
    ]);

    function ShowMenu(index){
        for (let i = 0; i < tabsWithChildren.value.length; i++) {
            const element = tabsWithChildren.value[i];

            if (index == i){
                element.active = true;
            }
            else {
                element.active = false;
            }
        }
    }

    function HideAllMenus(){
        for (let i = 0; i < tabsWithChildren.value.length; i++) {
            const element = tabsWithChildren.value[i];
            element.active = false;
        }
    }
    
</script>
