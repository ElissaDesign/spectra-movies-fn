import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/deploy_react_app_github_pages_vercel",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__test__/setup.js",
    coverage: {
      exclude: [...configDefaults.exclude, "**.**js"],
    },
  },
});
