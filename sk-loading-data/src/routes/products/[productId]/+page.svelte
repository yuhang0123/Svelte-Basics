<script>
    export let data;
    const {title, product} = data;
</script>

<h1>{title}</h1>
<div>
    <h2>{product.title} - {product.price}</h2>
    <p>{product.description}</p>
</div>