<template>
  <div class="bg-slate-900 text-white relative">
    <div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
      <Header />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>