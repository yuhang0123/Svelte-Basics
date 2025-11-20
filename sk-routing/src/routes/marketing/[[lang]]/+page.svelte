<script>
    import { page } from '$app/stores';

    const greetings = {
        en: 'Hello!',
        es: 'Hola!',
        fr: 'Bonjour!'
    };

    // page.params return an object with all route parameter
    const {lang = 'en'} = $page.params; 
    const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>