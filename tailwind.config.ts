import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#161411",
        mute: "#6B655C",
        paper: "#F6F2EB",
        sand: "#EBE4D8",
        line: "#DDD5C8",
        accent: "#8A5A32",
        "accent-dark": "#6E4626",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1200px" },
    },
  },
  plugins: [],
};
export default config;
