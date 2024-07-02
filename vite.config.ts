import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from 'tailwindcss'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
import {name} from './package.json'

const formattedName = name.match(/[^/]+$/)?.[0] ?? name
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: formattedName,
      fileName: format => `${formattedName}/${format}/index.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
})
