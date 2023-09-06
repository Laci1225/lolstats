import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/eun-api": {
                target: "https://eun1.api.riotgames.com/lol",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/eun-api/, ''),
            },
            "/europe-api": {
                target: "https://europe.api.riotgames.com/lol",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/europe-api/, ''),
            }
        }
    }
})
