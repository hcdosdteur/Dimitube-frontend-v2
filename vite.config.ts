import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import reactCssDefault from 'rollup-plugin-react-scoped-css'
//@ts-ignore
const reactCss = reactCssDefault.default as typeof reactCssDefault;

// https://vitejs.dev/config/
console.log(reactCss, react)
export default defineConfig({
  plugins: [react(), reactCss()],
  css:{ 
    preprocessorOptions:{
      scss:{
        additionalData:`@import "/src/global.scss";`
      }
    }
  },
  
})
