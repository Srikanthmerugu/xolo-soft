// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            colors: {
              zoho: {
                blue: "#136CFF",
                dark: "#0F3D93",
                navy: "#1A2C47",
                light: "#F5F9FF",
              },
            },
            fontFamily: {
              sans: ["Inter", "system-ui", "sans-serif"],
            },
          },
        },
      },
    }),
  ],
});
