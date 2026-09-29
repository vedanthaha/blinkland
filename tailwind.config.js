/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        primary: "var(--accent-color)",
        "primary-foreground": "#FFFFFF",
        muted: "var(--bg-tertiary)",
        "muted-foreground": "var(--text-secondary)",
        border: "var(--border-color)",
        ring: "var(--accent-glow)",
        accent: "var(--bg-secondary)",
      },
    },
  },
  plugins: [],
}
