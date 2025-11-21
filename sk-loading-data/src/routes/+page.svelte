<script>
    import {goto, preloadCode, preloadData} from '$app/navigation'

    export let data;
</script>

<h1>Welcome to SvelteKit @ {data.currentTime}</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<a href='/products'>Products</a>

<button 
    type="button"
    on:focus={async () => {
        await preloadCode('/products')
    }}
    on:mouseover={async () => {
        await preloadData('/products')
    }}
    on:click={() => {
        goto('/products')
    }}
>Go to Products</button>