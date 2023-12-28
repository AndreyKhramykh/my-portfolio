/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				black: '#07070b',
				green: '#009900',
				white: '#cccccc',
				grey: '#20202c'
			},
			screens: {
        '1200': '1200px',
				'768': '768px',
				'425': '425px'
      },
		},
  },
  plugins: [],
}