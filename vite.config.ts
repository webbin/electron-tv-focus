import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import * as path from 'path';
import electron from 'vite-plugin-electron';
// import electronRenderer from "vite-plugin-electron";
// import polyfillExports from "vite-plugin-electron/polyfill-exports";

// import { viteSingleFile } from 'vite-plugin-singlefile';
// import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron([
      {
        entry: 'main.js'
      },
      {
        entry: 'preload.js',
        onstart(options) {
          options.reload();
        }
      }
    ])
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0'
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // file: 'index.js',
        sourcemap: false
      }
    }
  }
});
