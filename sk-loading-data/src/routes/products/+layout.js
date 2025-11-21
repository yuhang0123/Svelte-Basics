import { json } from '@sveltejs/kit';

export const load = async (loadEvent) => {
    const {fetch, parent} = loadEvent;
    const parentData = await parent(); // data sent from root layout
    const {username} = parentData;
    const title = "Featured Products";
    const response = await fetch("http://localhost:4000/products")
    const featuredProducts = await response.json()

    return {
        username,
        title,
        featuredProducts
    }
}