import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/components/**'],
      exclude: [
        'src/components/**/*.stories.*',
        'src/ui/**',
        'src/**/types/**',
        'src/**/index.ts',
      ],
    },
  },
})
