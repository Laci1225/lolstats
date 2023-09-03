import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://eun1.api.riotgames.com/lol",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            "/apii": {
                target: "https://europe.api.riotgames.com/lol",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/apii/, ''),

            }
        }
    }
})
