import { redirect } from "@sveltejs/kit";
import {secretKey} from '$lib/server/secret.js'
import {DB_USER, DB_PASSWORD} from '$env/static/private' // provide direct access to env variable

export const load = ({cookies, url}) => {
    console.log(`Connecting to database with username ${DB_USER} and password ${DB_PASSWORD}`)
    if (!cookies.get('username')) {
        // first time : /auth
        // second time : auth?redirectTo=/news
        // once there is a cookie submitted, will automatically redirect to /news
        throw redirect(307, `/auth?redirectTo=${url.pathname}`)
    }

    const newsAPIKey = 'YOUR_NEWS_API_KEY';
    console.log(newsAPIKey);

    const news = [
        {id:1, title:'News 1'},
        {id:2, title:'News 2'},
        {id:3, title:'News 3'}
    ]

    return {news};
}