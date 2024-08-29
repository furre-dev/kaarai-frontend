import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'kaar-50': '#fef2f4',
        'kaar-100': '#fde6e9',
        'kaar-200': '#fbd0d9',
        'kaar-300': '#f7aab9',
        'kaar-400': '#f27a93',
        'kaar-500': '#e63f66',
        'kaar-600': '#d42a5b',
        'kaar-700': '#b21e4b',
        'kaar-800': '#951c45',
        'kaar-900': '#801b40',
        'kaar-950': '#470a1f',
        'kaar-white': "#FEF2F4"
      }
    },
  },
  plugins: [],
};
export default config;
