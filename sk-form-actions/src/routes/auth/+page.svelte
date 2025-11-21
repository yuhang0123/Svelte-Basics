<script>
	import { enhance } from '$app/forms';
    import {page} from '$app/stores'
    export let form

    const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<!-- use:enhance submit form through fetch, thus no reload -> faster -->
<form method="post" action="?/login&redirectTo={redirectTo}" use:enhance>
    <p>{form?.message || ''}</p>

    <!-- value="{form?.username ?? ''} is to keep the value type even if username is provided only" -->
    <input type="text" name="username" placeholder="Username" value="{form?.username ?? ''}"> 
    <input type="text" name="password" placeholder="Password" >
    <button type="submit">Login</button>
    <button formaction="?/register&redirectTo={redirectTo}">Register</button>
</form>