/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'header-image': "url('/img/header.png')",
				'section-image': "url('/img/section.png')",
				'footer-image': "url('/img/Frame.png')"
			},
			colors: {
				clr: 'rgba(136, 139, 244, 1)'
			}
		}
	},
	plugins: []
}
