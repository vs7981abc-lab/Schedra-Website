/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#03030c",
          card: "rgba(10, 10, 26, 0.45)",
          cardBorder: "rgba(255, 255, 255, 0.08)",
          muted: "#94a3b8",
        },
        neon: {
          cyan: "#00f0ff",
          blue: "#3b82f6",
          purple: "#d946ef",
          indigo: "#6366f1",
        }
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.2))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(217, 70, 239, 0.4))' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

