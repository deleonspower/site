/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'celestial-blue': '#009FF5',
				'midnight-blue': '#004D66',
				'sky-blue': '#48CAE4',
				'light-sky-blue-1': '#90E0EF',
				'light-sky-blue-2': '#ADE8F4',
				'light-sky-blue-3': '#CAF0F8',
			},
			backgroundImage: {
				'hero': "url('./hero.svg')",
				'hero-mobile': "url('./hero-mobile.svg')"
			}
		},
	},
	plugins: [],
}
