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
		},
  },
  plugins: [],
}