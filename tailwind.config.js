/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        accent: 'rgb(var(--color-accent))',
        neutral: 'rgb(var(--color-neutral))',
        light: 'rgb(var(--color-light))',
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(45deg, rgba(var(--color-primary), 0.1) 25%, transparent 25%, transparent 50%, rgba(var(--color-primary), 0.1) 50%, rgba(var(--color-primary), 0.1) 75%, transparent 75%, transparent)',
      },
    },
  },
  plugins: [],
}
