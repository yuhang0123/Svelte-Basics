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

<strong>Note:</strong>If the path name is not found from the folders, 404 pages will render.

<hr>

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
