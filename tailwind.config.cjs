/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Source Serif Pro'],
				pally: ['Pally Variable', 'Source Serif Pro'],
				mono: ['IBM Plex Mono']
			}
		}
	},
	plugins: []
};
