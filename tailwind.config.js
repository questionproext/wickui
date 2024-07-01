/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "q-blue": {
          500: "hsl(226, 65%, 30%)",
        },
        "p-blue": {
          100: "hsl(206, 80%, 96%)",
          200: "hsl(208, 80%, 75%)",
          300: "hsl(208, 80%, 63%)",
          400: "hsl(208, 80%, 50%)",
        },
        "p-gray": {
          100: "hsl(0, 0%, 96%)",
          200: "hsl(0, 0%, 93%)",
          300: "hsl(0, 0%, 91%)",
          400: "hsl(0, 0%, 85%)",
          500: "hsl(0, 0%, 61%)",
          600: "hsl(0, 0%, 33%)",
          700: "hsl(0, 0%, 25%)",
        },
        tooltip: {
          DEFAULT: "hsl(0, 0%, 33%)",
        },
        text: {
          DEFAULT: "hsl(214, 12%, 37%)",
        },
        toolbar: {
          DEFAULT: "hsl(0, 0%, 25%)",
        },
      },
      borderRadius: {
        lg: "var(--radius) + 2px",
        md: "calc(var(--radius))",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
