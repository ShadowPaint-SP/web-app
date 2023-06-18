/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		}
	},
	daisyui: {
		themes: ["light", "dark"],
	},

	plugins: [require("@tailwindcss/typography"), require("daisyui")]
};

module.exports = config;
