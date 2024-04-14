<template>
    <div class="md:hidden flex">
        <button id="hamburger" @click="SetActive(!active)" class="menu z-[10]" aria-label="Main Menu">
            <svg width="40" height="40" viewBox="0 0 100 100">
                <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path class="line line2" d="M 20,50 H 80" />
                <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
        </button>

        <div class="absolute right-0 top-0 transition-transform ease-in-out duration-500 z-[5] 
                    shadow-lg w-2/3 rounded-b-lg p-5 text-lg origin-top-right bg-slate-700"
             :class="active ? 'translate-x-0' : 'translate-x-full' "
        >

            <a v-for="tab in tabs" @click="SetActive(false)" :href="tab.link" class="duration-200 p-2 hover:text-violet-400 flex justify-between">
                <p>{{tab.name}}</p>
            </a>

            <div v-for="(tab, index) in tabsWithChildren" :key="index">

                <button @click="ToggleMenu(index)" class="duration-200 p-2 hover:text-violet-400 flex justify-between">
                    <p>{{tab.name}}</p>
                    <FontAwesomeIcon :icon="faCaretUp" class="my-auto ml-2 transition-transform ease-in-out duration-200" :class="tab.active ? 'rotate-180' : ''"/>
                </button>

                <div
                    :id="tab.name"
                    class="p-2"
                    :class="!tab.active ? 'absolute opacity-0 pointer-events-none' : 'opacity-100'"
                >

                    <div 
                        class="py-1 "
                        role="none"
                    >

                        <a :href="tab.link" @click="SetActive(false)" class="text-white block pb-2 text-sm hover:bg-slate-600 focus:bg-slate-500 font-bold" >
                            All {{ tab.name }}
                        </a>

                        <div class="border-t-2 border-slate-400"></div>

                        <a 
                            v-for="child in tab.children"
                            @click="SetActive(false)"
                            :href="child.link"
                            class="text-white block px-4 py-2 text-sm hover:bg-slate-600 focus:bg-slate-500" 
                        >
                            {{ child.name }}
                        </a>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

    let active = ref(false);

    const props = defineProps({
        tabs: Array,
        tabsWithChildren: Array,
    });

    function SetActive(bool){
        active.value = bool;

        const hamburgerIcon = document.getElementById('hamburger');
        hamburgerIcon.classList.toggle('opened');
        hamburgerIcon.setAttribute('aria-expanded', hamburgerIcon.classList.contains('opened'))
    }

    function ToggleMenu(index){
        for (let i = 0; i < props.tabsWithChildren.length; i++) {
            const element = props.tabsWithChildren[i];

            if (index == i){
                element.active = !element.active;
            }
            else {
                element.active = false;
            }
        }
    }

</script>

<style scoped>
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: white;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>