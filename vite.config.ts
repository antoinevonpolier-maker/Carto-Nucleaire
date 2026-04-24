import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.VITE_REPOSITORY_NAME ?? "nuclear-commercial-map";
const base = process.env.GITHUB_PAGES === "true" ? `/${repositoryName}/` : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
