import {json} from '@sveltejs/kit'

export const load = async (loadEvent) => {
    const {fetch} = loadEvent;

    const mostActiveStockResponse = await fetch('http://localhost:4000/most-active-stock')
    const topGainingStockResponse = await fetch('http://localhost:4000/top-gaining-stock')
    const topLosingStockResponse = await fetch('http://localhost:4000/top-losing-stock')

    /*
    Slower json() as it serialize these three

    const mostActiveStock = await mostActiveStockResponse.json()
    const topGainingStock = await topGainingStockResponse.json()
    const topLosingStock = await topLosingStockResponse.json()
    */

    // faster due to parallelism
    // only work for top-level promise (aka it is not wrapped in another container)
    return {
        mostActiveStock : await mostActiveStockResponse.json(),
        topGainingStock : await topGainingStockResponse.json(),
        topLosingStock : await topLosingStockResponse.json()
    }
}