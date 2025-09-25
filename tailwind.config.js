import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  // ...
  // make sure it's pointing to the ROOT node_module
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [
  heroui({
    themes: {
      light: {
        colors: {
          // Custom colors for light theme
          primary: {
            // 50: "#eff6ff",
            // 100: "#dbeafe",
            // 500: "#3b82f6",
            // 900: "#1e3a8a",
            // DEFAULT: "#3b82f6",
          }
        }
      },
      dark: {
        colors: {
          // Custom colors for dark theme
          primary: {
            // 50: "#0f172a",
            // 100: "#1e293b",
            // 500: "#6366f1",
            // 900: "#c7d2fe",
            // DEFAULT: "#6366f1",
          }
        }
      },
      // You can add custom themes
      purple: {
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#8b5cf6",
            foreground: "#ffffff",
          },
          focus: "#8b5cf6",
        }
      }
    }
  })
];