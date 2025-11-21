<script>
    import { invalidate, invalidateAll } from '$app/navigation';
    export let data;

    function refresh() {
        // invalidate('http://localhost:4000/stocks')  - without depends argument
        invalidate('stocks:actively-trading') // - with depends argument
        invalidateAll(); // apply on all load()
    }
</script>

<h1>Actively Trading Stocks</h1>

{#each data.stocks as stock}
    <h2>{stock.symbol} - ${stock.price}</h2>
{/each}

<button on:click={refresh}>Refresh</button>