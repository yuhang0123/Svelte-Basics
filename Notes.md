# Svelte vs SvelteKit

### Svelte
- used to build interactive user interfaces (faster than React/Vue)
- component framework for building user itnerfaces

### SvelteKit
- package that uses Svelte for building user interfaces
- have features like routing, server side rendering, authentication
- use it for production ready application

### Pros of Sveltekit
- simplify the process of building a web application for production
- use
    - file based routing
    - pre-rendering
    - api routes
    - data fetching
    - optimize production build system

<br><br>

# Setup 
### Create Project File
Legacy: <code>npm create svelte@latest [file name]</code>
Moderm : <code>npx sv create [file name]</code>

### Choose Template
1. Sveltekit Minimal
    - bare-bones Sveltekit project with only the essential files
    - includes
        - basic Sveltekit routing
        - +page.svelte & +layout.svelte
    - normally used for project that starting from scratch

2. Sveltekit Demo
    - Sveltekit project with many scample features included
    - used for learning features

3. Svelte Library
    - template for building reusable Svelte components that you will publish as a library/package
    - Eg: UI component library / Reusable widgets
    - Used for making reusable component libraries / sharing components across multiple apps

### Choose Features Included
1. Eslint - for code linting (highlight warnings)
2. Prettier - for code formatting
3. Playwright - for browser testing
4. Vitest - for unit testing

### Run the application
<code>npm run dev -- --open </code>

<code>npm run dev</code>


<br><br>

# Project Structure
### Configuration Files
1. package.json
    - contain script and dependencies of the project

Scripts:
1. dev : run application in instant reloading
2. build : compile the application and prepare for deployment
3. preview : start the compiled application in production mode

2. package-lock.json
    - ensure consistency installation of dependencies

3. svelte.config.js
    - Sveltekit configuration files

4. vite.config.js
    - Vite configuration files

5. .eslintrc.cjs
    - Eslint configuration files

6. .eslintignore
    - warnings/stuffs that ignored by Eslint

### .svelte-kit
- folder generated when running build/dev script

### src
1. routes
    - reponsible for entire routing in application

    a. +page.svelte
    - files get served when visiting localhost:5173
    - app.html will use the html element in here to display

    b. +layout.svelte
    - file used for defining layout that wrap one or more pages


<br><br>

# Routing
- file system based routing mechanism
- URL paths that users can access in the browser are defined by files and folders 

### Conventions
1. All routes must be placed inside the <strong>"routes"</strong> folder with the src folder
2. Every file that corresponds to a route must be named +page.svelte
3. Every folder corresponds to a path segment in the browser URL

