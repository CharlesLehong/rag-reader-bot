import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: "/rag-reader-bot",
    server: {
        host: "::",
        port: 8080,
        allowedHosts: ["localhost", "127.0.0.1", "3e6ec4796e9d.ngrok-free.app", "CharlesLehong.github.io"],
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
