import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a GitHub Pages project site, set this to '/repository-name/'.
export default defineConfig({ plugins: [react()], base: '/' });
