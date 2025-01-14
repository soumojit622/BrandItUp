/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  chart: {
			1: "hsl(var(--chart-1))",
			2: "hsl(var(--chart-2))",
			3: "hsl(var(--chart-3))",
			4: "hsl(var(--chart-4))",
			5: "hsl(var(--chart-5))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		animation: {
		  fadeIn: "fadeIn 1s ease-in-out",
		  fadeOut: "fadeOut 1s ease-in-out",
		  slideUp: "slideUp 0.5s ease-out",
		  slideDown: "slideDown 0.5s ease-out",
		  bounce: "bounce 1s infinite",
		  rotate: "rotate 1s linear infinite",
		  pulse: "pulse 2s infinite",
		  zoomIn: "zoomIn 0.8s ease-in-out",
		  zoomOut: "zoomOut 0.8s ease-in-out",
		  swing: "swing 1s ease-in-out infinite",
		  heartbeat: "heartbeat 1.5s ease-in-out infinite",
		},
		keyframes: {
		  fadeIn: {
			"0%": { opacity: "0" },
			"100%": { opacity: "1" },
		  },
		  fadeOut: {
			"0%": { opacity: "1" },
			"100%": { opacity: "0" },
		  },
		  slideUp: {
			"0%": { transform: "translateY(100%)" },
			"100%": { transform: "translateY(0)" },
		  },
		  slideDown: {
			"0%": { transform: "translateY(0)" },
			"100%": { transform: "translateY(100%)" },
		  },
		  bounce: {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-10px)" },
		  },
		  rotate: {
			"0%": { transform: "rotate(0deg)" },
			"100%": { transform: "rotate(360deg)" },
		  },
		  pulse: {
			"0%, 100%": { opacity: "1" },
			"50%": { opacity: "0.5" },
		  },
		  zoomIn: {
			"0%": { transform: "scale(0.5)", opacity: "0" },
			"100%": { transform: "scale(1)", opacity: "1" },
		  },
		  zoomOut: {
			"0%": { transform: "scale(1)", opacity: "1" },
			"100%": { transform: "scale(0.5)", opacity: "0" },
		  },
		  swing: {
			"20%": { transform: "rotate(15deg)" },
			"40%": { transform: "rotate(-10deg)" },
			"60%": { transform: "rotate(5deg)" },
			"80%": { transform: "rotate(-5deg)" },
			"100%": { transform: "rotate(0deg)" },
		  },
		  heartbeat: {
			"0%, 100%": { transform: "scale(1)", opacity: "1" },
			"50%": { transform: "scale(1.2)", opacity: "0.8" },
		  },
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  