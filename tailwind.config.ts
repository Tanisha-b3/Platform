/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#3B5BDB",
          orange: "#E87722",
          dark: "#1E1B3A",
          lavender: "#C5CAF0",
          bg: "#EEF0F8",
          "bg-dark": "#0F0E1A",
        },
      },
      animation: {
        float1: "float1 6s ease-in-out infinite",
        float2: "float2 7s ease-in-out infinite",
        float3: "float3 5.5s ease-in-out infinite",
        float4: "float4 8s ease-in-out infinite",
        float5: "float5 6.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "rotate(-8deg) translateY(0px)" },
          "50%": { transform: "rotate(-8deg) translateY(-10px)" },
        },
        float2: {
          "0%, 100%": { transform: "rotate(6deg) translateY(0px)" },
          "50%": { transform: "rotate(6deg) translateY(-14px)" },
        },
        float3: {
          "0%, 100%": { transform: "rotate(-4deg) translateY(0px)" },
          "50%": { transform: "rotate(-4deg) translateY(-8px)" },
        },
        float4: {
          "0%, 100%": { transform: "rotate(10deg) translateY(0px)" },
          "50%": { transform: "rotate(10deg) translateY(-12px)" },
        },
        float5: {
          "0%, 100%": { transform: "rotate(-12deg) translateY(0px)" },
          "50%": { transform: "rotate(-12deg) translateY(-9px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
