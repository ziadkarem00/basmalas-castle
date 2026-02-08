/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'obsidian': '#0F0F0F',
                'midnight-purple': '#2E0249',
                'dark-cherry': '#A91D3A',
                'rose-gold': '#F1B4BB',
                'moonlight': '#E5E5E5',
                'marble': '#E0C097',
                'deep-purple': '#2D033B',
            },
            fontFamily: {
                'gothic': ['UnifrakturMaguntia', 'serif'],
                'elegant': ['Crimson Text', 'serif'],
            },
            boxShadow: {
                'glow-rose': '0 0 20px rgba(241, 180, 187, 0.5), 0 0 40px rgba(241, 180, 187, 0.3)',
                'glow-cherry': '0 0 15px rgba(169, 29, 58, 0.4)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'dust': 'dust 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.05)' },
                },
                dust: {
                    '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
}
