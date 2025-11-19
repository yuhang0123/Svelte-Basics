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
