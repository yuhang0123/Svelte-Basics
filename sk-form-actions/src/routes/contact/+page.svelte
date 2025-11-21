<script>
    let name = '';
    let email = '';
    let message = '';

    // snapshot
    export const snapshot = {
        capture: () => {
            return {name, email, message}
        },
        restore: (data) => {
            name = data.name;
            email = data.email;
            message = data.message;
        }
    }
</script>

<h1>Contact form</h1>

<form method="POST">
    <div><input type="text" name="name" placeholder="Name" bind:value={name}></div>
    <div><input type="text" name="email" placeholder="Email" bind:value={email}></div>
    <div><input type="text" name="message" placeholder="Messsage" bind:value={message}></div>
    <button>Send</button> <a href="/">Cancel</a>
</form>