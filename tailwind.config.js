module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#3490dc',
			secondary: '#00bbff',
			danger: '#e3342f',
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
