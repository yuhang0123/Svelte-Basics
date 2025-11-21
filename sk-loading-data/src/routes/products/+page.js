import { json } from "@sveltejs/kit";
import Product from "./Product.svelte";

// load function returns become the data prop in +page.svelte
export const load = async(loadEvent) => {
    console.log('Load function called in page.js')
    const title = "List of available products";
    const {fetch, data} = loadEvent

    // window fetch without line 6 (not recommended)
    // loadEvent fetch with line 6 (recommended)
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();

    const notification = 'End of season sale!'

    // let server load to return the data and let universal load to return the component
    return {...data, Component : Product, notification} 
}

// can configure to false in +page.js and +page.server.js
export const ssr = true;
export const csr = true;
export const prerender = true;