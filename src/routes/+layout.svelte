<script>
    import "../app.pcss";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
</div>

