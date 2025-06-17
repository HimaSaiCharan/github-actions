import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "github-actions",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
