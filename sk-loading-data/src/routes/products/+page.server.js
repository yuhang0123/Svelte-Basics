import { json } from "@sveltejs/kit";

// load function returns become the data prop in +page.svelte
export const load = async(serverLoadEvent) => {
    console.log('Load function called in page.server.js')
    const title = "List of available products";
    const {fetch} = serverLoadEvent

    // window fetch without line 6 (not recommended)
    // loadEvent fetch with line 6 (recommended)
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();

    return {title, products}
}