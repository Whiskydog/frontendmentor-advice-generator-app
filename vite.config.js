import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/frontendmentor-advice-generator-app",
  plugins: [react()],
});
