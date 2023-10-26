import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), pluginRewriteAll()],
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 5173, 
    },
    resolve: {
        alias: {
            "src": path.resolve(__dirname, "./src/"),
        },
        extensions: ['.ts', '.tsx']
    },
})