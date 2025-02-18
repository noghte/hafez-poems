# hafez-poems

Displaying a random poem from Hafez's Divan, written in Svelte as a serverless app.

## Running the app

- After cloning the repo, run `npm install` (or `pnpm install` or `yarn`) to install dependencies.
- Run `npm run dev` to start the development server. 
    - It will run on port `3034` by default.
    - You can run the app on a different port by modifying `"dev": "vite dev --port 3034"` in the `package.json` file.

## Deploying the app

First, build the app by running `npm run build`.

### Netlify
Look at the [Netlify docs](https://docs.netlify.com/integrations/frameworks/sveltekit/#deployment) for deploying SvelteKit apps on Netlify.

In a nutshell, the `@sveltejs/adapter-netlify` is already configured in the `svelte.config.js` file, and the configuration for Netlify is in the `netlify.toml` file.



### Virtual Machines
Copy the build:
- `scp -r ./build/*  package.json ecosystem.config.cjs USERNAME@SERVER:/var/www/poems.farsi.rocks`
Copy dbs:
- `scp -r ./dbs USERNAME@SERVER:/var/www/poems.farsi.rocks`
- Change contents of `ecosystem.config.cjs` to your needs.
    - PORT number should match the port you are using in nginx or any other reverse proxy.
- Run `pm2 start ecosystem.config.cjs` to start the app.
- 
# Resources

- https://awesome-svelte-and-d3.netlify.app/