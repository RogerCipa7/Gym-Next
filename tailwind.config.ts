import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
            },
            colors: {
                emerald: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                    950: '#022c22',
                },
            },
            animation: {
                'gradient-x': 'gradient-x 4s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backgroundSize: {
                '300%': '300%',
            },
            boxShadow: {
                'glow': '0 0 30px rgba(52, 211, 153, 0.3)',
                'glow-lg': '0 0 60px rgba(52, 211, 153, 0.2)',
                'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
            },
        },
    },
    plugins: [],
}

export default config
