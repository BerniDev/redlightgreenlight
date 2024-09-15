import { defineConfig } from "cypress";

const port = process.env.VITE_PORT || 4173;

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${port}`,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
