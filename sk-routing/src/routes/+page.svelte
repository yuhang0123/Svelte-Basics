<script>
    import {goto, beforeNavigate, afterNavigate} from '$app/navigation';

    const handleClick = () => {
        goto('/products')
    };

    beforeNavigate((navigation) => {
        console.log({before : navigation});
    });

    afterNavigate((navigation) => {
        console.log({after : navigation});
    });
</script>

<h1>Welcome home!</h1>

<button on:click={handleClick}>Place Order</button>