<template>
    <section class="xl:px-0 px-5">
        <h2 class="font-bold text-3xl mb-6">The Team</h2>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
            <div v-for="member in credits" :key="member.name"
                 class="credit-row" :class="{ 'credit-row-me': member.me }">
                <div class="flex flex-col">
                    <span class="font-semibold">
                        {{ member.name }}
                        <span v-if="member.me" class="text-violet-300 font-normal text-sm">(me)</span>
                    </span>
                    <span class="text-sm text-slate-400">{{ member.role }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    credits: { type: Array, required: true },
});
</script>

<style scoped>
.credit-row {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
}

.credit-row-me {
    border-color: rgba(167, 139, 250, 0.5);
    background: rgba(167, 139, 250, 0.08);
}
</style>
