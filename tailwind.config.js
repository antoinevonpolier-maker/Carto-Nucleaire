/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0f172a",
        ink: "#1e293b",
        cyanAccent: "#06b6d4",
        orangeAccent: "#f97316",
      },
      boxShadow: {
        soft: "0 20px 50px -28px rgba(15, 23, 42, 0.45)",
      },
    },
  },
  plugins: [],
};
