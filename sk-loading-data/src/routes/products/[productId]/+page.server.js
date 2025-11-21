import { json } from "@sveltejs/kit";
import {redirect} from '@sveltejs/kit';

// load function returns become the data prop in +page.svelte
export const load = async(serverLoadEvent) => {
    const title = "Product Detail";
    // url : all the details of that url (eg hostname, protocol)
    // route : path
    const {fetch, params, url, route} = serverLoadEvent
    const {productId} = params;

    console.log({params, url, route: route.id})

    /*
        ERROR

        if (productId > 3) {
        throw error (404, {
            "message" : 'Product Not Found',
            "hint" : "Try a different path"
        })
    }
    */

    // Redirect
    if (productId > 10) {
        throw redirect('307', '/products')
    }

    // window fetch without line 6 (not recommended)
    // loadEvent fetch with line 6 (recommended)
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();

    const notification = 'End of season sale! 50% off!';
    return {title, product, notification}
}

// if auto, those pages not specified in svelte.config.js will undergo SSR
export const prerender = auto;