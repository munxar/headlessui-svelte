const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['index.html', 'src/**/*.{svelte,ts}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors,
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
