import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Hub/tree/gh-pages",
  plugins: [react()],
});
