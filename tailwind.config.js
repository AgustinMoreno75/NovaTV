/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1DA1FF",
          secondary: "#0B5FFF",
          background: "#030B1A",
          card: "#081223",
          text: "#FFFFFF",
          muted: "#B8C2D3"
        }
      },
      boxShadow: {
        glow: "0 0 42px rgba(29, 161, 255, 0.28)",
        soft: "0 18px 70px rgba(0, 0, 0, 0.34)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        drift: {
          "0%": { transform: "translate3d(-8%, 0, 0)" },
          "100%": { transform: "translate3d(8%, 0, 0)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.22" },
          "50%": { opacity: "0.58" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite alternate",
        pulseLine: "pulseLine 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
