import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), pluginRewriteAll()],
    resolve: {
        alias: {
            "src": path.resolve(__dirname, "./src/"),
        },
        extensions: ['.ts', '.tsx']
    },
})