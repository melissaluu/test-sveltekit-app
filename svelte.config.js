import adapterStatic from '@sveltejs/adapter-static'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const pathBase = process.env.NODE_ENV === 'development' ? '' : '/test-sveltekit-app';

// console.log(process.env.NODE_ENV, pathBase)

const config = {
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: adapterStatic(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
    paths: {
      base: pathBase,
      assets: pathBase
    },
  },
}

export default config
