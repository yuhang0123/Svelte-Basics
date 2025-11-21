import { fail, redirect } from '@sveltejs/kit';

// export const load = () => {}

export const actions = {
    // automatically invoke and get the right argument
    // don't need client side javascript and send to server anymore
    login: async ({request, cookies, url}) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        if (!username || !password) {
            // return {
            //     message : 'Missing username or password'
            // }
            return fail(400, {
                username,
                message: 'Missing username or password'
            })
        }

        cookies.set('username', username, {path: '/'})
        throw redirect(303, url.searchParams.get('redirectTo') || '')
        return {message: 'Logged in'};

    },

    register: async ({request, cookies}) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        if (!username || !password) {
            return {
                message : 'Missing username or password'
            }
        }

        cookies.set('username', username, {path: '/'})
        return {message: 'Registerd'};

    } 
}