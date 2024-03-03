// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
    plugins: [Inspect()],
    base:'/vegan_meals/',
 
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          menu:  'menu/index.html',
          contact:  'contact/index.html'
        }
      }
    }

  }
