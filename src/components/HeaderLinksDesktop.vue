<template>
    <div class="md:flex items-center gap-4 hidden">
        <a v-for="tab in tabs" @mouseenter="HideAllMenus()" :href="tab.link" class="duration-200 hover:text-violet-400 flex justify-between">
            <p>{{tab.name}}</p>
        </a>

        <div v-for="(tab, index) in tabsWithChildren" class="relative">

            <button @mouseenter="ShowMenu(index)" class="duration-200 hover:text-violet-400 flex items-center gap-1.5">
                <p>{{tab.name}}</p>
                <FontAwesomeIcon :icon="faCaretUp" class="text-xs transition-transform ease-in-out duration-300" :class="tab.active ? 'rotate-180' : ''"/>
            </button>

            <div
                :id="tab.name"
                :class="!tab.active ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'"
                class="transition ease-in-out duration-300 absolute left-1/2 -translate-x-1/2 z-10 mt-3 w-52 origin-top
                       rounded-xl bg-slate-800 border border-slate-600/50 shadow-2xl shadow-black/50"
                role="menu"
            >
                <div class="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-slate-800 border-l border-t border-slate-600/50 rotate-45"></div>

                <div class="py-2 relative" role="none">

                    <a :href="tab.link" class="text-violet-400 font-semibold flex items-center px-4 py-2.5 text-sm hover:bg-slate-700/60 rounded-lg mx-1.5 transition-colors duration-150">
                        All {{ tab.name }}
                    </a>

                    <div class="border-t border-slate-600/40 my-1 mx-3"></div>

                    <a
                        v-for="child in tab.children"
                        :href="child.link"
                        class="text-slate-300 block px-4 py-2 text-sm hover:text-white hover:bg-slate-700/60 rounded-lg mx-1.5 transition-colors duration-150"
                    >
                        {{ child.name }}
                    </a>

                </div>

            </div>
        </div>

    </div>
</template>


<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

    const props = defineProps({
        tabs: Array,
        tabsWithChildren: Array,
    });

    function ShowMenu(index){
        for (let i = 0; i < props.tabsWithChildren.length; i++) {
            const element = props.tabsWithChildren[i];

            if (index == i){
                element.active = true;
            }
            else {
                element.active = false;
            }
        }
    }

    function HideAllMenus(){
        for (let i = 0; i < props.tabsWithChildren.length; i++) {
            const element = props.tabsWithChildren[i];
            element.active = false;
        }
    }

</script>