### How it Works?
1. Create a folder with the name of the path. (Eg about : http://localhost:5173/about)
2. Create a file in the new folder with the name of +page.svelte

<br>
<strong>Note:</strong>If the path name is not found from the folders, 404 pages will render.

<br>
<hr>
<br>

### Dynamic Routing
- create nested folder with naming convention "[<param>]"
- Example: [productId] = http://localhost:5173/products/1 
- the productId could be extracted in JS using <code>$page.params.productId</code>
- See <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-routing\src\routes\products\[productId]\+page.svelte'>here</a>

### Catch All Routes
- create nested folder with naming convention "[...slug]"
- Example: [...slug] = http://localhost:5173/products/hello/world
- all the path could be extracted in JS using <code>$page.params.slug.split("/")</code>
- see <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-routing\src\routes\docs\[...slug]\+page.svelte'>here</a>

### Optional Parameter
- create nested folder with naming convention "[[<param>]]"
- Example: [[lang]] + {lang = "en"} = $page.params = http://localhost:5173/marketing/en or http://localhost:5173/marketing
- Remember there is no other page under the same parent folder
- See <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-routing\src\routes\marketing\[[lang]]\+page.svelte'>here</a>

### Navigating Programmatically
- goto(<path>) : navigate to path specified
- beforeNavigate : callback function that run before navigation
- afterNavigate : callback function that run after navigation
- See <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-routing\src\routes\+page.svelte'>here</a>

### Route Matchers
- define the type / regexp accepted for the path parameter
- matcher file must using this path '/src/params/filename.js'
- application folder use '=[matcher file name]' to define the matcher used
- matcher file : see <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-routing\src\params\integer.js'>here</a>
- application folder : C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-routing\src\routes\products\[productId=integer]


### Conditional (If-else)
```
{if <condition 1>}
    code...
{:else if <condition 2>}
    code...
{:else}
    code...
</if>
```

<br><br>

# Layout
### Layout group
- (<parent folder>) = layout group (means we don't need to specify it when accessing url)
- Example : src/routes/(auth)/login = http://localhost:3751/login

### Breaking out of Layouts
- +page@.svelte : skip all the parent layouts except root
- +page@(auth).svelte : skip layout under auth folder


<br><br>

# API Route
- allow to create RESTful endpoints, giving full control over the response
- no overhead of having to create and configure a separate server
- file naming convention : "+server.js"

### GET request
- export function GET() : Get All
- export function GET(requestEvent) : Get A Record

### POST request
- export async function POST(requestEvent)

### PATCH request
- export async function PATCH(requestEvent)

### DELETE request
- export async function DELETE(requestEvent)

<br><br>

# External Data
### Setup
1. Download json-server : <code>npm i json-server</code>
2. In Package.json file, write the script for json-server : <code>"server-json" : "json-server --watch db.json --port 4000"</code>

### Fetch function
Always use fetch function from loadEvent instead of Window fetch as:
1. allow to get Handler without making an additional request 
    - sveltekit's fetch does not make a real network request for local endpoints\
    - so it is very fast
2. dont need to specify full URL (eg: api/postcodes)
    - sveltekit does server-side rendering (SSR)
    - sveltekit's fetch works before HTML is sent to the browser

### Universal Load Function
- in +page.js
- responsible for loading page data both on server and browser
- not like client routing (eg clicking on link to another page) only browser will receive it, not the server
- can pass Component constructor in props
- use when have to return values that a server load function cannot return

### Server Load Function
- in +page.server.js
- same as universal load function but runs only on the server and not in the browser
- cannot pass Component constructor in props
- use when returning data that involves sensitive information as part of fetching data


<br><br>

# Error
1. import {error} from '@sveltejs/kit' into server load file
2. throw error for specific condition : throw error(<http code>, <object (default message)>)
    - Example1: throw error (404, 'Not Found')
    - Example2: throw error (404, 'message': 'not found', 'hint': 'try again')
3. create +error.svelte file to customize the error page

# Redirect
1. import {redirect} from '@sveltejs/kit' into server load file
2. throw error for specific condition : throw redirect(<http code>, <path>)
    - Example1: throw error (307, '/products')

<br><br>

# Parent Data & Child Data
### Parent Data
- loadEvent will return parent function
- by invoking the parent() will return data sent from parent component: <code>await parent()</code>

### Child Data
- import page from '$app/stores'
- could access the data send from child component using : <code>$page.data.<var></code>

<br><br>

# Promise Unwrapping
- allow all the promise to be executed in parallel
- see <a href = 'C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-loading-data\src\routes\stocks\+page.js'>this</a>

<br><br>

# Data Invalidation
- refetch a url when the data changes
- it will call the load function that fetch the url specified
- could use depends argument to give load function a label & use it in +page.svelte
- invalidateAll() will call all the load functions
- see <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-loading-data\src\routes\stocks\+page.svelte'>here</a>

<br><br>

# Link Options
1. data-sveltekit-preload-data
    - preload data in browser network upon event
    - event could be
        - off
        - hover
        - tap

2. data-sveltekit-preload-code
    - preload code (only) in browser network upon event
    - event could be 
        - off
        - hover
        - tap
        - eager
        - viewport

3. data-sveltekit-reload
    - reload data whenever refresh in page

4. data-sveltekit-noscroll
    - preserve the viewport within pages
    - if im at the bottom on previous page, navigate to next page would be at bottom as well

### Programmatically Preload
see <a href= 'C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-loading-data\src\routes\+page.svelte'>here</a>


<br><br>

# Page Options
- Render component process:
    -> Sveltekit render component on server 
    -> send to client in HTML 
    -> render component in browser to make it interactive (aka hydration)

1. Server-side rendering (SSR)
    - <code>export const ssr = true</code>
2. Client-side rendering (CSR)
    - <code>export const csr = true</code>
3. Prerender 
    - Render all the HTML for pages at build time rather than run time
    - avoid recomputing page for each visitor
    - build process is expensive
    - pre-rendered content can only be updated by building a new version of the application
    - eg: blog pages, e-commerce product pages

### Prerendering
- create a output folder under .svelte-kit
- all HTML files are generated during build time even no request for that
- HTML requested will be sent immediately as no need to request from the server
- <code>export const prerender = true</code>

### Prerendering API routes
- once prerendered, the data will stored in output/dependencies file and not change anymore unless run "build" script again
### Prerendering Dynamic routes
### Prerendering and SSR
- set rendering to "auto"

<br><br>

# Form Actions
- allow to post data to server without relying on client side Javascript
- (if disable javascript in browser, the form will not work)
- define in +page.server.js

### Default & Named Form Actions
- "default" only used when there is one named form action
- it is better to use named form actions to differentiate which DOM has to execute which actions
- see <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-form-actions\src\routes\auth\+page.server.js'>here</a>

### Form Action Validation & Redirects
- import fail from '@sveltejs/kit'
- see <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-form-actions\src\routes\auth\+page.server.js'>here</a>

### Progressive Enhancement
- use "use:enhance" for form tag
- submit form through fetch, thus no reload -> faster
- see <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-form-actions\src\routes\auth\+page.server.js'>here</a>

### Snapshots
- keep the data typed before if the form is not submitted successfully
- see <a href='C:\Coding Bundle\Coding\JavaScript\Sweltekit\sk-form-actions\src\routes\contact\+page.svelte'>here</a>


# Environment Variables
- allow to specify different values basd on the environment like development or testing or production
- allow to safeguard secrets by not bundling them into the code that is shipped to the browser
- PUBLIC prefix is needed to name the variable in .env if import from from "env/static/public" module
- env variables imported from /static are injected into code at build time
- runtime environment variables (value might change once app is deployed) should make use of dynamic modules:
    - env/dynamic/public
    - env/dynamic/private

### Server-only-modules
- only server can access it
- two ways:
    1. create file "/server/secret.js" in lib and import in application file
    2. create file "secrets.server.js" in src folder

<br><br>

# Runes
- symbols used in .svelte / .svelte.js files to control the Svelte compiler

### $state
```
<script>
	let count = $state(0);
</script>

<button onclick={() => count++}>
	clicks: {count}
</button>
```
- allow to create reactive state (aka UI reacts when it is changed)
- when involving class, be careful of "this" as it may refer to different DOM when not implementing correctly
- use it when need a local state or a global state that is independent of a source

1. $state.raw
    - if dont want object and arrays to be deeply reactive
    - not able to change the properties value, only can push a new object to replace it
    ```
    let person = $state.raw({
        name: 'Heraclitus',
        age: 49
    });

    // this will have no effect
    person.age += 1;

    // this will work, because we're creating a new person
    person = {
        name: 'Heraclitus',
        age: 50
    };
    ```

2. $state.snapshot
    - take a static snapshot of $state proxy
    - use when want to pass state to external library / API that dont expect a proxy
    ```
    <script>
	let counter = $state({ count: 0 });

	function onclick() {
		// Will log `{ count: ... }` rather than `Proxy { ... }`
		console.log($state.snapshot(counter));
	}
    </script>
    ```

3. $state.eager
    - use when want to update UI as soon as the state changes (as updates are synchronized as default)
    ```
    <nav>
        <a href="/" aria-current={$state.eager(pathname) === '/' ? 'page' : null}>home</a>
        <a href="/about" aria-current={$state.eager(pathname) === '/about' ? 'page' : null}>about</a>
    </nav>
    ```
4. Share state between modules (2 methods):

    a. Don't reassign it
    ```
    // This is allowed — since we're updating
    // `counter.count` rather than `counter`,
    // Svelte doesn't wrap it in `$.state`
    export const counter = $state({
        count: 0
    });

    export function increment() {
        counter.count += 1;
    }
    ```

    b. Don't directly export it
    ```
    let count = $state(0);

    export function getCount() {
        return count;
    }

    export function increment() {
        count += 1;
    }
    ```

### derived
- disallow state changes inside $derived expressions
- $derived(expression) === $derived.by(() => expression) 
- $derived for short expression and $derived.by for long expression
- use it when value is computed from a source of truth (eg server data)

```

1. Overriding derived values
<script>
	let { post, like } = $props();

	let likes = $derived(post.likes);

	async function onclick() {
		// increment the `likes` count immediately...
		likes += 1;

		// and tell the server, which will eventually update `post`
		try {
			await like();
		} catch {
			// failed! roll back the change
			likes -= 1;
		}
	}
</script>

<button {onclick}>🧡 {likes}</button>
```

2. Overriding deeply reactive items
```
let items = $state([ /*...*/ ]);

let index = $state(0);
let selected = $derived(items[index]);
```

3. Destructing make the variables reactive
```
let { a, b, c } = $derived(stuff());
```

### $effect
```
<script>
	let size = $state(50);
	let color = $state('#ff3e00');

	let canvas;

	$effect(() => {
		const context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);

		// this will re-run whenever `color` or `size` change
		context.fillStyle = color;
		context.fillRect(0, 0, size, size);
	});
</script>

<canvas bind:this={canvas} width="100" height="100"></canvas>
```
- allow to run function that depends on reactive state
- Example: state updates / calling third-party libraries / drawing on <canvas> elements / making network requests
- only run in browser, not during SSR
- useful when:
    - side effects need to interact with real world 
    - cleanup logic is needed (teardown function)

#### Lifecycle & Dependencies
1. Tracking dependencies
    - automatically track which reactive values read (eg $state, $derived)
    - if any of these tracked values change, effect will re-run
    - if read reactive value after "await" or inside "setTimeout", won't tract the dependency

2. Batching & Timing
    - effects run after component is mounted in the DOM
    - multiple changes in a short time will only trigger one effect run

3. Clean-up / teardown
    - effect return a cleanup function which runs before the effect re-runs & when component is destroyed
    - normally used to clear intervals / unsubscribing listeners...

#### Variants
1. $effect.pre
    - runs before DOM updates
    - useful for things like scroll positioning
    ```
    <script>
	import { tick } from 'svelte';

	let div = $state();
	let messages = $state([]);

	// ...

	$effect.pre(() => {
		if (!div) return; // not yet mounted

		// reference `messages` array length so that this code re-runs whenever it changes
		messages.length;

		// autoscroll when new messages are added
		if (div.offsetHeight + div.scrollTop > div.scrollHeight - 20) {
			tick().then(() => {
				div.scrollTo(0, div.scrollHeight);
			});
		}
	});
    </script>

    <div bind:this={div}>
        {#each messages as message}
            <p>{message}</p>
        {/each}
    </div>
    ```

2. $effect.tracking
    - return true/false whether currently inside an effect tracking context
    ```
    <script>
	console.log('in component setup:', $effect.tracking()); // false

	$effect(() => {
		console.log('in effect:', $effect.tracking()); // true
	});
    </script>

    <p>in template: {$effect.tracking()}</p> <!-- true -->
    ```

3. $effect.pending
    - check how many promises are pending in the current "effect boundary"
    - useful to show loading states when doing async stuff
    ```
    <button onclick={() => a++}>a++</button>
    <button onclick={() => b++}>b++</button>

    <p>{a} + {b} = {await add(a, b)}</p>

    {#if $effect.pending()}
        <p>pending promises: {$effect.pending()}</p>
    {/if}
    ```

4. $effect.root
    - does not auto-cleanup like normal effects
    - useful for manual control of nested effects / when want effects persist beyond component lifecycle
    ```
    const destroy = $effect.root(() => {
        $effect(() => {
            // setup
        });

        return () => {
            // cleanup
        };
    });

    // later...
    destroy();
    ```
### $props
```
<script>
    let { adjective } = $props();
</script>

<p>This component is {adjective}</p>

```
- replace "export let propName" in Svelte 4
- use when want to read props passed in from the parent
- don't use when want a component to own its own copy of a prop

#### Fallback values
- destructing allow to declare fallback values (if not set in the parent component)
- fallback values are not reactive proxies
```
let {adjective='happy'} = $props();
```

#### Renaming props
- use "super:"
```
let {super: trouper = 'Hello'} = $props()
```

#### Updating props
- $props() are reactive : if parent update prop, child see the changes
- child able to temporarily override prop value (unless prop is regular object (not bindable))
```
# parent
<script lang="ts">
	import Child from './Child.svelte';
</script>

<Child object={{ count: 0 }} />

# child
<script lang="ts">
	let { object } = $props();
</script>

<button onclick={() => {
	// has no effect
	object.count += 1
}}>
	clicks: {object.count}
</button>
```
- if props is reactive state, still work but will get warning "ownership_invalid_mutation"
```
# parent
<script lang="ts">
	import Child from './Child.svelte';

	let object = $state({count: 0});
</script>

<Child {object} />

# child
<script lang="ts">
	let { object } = $props();
</script>

<button onclick={() => {
	// will cause the count below to update,
	// but with a warning. Don't mutate
	// objects you don't own!
	object.count += 1
}}>
	clicks: {object.count}
</button>
```

#### $props.id
- generate a unique ID for component instance
- useful for linking thing like `<label for='...'>`

### $bindable
```
# parent
<script lang="ts">
	let { value = $bindable(), ...props } = $props();
    <!-- specify fallback value when no prop is passed at all: let {value = $bindable('fallback'), ...props} = $props(); -->
</script>

<input bind:value={value} {...props} />

<style>
	input {
		font-family: 'Comic Sans MS';
		color: deeppink;
	}
</style>

# child
<script lang="ts">
	import FancyInput from './FancyInput.svelte';

	let message = $state('hello');
</script>

<FancyInput bind:value={message} />
<p>{message}</p>
```

### $inspect
```
<script>
	let count = $state(0);
	let message = $state('hello');

	$inspect(count, message); // will console.log when `count` or `message` change
</script>

<button onclick={() => count++}>Increment</button>
<input bind:value={message} />
```
- === console.log (only it will re-run whenever its argument changes)
- track reactive state deeply
- only work in development mode; production builds become noop

1. $inspect(...).with
    - can invoke with a callback which will then be invoked instead of console.log
    ```
    <script>
	let count = $state(0);

    // type is either "init" or "update"
	$inspect(count).with((type, count) => {
		if (type === 'update') {
			debugger; // or `console.trace`, or whatever you want
		}
	});
    </script>

    <button onclick={() => count++}>Increment</button>
    ```

2. $inspect.trace(...)
    - cause surrounding function to be traced in development
    - information will be printed to the console about which pieces of reactive state cause the effect to fire
    ```
    <script>
	import { doSomeWork } from './elsewhere';

	$effect(() => {
		// $inspect.trace must be the first statement of a function body
        // $inspect.trace(label), where label is optional
		$inspect.trace();
		doSomeWork();
	});
    </script>
    ```

### $host
```
# parent
<svelte:options customElement="my-stepper" />

<script lang="ts">
	function dispatch(type) {
		$host().dispatchEvent(new CustomEvent(type));
	}
</script>

<button onclick={() => dispatch('decrement')}>decrement</button>
<button onclick={() => dispatch('increment')}>increment</button>

# child
<script lang="ts">
	import './Stepper.svelte';

	let count = $state(0);
</script>

<my-stepper
	ondecrement={() => count -= 1}
	onincrement={() => count += 1}
></my-stepper>

<p>count: {count}</p>
```
- provide access to the host DOM element when a Svelte component is compiled as a custom element / web component
- Example: allow to dispatch custom events
- Rules:
    1. must set <svelte:options customElement=<tag-name> />
    2. $host() return a real DOM element
    3. naming : increment in parent, child will use onincrement
    4. $host() is not reactive store or derived value









<br><br>

# Deploy
Visit <a href='https://vercel.com'>Vercel</a>

