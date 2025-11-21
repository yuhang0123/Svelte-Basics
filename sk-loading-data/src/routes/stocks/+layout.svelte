<script>
    export let data;
    const mostActiveStock = data.mostActiveStock;
    const topGainingStock = data.topGainingStock;
    const topLosingStock = data.topLosingStock;
</script>

<h2>{mostActiveStock.symbol}    {topGainingStock.symbol}    {topLosingStock.symbol}</h2>

<slot />
