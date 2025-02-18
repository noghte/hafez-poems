// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-netlify'; //inherits from adapter-auto
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
// import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
      out: 'build'
    })
  },
  preprocess: preprocess()
};

export default config;