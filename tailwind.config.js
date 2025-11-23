/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'dancing': ['Dancing Script', 'cursive'],
            },
            colors: {
                // app palette (keeps names simple and available as utilities)
                softPink: '#FFC4C4',
                roseRed: '#FF6B6B',
                lilac: '#C7A4FF',
                indigoCustom: '#6C63FF',
                sunset: '#FFB86B',
                mint: '#B6FFE0',
            },
        },
    },
    plugins: [],
}