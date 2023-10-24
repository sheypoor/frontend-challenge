/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        primary: {
          50: "#e4f2f8",
          100: "#bddef0",
          200: "#97cae6",
          300: "#73b6dc",
          400: "#59a6d6",
          500: "#4298d0",
          600: "#388bc4",
          700: "#2d7ab3",
          800: "#2569a1",
          900: "#174D82",
        },
        success: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },

        destructive: {
          400: "#F87171",
        },
        stroke: {
          12: "rgba(0, 0, 0, 0.12)",
        },
      },
    },
  },
  plugins: [],
};
