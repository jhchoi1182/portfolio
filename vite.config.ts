import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import markdownPlugin from "vite-plugin-remark-rehype";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), markdownPlugin()],
  base: "/portfolio/",
});
