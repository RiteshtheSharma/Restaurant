// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            menu: resolve(__dirname, 'menu/index.html'),
            contact : resolve(__dirname, 'contact/index.html')
          } }},
  plugins: [
    Inspect(),
    
   
  ],
}