<script>
    export let form
</script>

<!-- /auth ask the program to go find this form action under "auth" folder -->
<form method="post" action="/auth?/login">
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder="Username" >
    <input type="text" name="password" placeholder="Password" >
    <button type="submit">Login</button>
    <button formaction="/auth?/register">Register</button>
</form>