import {json} from '@sveltejs/kit'

export const load = async (loadEvent) => {
    const {fetch, depends} = loadEvent;
    depends('actively-trading');
    const response = await fetch ('http://localhost:4000/stocks')
    const stocks = await response.json();
    return {stocks}
}