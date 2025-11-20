<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<!-- This <slot /> means the content from every +page.svelte file -->
<!-- 
    If we create another +layout.svelte in products/productId, the page will have two layout combined together
    <slot /> -- <slot /> -- html code
-->
<Header />
<slot />
<Footer />