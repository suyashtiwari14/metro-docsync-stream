import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        /* KMRL Brand Colors */
        kmrl: {
          orange: "hsl(var(--kmrl-orange))",
          "orange-light": "hsl(var(--kmrl-orange-light))",
          "orange-dark": "hsl(var(--kmrl-orange-dark))",
          blue: "hsl(var(--kmrl-blue))",
          "blue-light": "hsl(var(--kmrl-blue-light))",
          "blue-dark": "hsl(var(--kmrl-blue-dark))",
          green: "hsl(var(--kmrl-green))",
          "green-light": "hsl(var(--kmrl-green-light))",
        },
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        status: {
          online: "hsl(var(--status-online))",
          warning: "hsl(var(--status-warning))",
          offline: "hsl(var(--status-offline))",
          processing: "hsl(var(--status-processing))",
          "blue-line": "hsl(var(--status-blue-line))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-success': 'var(--gradient-success)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-background': 'var(--gradient-background)',
        'gradient-metro-lines': 'var(--gradient-metro-lines)',
      },
      boxShadow: {
        'elegant': 'var(--shadow-elegant)',
        'card': 'var(--shadow-card)',
        'floating': 'var(--shadow-floating)',
        'glass': 'var(--shadow-glass)',
        'glass-inset': 'var(--shadow-glass-inset)',
        'metro': 'var(--shadow-metro)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "train-move": "trainMove 20s linear infinite",
        "document-flow": "documentFlow 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "trainMove": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" }
        },
        "documentFlow": {
          "0%, 100%": { 
            transform: "translateX(0) scale(1)",
            opacity: "1"
          },
          "50%": { 
            transform: "translateX(20px) scale(1.05)",
            opacity: "0.8"
          }
        },
        "glow": {
          "0%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "100%": { boxShadow: "0 0 30px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.3)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
