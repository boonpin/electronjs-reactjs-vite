import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), reactRefresh()],
    root: resolve("."),
    build: { emptyOutDir: true, outDir: "./dist/renderer" },
    base: "./",
    resolve: {
        alias: {
            "@/root": resolve(__dirname, "."),
            "@/src": resolve(__dirname, "src"),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
        modules: {
            localsConvention: "camelCase",
        },
    },
});
